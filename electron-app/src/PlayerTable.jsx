import React, { useEffect, useState } from 'react';

export default function PlayerTable() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await window.fplAPI.getData();
        setPlayers(data.elements);
        setTeams(data.teams);
        setPositions(data.element_types);
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
            <th>Position</th>
            <th>Price (M)</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => {
            const teamName = teams[player.team - 1]?.name || 'Unknown Team';
            const posName = positions[player.element_type - 1]?.singular_name_short || 'Unknown Position';
            return (
              <tr key={player.id}>
                <td>{`${player.first_name} ${player.second_name}`}</td>
                <td>{teamName}</td>
                <td>{posName}</td>
                <td>{(player.now_cost / 10).toFixed(1)}</td>
                <td>{player.total_points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
