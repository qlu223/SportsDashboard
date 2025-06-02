import * as React from "react";
import BasicSelect from "./Select.jsx";
import Box from '@mui/material/Box';
import PlayerTable from "./PlayerTable.jsx";

export default function PlayerPage(){
    return (
        <div>
            <Box sx={{display: 'flex',gap:'16px'}}>
                {/* <BasicSelect
                    label="Sorted By"
                    id = "sort-by-select"
                    options={[
                        {value:'Total Points',label:'Total Points'},
                        {value:'Round Points',label:'Round Points'},
                    ]}
                /> */}
            </Box>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                    <PlayerTable />
            </Box >
        </div>
    )
}