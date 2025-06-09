import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
//Reference: https://mui.com/x/react-data-grid/
const columns = [
  { field: 'gameweek', 
    headerName: 'Gameweek', 
    minWidth: 50,
    description: "Week in the season when the match is scheduled"
  },
  
  { 
    field: 'time', 
    headerName: 'Time', 
    minWidth: 200,
    description: "Kickoff time for the match in UTC (Coordinated Universal Time)"
  },
  {
    field: 'home',
    headerName: 'Home Team',
    minWidth: 170,
    align: 'left',
    description: "The team hosting the match"
  },
  {
    field: 'home_score',
    headerName: 'Home Score',
    minWidth: 50,
    align: 'center',
    description: "Number of goals scored by the home team"
  },
  {
    field: 'away_score',
    headerName: 'Away Score',
    minWidth: 50,
    align: 'center',
    description: "Number of goals scored by the away team"
  },
  {
    field: 'away',
    headerName: 'Away Team',
    minWidth: 170,
    align: 'left',
    description: "The team playing away from home"
  }
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
    let teams = await createTeamDictionary()

    let table = [];

    for (let i in data) {
      let row = data[i];
      let new_row = {
        id: i,
        gameweek: row.event,
        time: row.kickoff_time,
        home: teams[row.team_h],
        home_score: row.team_h_score,
        away: teams[row.team_a],
        away_score: row.team_a_score,
      };

      table.push(new_row);
    }
    return table;
}

let rows = await window.fplAPI.getFilteredFixturesData();

rows = await createData(rows);

const paginationModel = { page: 0, pageSize: 10 };

export default function FixtureTable() {
  return (
    <Paper sx={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } ,
         sorting: {
          sortModel: [{ field: 'gameweek', sort: 'desc' }],
        }, }}
        pageSizeOptions={[10, 20]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}