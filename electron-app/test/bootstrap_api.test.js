// db.test.js
import { describe, it, expect, vi } from 'vitest';
import BootstrapAPI from '../data/bootstrap_api.js';

describe('bootstrapAPI', () => {
    it('returns object with length 20', async () => {
        let t = new BootstrapAPI;
        let teams = await t.getLeagueData();

        expect(teams.length).toBe(20);
    });

    it('returns array with array[0] = object with id = 1', async () => {
        let t = new BootstrapAPI;
        let players = await t.getPlayerData();

        expect(players[0].id).toBe(1);
    });
});
