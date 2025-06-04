import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


const chartSetting = {

  yAxis: [{ label: 'Players', width: 120, scaleType: 'band', dataKey: 'web_name', type: 'category' }],
  height: 300,
  width: 550,
};
export default function BarsDataset() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await window.fplAPI.getPlayerData();
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

  const validPlayers = players.filter(
    p =>
      typeof p.web_name === 'string' &&
      p.web_name.trim() !== '' &&
      typeof p.total_points === 'number' &&
      !isNaN(p.total_points)
  );
  const top5Players = validPlayers
    .slice() // create a shallow copy so you don't mutate original array
    .sort((a, b) => b.total_points - a.total_points) // descending sort by total_points
    .slice(0, 5); // take first 5 players

  const chartData = top5Players.map(p => ({
    web_name: p.web_name,
    total_points: p.total_points,
  }));
 
  return (
    <BarChart
      dataset={chartData}
      yAxis={chartSetting.yAxis}
      series={[{ dataKey: 'total_points', label: 'Total points' }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
