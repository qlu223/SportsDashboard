import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { drawerClasses } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'Rank', minWidth: 50 },
  { field: 'name', headerName: 'Team', minWidth: 150 },
  {
    field: 'played',
    headerName: 'Games Played',
    minWidth: 150,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    field: 'wins',
    headerName: 'Wins',
    minWidth: 50,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    field: 'draws',
    headerName: 'Draws',
    minWidth: 50,
    align: 'left'
  },
  {
    field: 'loss',
    headerName: 'Losses',
    minWidth: 50,
    align: 'left'
  },
];

function createData(data) {
    let table = [];

    for (let i in data) {
      let row = data[i];
      let new_row = {
        id: row.position,
        name: row.name,
        played: row.played,
        wins: row.win,
        draws: row.draw,
        loss: row.loss
      };

      table.push(new_row);
    }

    return table;
}

let rows = await window.fplAPI.getLeagueData();

console.log(rows)

rows = createData(rows);

const paginationModel = { page: 0, pageSize: 20 };

export default function TeamTable() {
  return (
    <Paper sx={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel }, 
        sorting: {
          sortModel: [{ field: 'id', sort: 'asc' }],
        }, 
      }}
        pageSizeOptions={[10, 20]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}