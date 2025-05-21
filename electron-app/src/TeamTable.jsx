import React, { useEffect, useState } from 'react';

export default function TeamTable() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await window.fplAPI.getLeagueData();
        setTeams(data);
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
      <h1>League Team Table</h1>
      <table>
        <thead>
          <tr>
            <th>Team ID</th>
            <th>Name</th>
            <th>Short Name</th>
            <th>Strength</th>
          </tr>
        </thead>
        <tbody>
            {teams.map((team) =>(
                <tr key={team.id}>
                    <td>{team.id}</td>
                    <td>{team.name}</td>
                    <td>{team.short_name}</td>
                    <td>{team.strength}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
