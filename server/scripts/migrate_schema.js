
import db from '../db/sqlite.js';

console.log('🔄 Application pending schema migrations...');

try {
    // Attempt to add columns. If they exist, it will throw, so we catch and ignore.
    const addTicketType = "ALTER TABLE registrations ADD COLUMN ticket_type TEXT";
    const addPaymentMethod = "ALTER TABLE registrations ADD COLUMN payment_method TEXT";
    const addAmountPaid = "ALTER TABLE registrations ADD COLUMN amount_paid REAL";

    try { db.exec(addTicketType); console.log("Added ticket_type column."); } catch (e) { }
    try { db.exec(addPaymentMethod); console.log("Added payment_method column."); } catch (e) { }
    try { db.exec(addAmountPaid); console.log("Added amount_paid column."); } catch (e) { }

    console.log('✅ Schema migration complete.');
} catch (error) {
    console.error('Migration failed:', error);
}
