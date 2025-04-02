// Script to remove expiration_notified column from users table
require('dotenv').config();
const { Pool } = require('pg');

// Use a local PostgreSQL connection
const pool = new Pool({
    user: 'postgres',     // Default PostgreSQL username
    password: 'postgres', // Default PostgreSQL password - change this if yours is different
    host: 'localhost',    // Local host
    port: 5432,           // Default PostgreSQL port
    database: 'writify'   // Your database name - change this if yours is different
});

async function removeColumn() {
    const client = await pool.connect();
    try {
        console.log('Checking if expiration_notified column exists...');
        
        // Check if column exists
        const checkResult = await client.query(`
            SELECT column_name 
            FROM information_schema.columns 
            WHERE table_name = 'users' AND column_name = 'expiration_notified'
        `);
        
        if (checkResult.rows.length > 0) {
            console.log('Column exists, removing it...');
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
        console.error('Error:', error);
    } finally {
        client.release();
        await pool.end();
    }
}

removeColumn().then(() => {
    console.log('Done');
}).catch(err => {
    console.error('Failed:', err);
});
