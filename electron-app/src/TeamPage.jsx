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
                    options={[
                        {value:10,label:'All Players'},
                        {value:10,label:'Goalkeepers'},
                    ]}
                />
                <BasicSelect
                    label="Sorted By"
                    options={[
                        {value:10,label:'All Players'},
                        {value:10,label:'Goalkeepers'},
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