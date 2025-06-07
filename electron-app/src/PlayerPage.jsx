import * as React from "react";
import BasicSelect from "./Select.jsx";
import Box from '@mui/material/Box';
import PlayerTable from './PlayerTable3.jsx';

import {EllipsisVertical} from 'lucide-react';

export default function PlayerPage(){
    return (
        <div>
            <h1>Individual player statistics:</h1>
            <h5>Sort and filter by hovering and clicking on the <EllipsisVertical size={16}/></h5>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                    <PlayerTable />
            </Box >
        </div>
    )
}