import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import {Box, Typography} from '@mui/material';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
//Reference: https://mui.com/x/react-charts/bars/
const chartSetting = {

  yAxis: [
    {
      label: 'Players',
      width: 120, 
      scaleType: 'band', 
      dataKey: 'web_name', 
      type: 'category' }],
  xAxis: [
    {
      label: 'Total points',
    },
  ],
  height: 300,
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
  // Filter out invalid players and empty strings
  const validPlayers = players.filter(
    p =>
      typeof p.web_name === 'string' &&
      p.web_name.trim() !== '' &&
      typeof p.total_points === 'number' &&
      !isNaN(p.total_points)
  );
  // Keep only the top 5 players of the season with the most points
  const top5Players = validPlayers
    .slice() 
    .sort((a, b) => b.total_points - a.total_points) 
    .slice(0, 5);

  const chartData = top5Players.map(p => ({
    web_name: p.web_name,
    total_points: p.total_points
  }));
 
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '10px',
        width: {
                xs: '100%',  // full width on mobile
                sm: '75%',   // 75% width on tablets
                md: '75%'    // 50% width on desktop
                },
      }}>
      <Typography variant="h6" gutterBottom align= "center">
        Top 5 Players by Total Points
      </Typography>
      <BarChart
        dataset={chartData}
        yAxis={chartSetting.yAxis}
        series={[
          { dataKey: 'total_points', label: 'Total points'}
        ]}
        layout="horizontal"
        grid={{ vertical: true }}
        {...chartSetting}
      />
    </Box>
  );
}

/*
<BarChart
        dataset={chartData}
        yAxis={chartSetting.yAxis}
        series={[
          { dataKey: 'total_points', label: 'Total points'}
        ]}
        layout="horizontal"
        grid={{ vertical: true }}
        {...chartSetting}
      />
*/