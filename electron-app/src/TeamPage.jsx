import * as React from "react";
import BasicSelect from "./Select.jsx";
import StickyHeadTable from "./StickyHeadTable.jsx";
import Box from '@mui/material/Box';
import BasicMenu from "./Menu.jsx";

export default function TeamPage(){
    return (
        <div>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                <BasicMenu />
            </Box>
            <Box sx={{display: 'flex',gap:'16px'}}>
                <BasicSelect
                    label="View"
                    id = "view-select"
                    options={[
                        {value:1,label:'All Players'},
                        {value:2,label:'Goalkeepers'},
                    ]}
                />
                <BasicSelect
                    label="Sorted By"
                    id = "sort-by-select"
                    options={[
                        {value:3,label:'Total Points'},
                        {value:4,label:'Round Points'},
                    ]}
                />
            </Box>
                <h1>League Team Table</h1>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                <StickyHeadTable />

            </Box >
        </div>
    )
}