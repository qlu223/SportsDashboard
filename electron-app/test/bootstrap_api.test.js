// db.test.js
import { describe, it, expect, vi } from 'vitest';
import BootstrapAPI from '../data/bootstrap_api.js';

describe('bootstrapAPI', () => {
    it('returns array with length 20', async () => {
        let t = new BootstrapAPI;
        let teams = await t.getLeagueData();

        expect(teams.length).toBe(20);
    });

    it('returns array of objects with name', async () => {
        let t = new BootstrapAPI;
        let teams = await t.getLeagueData();

        expect(teams[0]['name']).toBe('Arsenal')

    });

    it('returns array of player objects with name Fabio Vieira', async () => {
        let t = new BootstrapAPI;
        let players = await t.getPlayerData();

        expect(players[0]['web_name']).toBe('Fábio Vieira')
    });

    it('returns array of player objects with points', async () => {
        let t = new BootstrapAPI;
        let players = await t.getPlayerData();
      
        expect(players[0]['total_points']).toBe(0)

    });
});
