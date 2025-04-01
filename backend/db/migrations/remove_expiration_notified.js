// Migration script to remove expiration_notified column from users table
require('dotenv').config();
const { Pool } = require('pg');

// Database connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

async function removeExpirationNotifiedColumn() {
    const client = await pool.connect();
    try {
        console.log('Starting migration: Removing expiration_notified column from users table...');
        
        // Check if column exists
        const checkResult = await client.query(`
            SELECT column_name 
            FROM information_schema.columns 
            WHERE table_name = 'users' AND column_name = 'expiration_notified'
        `);
        
        if (checkResult.rows.length > 0) {
            // Column exists, remove it
            await client.query(`
                ALTER TABLE users 
                DROP COLUMN expiration_notified
            `);
            console.log('Successfully removed expiration_notified column from users table');
        } else {
            console.log('Column expiration_notified does not exist in users table');
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
removeExpirationNotifiedColumn().then(() => {
    console.log('Migration completed');
}).catch(err => {
    console.error('Migration failed:', err);
});
