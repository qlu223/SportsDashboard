import React, { useEffect, useState } from 'react';

export default function FixtureTable (){
    const [fixtures, setFixtures] = useState([]);
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        async function fetchData() {
          try {
            const data = await window.fplAPI.getFilteredFixturesData();
            const teams = await window.fplAPI.getLeagueData();
            console.log("Fetched data:", data);
            setFixtures(data);
            setTeams(teams);
          } catch (err) {
            console.error("Error fetching FPL data:", err);
          } finally {
            setLoading(false);
          }
        }
    
        fetchData();
      }, []);
    
      if (loading) return <div>Loading...</div>;
      
    const getTeamName = (id) => teams.find(team => team.id === id)?.name || 'Unknown';
    
      return (
        <div>
          <h1>Fixture Table</h1>
          <table>
            <thead>
              <tr>
                <th>Home Team</th>
                <th>Away Team</th>
                <th>Kickoff Time</th>
                <th>Home Score</th>
                <th>Away Score</th>
              </tr>
            </thead>
            <tbody>
              {fixtures.map((fixture) => (
                <tr key={fixture.code}>
                <td>{getTeamName(fixture.team_h)}</td>
                <td>{getTeamName(fixture.team_a)}</td>
                <td>{new Date(fixture.time).toLocaleString()}</td>
                <td>{fixture.team_h_score !== null ? fixture.team_h_score : '-'}</td>
                <td>{fixture.team_a_score !== null ? fixture.team_a_score : '-'}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      );
}