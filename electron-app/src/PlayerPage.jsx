import * as React from "react";
import Box from '@mui/material/Box';
import PlayerTable from './components/PlayerTable3.jsx';

import {EllipsisVertical} from 'lucide-react';

export default function PlayerPage(){
    return (
        <div>
            <h1>Individual Player Statistics</h1>
            <p> 
                Use this page to take a more in-depth look at the statistics of players over the current Premier League 
                season. You can sort, filter, and manage columns by hovering over the column header and interacting with 
                the <EllipsisVertical size={16}/>
            </p>
            <Box sx={{display:'flex',justifyContent:'flex-end', width:1100}}>
                    <PlayerTable />
            </Box >
        </div>
    )
}