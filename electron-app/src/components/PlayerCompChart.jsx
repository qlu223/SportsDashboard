import * as React from 'react';
import { RadarChart } from '@mui/x-charts/RadarChart';
import {Box, Typography} from '@mui/material';

let data = await window.fplAPI.getPlayerData();

function createData(data){
    let arr = [];

    for (let i in data)
    {
        let row = data[i];
        if(row.web_name == "Mitoma" || row.web_name == "Rogers")
        {
            let new_row = 
            {
                label: row.web_name, 
                data: [
                    parseFloat(row["goals_scored"]), parseFloat(row["expected_goals"]), parseFloat(row["assists"]),
                    parseFloat(row["expected_assists"]), parseFloat(row["bonus"]), parseFloat(row["clean_sheets"])
                ]
            }
            arr.push(new_row)
        }

    }

    return arr
}

data = createData(data);

export default function MultiSeriesRadar() {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '10px',
      }}>
    <Typography variant="h6" gutterBottom align= "center">
            Player Comparison Chart
          </Typography>
    <RadarChart
      height={300}
      series={data}
      radar={{
        metrics: ['Goals', 'xG', 'Assists', 'xA', 'Bonus', 'CS'],
      }}
    />
    </Box>
  );
}
