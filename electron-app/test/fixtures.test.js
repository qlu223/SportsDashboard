// db.test.js
import { describe, it, expect, vi } from 'vitest';
import FixturesAPI from '../data/fixtures.js';

describe('FixturesAPI', () => {
    it('returns array of length 380', async () => {
        let t = new FixturesAPI;
        let fixtures = await t.getFixturesData();

        expect(fixtures.length).toBe(380);
    });

    it('returns up to date fixtures object', async () => {
        let t = new FixturesAPI;
        let fixtures = await t.getFixturesData();
        let max_gw = fixtures[379]['event'];

        expect(max_gw).toBe(38);
    });
});
