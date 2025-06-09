import * as React from "react";
import Box from "@mui/material/Box";
import FixtureTable from "./components/FixtureTable2.jsx";
import {EllipsisVertical} from 'lucide-react';

export default function FixturePage() {
  return (
    <div>
      <h1>Premier League Matches</h1>
      <p> 
          Use this page to take a more in-depth look at the past results and future fixtures in the
          Premier League. You can sort, filter, and manage columns by hovering over the column header and interacting 
          with the <EllipsisVertical size={16}/>
      </p>
      <Box sx={{ display: "flex", justifyContent: "flex-end", width:1000 }}>
        <FixtureTable />
      </Box>
    </div>
  );
}
