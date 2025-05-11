// db.test.js
const { describe, it, expect, vi } = require('vitest');
const { getUserById } = require('./db');

vi.mock('pg', () => {
    return {
        Pool: vi.fn(() => ({
            query: vi.fn()
        }))
    };
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
