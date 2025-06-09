import React, { PureComponent } from 'react';
import {Box, Typography} from '@mui/material';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis, LabelList, Legend } from 'recharts';

let data = await window.fplAPI.getPlayerData();

let positions = {
      1: "GK",
      2:"DEF",
      3:"MID",
      4:"FWD"
    };

function createData(data, x, y, pos_filter){
    let arr = [];

    for (let i in data){
        let row = data[i];
        if (row.element_type == pos_filter){
            let new_row = {z: row.web_name, x: parseFloat(row[x]), y: row[y]}

            arr.push(new_row)
        }
    }

    return arr
}

let new_data = [];

for(let i in [0,1,2,3,4,5]){
    let pos_data = createData(data, "form", "total_points", i);

    new_data.push(pos_data)
}

console.log(new_data)

export default function ScatterChart2() {
    return (
            <Box
                sx={{
                    width: {
                        xs: '100%',  // full width on mobile
                        sm: '75%',   // 75% width on tablets
                        md: '75%'    // 50% width on desktop
                        },
                    backgroundColor: 'white',
                    padding: '10px',
                    borderRadius: '10px',
                }}>
            <Typography variant="h6" gutterBottom align= "center">
                Form vs Total Points
            </Typography>
            <ResponsiveContainer width="90%" height={600}>
            <ScatterChart
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            }}
            >
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="Form"  domain={[2, 'dataMax']}/>
            <YAxis type="number" dataKey="y" name="Total points" domain={[50, 'dataMax']} />
            <ZAxis type="number" dataKey="z" name="name"  />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="GK" data={new_data[1]} fill = "black"/>
            <Scatter name="DEF" data={new_data[2]} fill = "red"/>
            <Scatter name="MID" data={new_data[3]} fill = "green"/>
            <Scatter name="FWD" data={new_data[4]} fill = "blue"/>
            </ScatterChart>
            </ResponsiveContainer>
            </Box>
    );
  }
