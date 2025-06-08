import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';

const columns = [
  { field: 'name', 
    headerName: 'Name', 
    minWidth: 170 },
  { field: 'team', 
    headerName: 'Team',
    minWidth: 100 },
  { field: 'position', 
    headerName: 'Position',
    renderCell: (params) => {
    const fullNames = {
      GK: 'Goalkeeper',
      DEF: 'Defender',
      MID: 'Midfielder',
      FWD: 'Forward',
    };

    return (
      <Tooltip title={fullNames[params.value] || 'Unknown'}>
        <span>{params.value}</span>
      </Tooltip>
    );
  },
     minWidth: 100 },
  {
    field: 'goals',
    headerName: 'Goals',
    minWidth: 170,
    description: "Total goals scored by the player",
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    field: 'assists',
    headerName: 'Assists',
    description: 'Number of passes leading to a goal',
    minWidth: 170,
    align: 'left',
  },
  {
    field: 'points',
    headerName: 'Total points',
    description: 'Total number of points accumulated in FPL during the season',
    minWidth: 170,
    align: 'left',
  },
  {
    field: 'cost',
    headerName: 'Cost (Millions)',
    description: 'Cost of player in FPL',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toFixed(1),
  },
];

async function createTeamDictionary() {
    let teams = await window.fplAPI.getLeagueData();

    let dictionary = {};

    for (let i in teams) {
        let row = teams[i];

        dictionary[row.id] = row.name;
    }

    return dictionary
}

async function createData(data) {

    let teams = await createTeamDictionary();

    let positions = {
      1: "GK",
      2:"DEF",
      3:"MID",
      4:"FWD"
    }

    let table = [];

    console.log(data)

    for (let i in data) {
      let row = data[i];
      let new_row = {
        id: i,
        name: row.web_name,
        position: positions[row.element_type],
        team: teams[row.team],
        goals: row.goals_scored,
        assists: row.assists,
        points: row.total_points,
        cost: row.now_cost / 10
      };

      table.push(new_row);
    }

    return table;
}

let rows = await window.fplAPI.getPlayerData();
console.log(rows);
rows = await createData(rows);

const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 20, 50]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}