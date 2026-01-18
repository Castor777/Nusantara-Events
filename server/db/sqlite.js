import initSqlJs from 'sql.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, 'local.db');

let db = null;

// Initialize database
const initDb = async () => {
    if (db) return db;

    const SQL = await initSqlJs();

    // Load existing database or create new one
    if (fs.existsSync(dbPath)) {
        const buffer = fs.readFileSync(dbPath);
        db = new SQL.Database(buffer);
        console.log('📂 Loaded existing database from', dbPath);
    } else {
        db = new SQL.Database();
        console.log('🆕 Created new database');
    }

    // Initialize Tables
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            name TEXT,
            email TEXT UNIQUE,
            role TEXT DEFAULT 'attendee',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS events (
            id TEXT PRIMARY KEY,
            name TEXT,
            date TEXT,
            location TEXT,
            category TEXT
        );
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS registrations (
            id TEXT PRIMARY KEY,
            event_id TEXT,
            user_id TEXT,
            status TEXT DEFAULT 'confirmed',
            ticket_type TEXT,
            payment_method TEXT,
            amount_paid REAL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id),
            FOREIGN KEY(event_id) REFERENCES events(id)
        );
    `);

    // Save after initialization
    saveDb();

    return db;
};

// Save database to file
const saveDb = () => {
    if (db) {
        const data = db.export();
        const buffer = Buffer.from(data);
        fs.writeFileSync(dbPath, buffer);
        console.log('💾 Database saved to', dbPath);
    }
};

// Helper functions to match better-sqlite3 API style
const getDb = () => db;

const prepare = (sql) => ({
    all: (...params) => {
        const stmt = db.prepare(sql);
        stmt.bind(params);
        const results = [];
        while (stmt.step()) {
            results.push(stmt.getAsObject());
        }
        stmt.free();
        return results;
    },
    get: (...params) => {
        const stmt = db.prepare(sql);
        stmt.bind(params);
        const result = stmt.step() ? stmt.getAsObject() : undefined;
        stmt.free();
        return result;
    },
    run: (...params) => {
        db.run(sql, params);
        saveDb();
        return { changes: db.getRowsModified() };
    }
});

export { initDb, getDb, prepare, saveDb };
export default { initDb, getDb, prepare, saveDb };
