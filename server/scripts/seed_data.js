import { initDb, prepare, saveDb } from '../db/sqlite.js';

const seedData = async () => {
    console.log('🌱 Initializing database and seeding data...');

    await initDb();

    console.log('📝 Adding sample event...');

    // Ensure event exists
    const eventCheck = prepare('SELECT id FROM events WHERE id = ?').get('evt_1');
    if (!eventCheck) {
        prepare('INSERT INTO events (id, name, date, location, category) VALUES (?, ?, ?, ?, ?)').run(
            'evt_1', 'SEA Tech Week', '2024-11-15', 'Marina Bay Sands', 'Technology'
        );
        console.log('✅ Added event: SEA Tech Week');
    } else {
        console.log('ℹ️ Event already exists');
    }

    const dummyUsers = [
        { name: 'Alice Tan', email: 'alice@example.com', role: 'attendee', eventId: 'evt_1' },
        { name: 'Bob Lee', email: 'bob.lee@tech.sg', role: 'attendee', eventId: 'evt_1' },
        { name: 'Charlie Ng', email: 'charlie.ng@finance.my', role: 'vip', eventId: 'evt_1' },
        { name: 'Diana Prince', email: 'diana@aws.com', role: 'speaker', eventId: 'evt_1' },
        { name: 'Evan Wong', email: 'evan@startup.id', role: 'attendee', eventId: 'evt_1' }
    ];

    console.log('\n👥 Adding sample users and registrations...');

    dummyUsers.forEach((u, index) => {
        const userId = `user_seed_${index + 1}`;
        const regId = `reg_seed_${index + 1}`;

        // Check if user exists
        const userCheck = prepare('SELECT id FROM users WHERE id = ?').get(userId);
        if (!userCheck) {
            // Insert User
            prepare('INSERT INTO users (id, name, email, role) VALUES (?, ?, ?, ?)').run(userId, u.name, u.email, u.role);

            // Insert Registration
            prepare('INSERT INTO registrations (id, event_id, user_id, status, ticket_type, payment_method, amount_paid) VALUES (?, ?, ?, ?, ?, ?, ?)').run(
                regId,
                u.eventId,
                userId,
                'confirmed',
                u.role === 'vip' ? 'VIP Pass' : 'Standard Pass',
                'Credit Card',
                u.role === 'vip' ? 299 : 149
            );

            console.log(`   ✅ Added ${u.name} (${u.role})`);
        } else {
            console.log(`   ℹ️ ${u.name} already exists`);
        }
    });

    saveDb();

    console.log('\n✨ Seeding complete!');
    console.log('💾 Database saved to server/db/local.db');
};

seedData().catch(console.error);
