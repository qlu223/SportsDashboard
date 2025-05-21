import * as React from "react";
import Box from '@mui/material/Box';
import TeamTable from './TeamTable.jsx'

export default function TeamPage(){
    return (
        <div>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                <TeamTable />
            </Box >
        </div>
    )
}