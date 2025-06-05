import React, { useEffect, useState } from 'react';

export default function PlayerTable() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await window.fplAPI.getPlayerData();
        const teamData = await window.fplAPI.getLeagueData();
        console.log(data);
        setTeams(teamData);
        setPlayers(data);
      } catch (err) {
        console.error("Error fetching FPL data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Player Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Assists</th>
            <th>Goals</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.web_name}</td>
              <td>{teams.find(team => team.id === player.team)?.name || 'Unknown'}</td>
              <td>{player.assists}</td>
              <td>{player.goals_scored}</td>
              <td>{(player.now_cost / 10).toFixed(1)}M</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
