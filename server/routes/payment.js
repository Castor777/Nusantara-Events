import express from 'express';
import Stripe from 'stripe';

const router = express.Router();

// Stripe will be initialized lazily when routes are called
// This ensures process.env is populated by dotenv first
const getStripe = () => {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
        throw new Error('STRIPE_SECRET_KEY not configured in environment variables');
    }
    return new Stripe(key);
};

/**
 * Get payment methods based on currency
 */
const getPaymentMethodTypes = (currency) => {
    const methods = {
        'sgd': ['card', 'paynow', 'grabpay'],
        'myr': ['card', 'grabpay', 'fpx'],
        'thb': ['card', 'promptpay'],
        'idr': ['card'],
        'php': ['card'],
        'vnd': ['card'],
        'usd': ['card']
    };

    return methods[currency.toLowerCase()] || ['card'];
};

/**
 * POST /api/payment/create-intent
 * Creates a Stripe PaymentIntent for event registration
 */
router.post('/create-intent', async (req, res) => {
    try {
        const { amount, currency, eventId, eventName, userEmail } = req.body;

        if (!amount || !currency || !eventId) {
            return res.status(400).json({
                error: 'Missing required fields: amount, currency, eventId'
            });
        }

        // Get Stripe instance (initialized with env var)
        const stripe = getStripe();

        // Create PaymentIntent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Convert to cents
            currency: currency.toLowerCase(),
            payment_method_types: getPaymentMethodTypes(currency),
            metadata: {
                eventId,
                eventName: eventName || 'Event Registration',
                userEmail: userEmail || 'guest@example.com'
            },
            description: `Ticket for ${eventName || 'event'}`
        });

        console.log(`✅ PaymentIntent created: ${paymentIntent.id} for ${currency.toUpperCase()} ${amount}`);

        res.json({
            clientSecret: paymentIntent.client_secret,
            paymentIntentId: paymentIntent.id
        });
    } catch (error) {
        console.error('❌ Stripe PaymentIntent error:', error);
        res.status(500).json({
            error: error.message || 'Failed to create payment intent'
        });
    }
});

/**
 * POST /api/payment/webhook
 * Stripe webhook handler for payment events
 */
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret) {
        console.warn('⚠️ STRIPE_WEBHOOK_SECRET not set - skipping signature verification');
        return res.status(400).send('Webhook secret not configured');
    }

    let event;
    const stripe = getStripe();

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err) {
        console.error('❌ Webhook signature verification failed:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log(`✅ Payment succeeded: ${paymentIntent.id}`);
            console.log(`   Event: ${paymentIntent.metadata.eventId}`);
            console.log(`   Amount: ${paymentIntent.currency.toUpperCase()} ${paymentIntent.amount / 100}`);

            // TODO: Update registration status in database
            // Example: await updateRegistrationStatus(paymentIntent.metadata.eventId, 'paid');
            break;

        case 'payment_intent.payment_failed':
            const failedPayment = event.data.object;
            console.error(`❌ Payment failed: ${failedPayment.id}`);
            console.error(`   Reason: ${failedPayment.last_payment_error?.message}`);
            break;

        default:
            console.log(`ℹ️ Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
});

/**
 * GET /api/payment/config
 * Returns Stripe publishable key for frontend
 */
router.get('/config', (req, res) => {
    res.json({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY || ''
    });
});

export default router;
