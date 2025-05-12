// db.test.js
const { describe, it, expect, vi } = require('vitest');
import { Pool } from 'pg';

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

const { Pool } = require('pg');

describe('getUserById', () => {
    it('returns a user from the database', async () => {
        const fakeUser = { id: '1', name: 'Alice' };

        // mock the query method on Pool
        Pool.mockImplementation(() => ({
            query: vi.fn().mockResolvedValue({ rows: [fakeUser] })
        }));

        const user = await getUserById('1');

        expect(user).toEqual(fakeUser);
        expect(Pool().query).toHaveBeenCalledWith(
            'SELECT * FROM users WHERE id = $1',
            ['1']
        );
    });
});
