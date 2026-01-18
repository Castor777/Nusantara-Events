
import db from '../db/sqlite.js';

const seedData = async () => {
    console.log('🌱 Seeding database with dummy users...');

    const dummyUsers = [
        { name: 'Alice Tan', email: 'alice@example.com', role: 'attendee', eventId: 'evt_1' },
        { name: 'Bob Lee', email: 'bob.lee@tech.sg', role: 'attendee', eventId: 'evt_1' },
        { name: 'Charlie Ng', email: 'charlie.ng@finance.my', role: 'vip', eventId: 'evt_1' },
        { name: 'Diana Prince', email: 'diana@aws.com', role: 'speaker', eventId: 'evt_1' },
        { name: 'Evan Wong', email: 'evan@startup.id', role: 'attendee', eventId: 'evt_1' }
    ];

    // Ensure event exists
    const eventStmt = db.prepare('INSERT OR IGNORE INTO events (id, name, date, location, category) VALUES (?, ?, ?, ?, ?)');
    eventStmt.run('evt_1', 'SEA Tech Week', '2024-11-15', 'Marina Bay Sands', 'Technology');

    const userStmt = db.prepare('INSERT OR IGNORE INTO users (id, name, email, role) VALUES (?, ?, ?, ?)');
    const regStmt = db.prepare('INSERT OR IGNORE INTO registrations (id, event_id, user_id, status, ticket_type, payment_method, amount_paid) VALUES (?, ?, ?, ?, ?, ?, ?)');

    dummyUsers.forEach((u, index) => {
        const userId = `user_seed_${index + 1}`;
        const regId = `reg_seed_${index + 1}`;

        // Insert User
        userStmt.run(userId, u.name, u.email, u.role);

        // Insert Registration (to show up in dashboard)
        regStmt.run(
            regId,
            u.eventId,
            userId,
            'confirmed',
            u.role === 'vip' ? 'VIP Pass' : 'Standard Pass',
            'Credit Card',
            u.role === 'vip' ? 299 : 149
        );

        console.log(`✅ Added ${u.name} (${u.role})`);
    });

    console.log('✨ Seeding complete!');
};

seedData();
