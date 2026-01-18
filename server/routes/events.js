
import express from 'express';
import db from '../db/sqlite.js';

const router = express.Router();
const generateId = () => Math.random().toString(36).substr(2, 9);

// Get All Events
router.get('/events', (req, res) => {
    const stmt = db.prepare('SELECT * FROM events');
    const events = stmt.all();
    res.json(events);
});

// Register User for Event
router.post('/register', (req, res) => {
    const { eventId, user } = req.body;

    try {
        // 1. Check if user exists or create
        let userId;
        const checkUser = db.prepare('SELECT id FROM users WHERE email = ?');
        const existingUser = checkUser.get(user.email);

        if (existingUser) {
            userId = existingUser.id;
        } else {
            userId = generateId();
            const insertUser = db.prepare('INSERT INTO users (id, name, email, role) VALUES (?, ?, ?, ?)');
            insertUser.run(userId, user.name, user.email, user.role || 'attendee');
        }

        // 2. Create Registration
        const regId = generateId();
        const insertReg = db.prepare('INSERT INTO registrations (id, event_id, user_id) VALUES (?, ?, ?)');
        insertReg.run(regId, eventId, userId);

        res.json({ success: true, registrationId: regId, message: 'Registration successful' });
    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});


// Get All Registrations (for Admin Dashboard)
router.get('/registrations', (req, res) => {
    try {
        const query = `
            SELECT 
                r.id, 
                r.status, 
                r.timestamp, 
                r.ticket_type as ticketType,
                r.payment_method as paymentMethod,
                r.amount_paid as amountPaid,
                u.name as attendeeName, 
                u.email, 
                u.role,
                e.name as eventName
            FROM registrations r
            JOIN users u ON r.user_id = u.id
            JOIN events e ON r.event_id = e.id
            ORDER BY r.timestamp DESC
        `;
        const stmt = db.prepare(query);
        const registrations = stmt.all();
        res.json(registrations);
    } catch (error) {
        console.error('Error fetching registrations:', error);
        res.status(500).json({ error: 'Failed to fetch registrations' });
    }
});

export default router;

