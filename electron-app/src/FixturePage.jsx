import * as React from "react";
import Box from "@mui/material/Box";
import FixtureTable from "./components/FixtureTable2.jsx";
import {EllipsisVertical} from 'lucide-react';

export default function FixturePage() {
  return (
    <div>
      <h1>This season's matchups:</h1>
      <h5>Sort and filter by  hovering and clicking on the <EllipsisVertical size={16}/></h5>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <FixtureTable />
      </Box>
    </div>
  );
}
