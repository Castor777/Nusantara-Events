import React, { useState, useEffect } from 'react';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import {
    Elements,
    PaymentElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';
import { Loader2, CreditCard, CheckCircle, XCircle } from 'lucide-react';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');

interface StripePaymentProps {
    amount: number;
    currency: string;
    eventId: string;
    eventName: string;
    userEmail: string;
    onSuccess: (paymentIntentId: string) => void;
    onError: (error: string) => void;
    onCancel: () => void;
}

const CheckoutForm: React.FC<Omit<StripePaymentProps, 'amount' | 'currency' | 'eventId' | 'eventName' | 'userEmail'>> = ({
    onSuccess,
    onError,
    onCancel
}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);
        setErrorMessage('');

        try {
            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/payment-success`,
                },
                redirect: 'if_required'
            });

            if (error) {
                setErrorMessage(error.message || 'Payment failed');
                onError(error.message || 'Payment failed');
            } else if (paymentIntent && paymentIntent.status === 'succeeded') {
                onSuccess(paymentIntent.id);
            }
        } catch (err: any) {
            setErrorMessage(err.message || 'An unexpected error occurred');
            onError(err.message || 'An unexpected error occurred');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                <PaymentElement />
            </div>

            {errorMessage && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3">
                    <XCircle className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
                    <div className="flex-1">
                        <p className="text-red-400 text-sm font-semibold">{errorMessage}</p>
                    </div>
                </div>
            )}

            <div className="flex gap-3">
                <button
                    type="button"
                    onClick={onCancel}
                    className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-xl font-semibold uppercase text-xs tracking-widest transition-colors"
                    disabled={isProcessing}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={!stripe || isProcessing}
                    className="flex-1 bg-gradient-to-r from-mantis-500 to-emerald-600 hover:from-mantis-400 hover:to-emerald-500 text-white py-4 rounded-xl font-semibold uppercase text-xs tracking-widest transition-all shadow-lg shadow-mantis-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isProcessing ? (
                        <>
                            <Loader2 className="animate-spin" size={18} />
                            <span>Processing...</span>
                        </>
                    ) : (
                        <>
                            <CreditCard size={18} />
                            <span>Pay Now</span>
                        </>
                    )}
                </button>
            </div>
        </form>
    );
};

const StripePayment: React.FC<StripePaymentProps> = ({
    amount,
    currency,
    eventId,
    eventName,
    userEmail,
    onSuccess,
    onError,
    onCancel
}) => {
    const [clientSecret, setClientSecret] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        // Create PaymentIntent when component mounts
        const createPaymentIntent = async () => {
            try {
                const response = await fetch('/api/payment/create-intent', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        amount,
                        currency,
                        eventId,
                        eventName,
                        userEmail
                    })
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || 'Failed to initialize payment');
                }

                setClientSecret(data.clientSecret);
            } catch (err: any) {
                setError(err.message || 'Failed to initialize payment');
                onError(err.message || 'Failed to initialize payment');
            } finally {
                setLoading(false);
            }
        };

        createPaymentIntent();
    }, [amount, currency, eventId, eventName, userEmail]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <Loader2 className="animate-spin text-mantis-500" size={48} />
                <p className="text-slate-400 text-sm font-medium">Initializing payment...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
                    <XCircle className="text-red-400 mx-auto mb-3" size={48} />
                    <p className="text-red-400 text-sm font-semibold mb-4">{error}</p>
                    <button
                        onClick={onCancel}
                        className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-semibold uppercase text-xs tracking-widest transition-colors"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    if (!clientSecret) {
        return null;
    }

    const options: StripeElementsOptions = {
        clientSecret,
        appearance: {
            theme: 'night',
            variables: {
                colorPrimary: '#4caf50',
                colorBackground: '#1e293b',
                colorText: '#ffffff',
                colorDanger: '#ef4444',
                fontFamily: 'Inter, system-ui, sans-serif',
                spacingUnit: '4px',
                borderRadius: '12px'
            }
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-mantis-500/10 rounded-2xl">
                    <CreditCard size={24} className="text-mantis-400" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">Secure Payment</h3>
                    <p className="text-xs text-slate-400">Powered by Stripe</p>
                </div>
            </div>

            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm onSuccess={onSuccess} onError={onError} onCancel={onCancel} />
            </Elements>

            <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest pt-4">
                🔒 256-bit SSL Encrypted Payment
            </p>
        </div>
    );
};

export default StripePayment;
