import * as React from "react";
import Box from '@mui/material/Box';
import TeamTable from './components/TeamTable2.jsx'
import {EllipsisVertical} from 'lucide-react';

export default function TeamPage(){
    return (
        <div>
            <h1>Team statistics:</h1>
            <h5>Sort and filter by  hovering and clicking on the vertical Ellipsis<EllipsisVertical size={16}/></h5>
            <h5>Change column width by dragging the header separator |</h5>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                <TeamTable />
            </Box >
        </div>
    )
}