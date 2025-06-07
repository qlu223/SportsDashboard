import * as React from "react";
import Box from '@mui/material/Box';
import TeamTable from './TeamTable2.jsx'
import {EllipsisVertical} from 'lucide-react';

export default function TeamPage(){
    return (
        <div>
            <h1>Team statistics:</h1>
            <h5>Sort and filter by hovering and clicking on the <EllipsisVertical size={16}/></h5>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                <TeamTable />
            </Box >
        </div>
    )
}