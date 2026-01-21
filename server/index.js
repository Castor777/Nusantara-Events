// Load environment variables FIRST before any other imports
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { initDb } from './db/sqlite.js';
import eventsRouter from './routes/events.js';
import paymentRouter from './routes/payment.js';

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true
}));
app.use(express.json());

// Mount Routes
app.use('/api', eventsRouter);
app.use('/api/payment', paymentRouter);

// Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Initialize database and start server
const start = async () => {
    try {
        await initDb();
        console.log('✅ Database initialized');

        app.listen(PORT, () => {
            console.log(`\n🚀 Nusantara Events API running on http://localhost:${PORT}`);
            console.log(`\n📊 Available endpoints:`);
            console.log(`   GET  /api/health        - Health check`);
            console.log(`   GET  /api/events        - List all events`);
            console.log(`   GET  /api/registrations - List all registrations`);
            console.log(`   POST /api/register      - Register for an event`);
            console.log(`   POST /api/payment/create-intent - Create payment intent`);
            console.log(`   POST /api/payment/webhook       - Stripe webhook\n`);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

start();
