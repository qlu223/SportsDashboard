import React, { useEffect, useState } from 'react';

function Caret({active , direction}){
  if(!active){
    return null;
  }
  return <span style = {{marginLeft: 4}}>{direction === "asc" ? "▲" : "▼"}</span>
}

export default function PlayerTable() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await window.fplAPI.getPlayerData();
        const teamData = await window.fplAPI.getLeagueData();
        console.log(data)
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
  
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const sortPlayers = (key)=>{
    let direction = "asc";
    if(sortConfig.key === key & sortConfig.direction === "asc"){
      direction ="desc"
    }
    
    const sortedPlayers= [...players].sort((a,b)=>{
      let aValue;
      let bValue;
      if(key == "teamName"){
        aValue = teams.find(team=>team.id === a.team)?.name ?? "";
        bValue = teams.find(team => team.id === b.team)?.name ?? "";
      }else{
        aValue = (a[key] ?? "").toString().toLowerCase();
        bValue = (b[key] ?? "").toString().toLowerCase();

      }
      if (aValue < bValue){
        return direction === "asc" ? -1 : 1;
      } 
      if (aValue > bValue){
        return direction === "asc" ? 1 : -1;
      } 
      return 0;
    }) 
    setPlayers(sortedPlayers);
    setSortConfig({key, direction});
  };
  
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortPlayers("web_name")}>
              Name <Caret active={sortConfig.key === "web_name"} direction={sortConfig.direction} /></th>
            <th class = "teamName" onClick ={()=>sortPlayers("teamName")}>
              Team</th>
            <th onClick={() => sortPlayers("assists")}>
              Assists <Caret active={sortConfig.key === "assists"} direction={sortConfig.direction} /></th>
            <th onClick={() => sortPlayers("goals_scored")}>
              Goals <Caret active={sortConfig.key === "goals_scored"} direction={sortConfig.direction} /></th>
            <th onClick={()=> sortPlayers("now_cost")}> Cost</th>
            <th onClick={() => sortPlayers("total_points")}>
              Points <Caret active={sortConfig.key === "total_points"} direction={sortConfig.direction} /></th>
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
              <td>{player.total_points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
