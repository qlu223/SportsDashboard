import * as React from "react";
import Box from '@mui/material/Box';
import TeamTable from './components/TeamTable2.jsx'
import {EllipsisVertical} from 'lucide-react';

export default function TeamPage(){
    return (
        <div>
            <h1>Team statistics:</h1>
            <p> 
                Use this page to take a more in-depth look at the league table as it stands during the current Premier League 
                season. You can sort, filter, and manage columns by hovering over the column header and interacting with 
                the <EllipsisVertical size={16}/>
            </p>
            <h5>NOTE: Due to the season ending, the league table is currently zeroed out</h5>
            <Box sx={{display:'flex',justifyContent:'flex-end', width: 1000}}>
                <TeamTable />
            </Box >
        </div>
    )
}