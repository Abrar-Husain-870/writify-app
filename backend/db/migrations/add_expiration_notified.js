// Migration script to add expiration_notified column to users table
require('dotenv').config();
const { Pool } = require('pg');

// Database connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

async function addExpirationNotifiedColumn() {
    const client = await pool.connect();
    try {
        console.log('Starting migration: Adding expiration_notified column to users table...');
        
        // Check if column already exists
        const checkResult = await client.query(`
            SELECT column_name 
            FROM information_schema.columns 
            WHERE table_name = 'users' AND column_name = 'expiration_notified'
        `);
        
        if (checkResult.rows.length === 0) {
            // Column doesn't exist, add it
            await client.query(`
                ALTER TABLE users 
                ADD COLUMN expiration_notified BOOLEAN DEFAULT FALSE
            `);
            console.log('Successfully added expiration_notified column to users table');
        } else {
            console.log('Column expiration_notified already exists in users table');
        }
        
    } catch (error) {
        console.error('Error during migration:', error);
    } finally {
        client.release();
        // Close the pool
        await pool.end();
    }
}

// Run the migration
addExpirationNotifiedColumn().then(() => {
    console.log('Migration completed');
}).catch(err => {
    console.error('Migration failed:', err);
});
