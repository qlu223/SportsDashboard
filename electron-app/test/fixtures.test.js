// db.test.js
import { describe, it, expect, vi } from 'vitest';
import FixturesAPI from '../data/fixtures.js';

describe('FixturesAPI', () => {
    it('returns league data object', async () => {
        let t = new FixturesAPI;
        let fixtures = await t.getFixturesData();

        expect(fixtures.length).toBe(20);
    });
});
