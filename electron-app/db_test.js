const { Pool } = require('pg');

const path = require('path');
require('dotenv').config({
    override: true,
    path: path.join(__dirname, 'development.env')
});

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

(async () => {
    const client = await pool.connect();
    try {

        const { rows } = await client.query('SELECT current_user');
        const current_user = rows[0]['current_user'];
        console.log(current_user);
    } catch (err) {
        console.error(err);
    } finally {
        client.release();
    }

})();