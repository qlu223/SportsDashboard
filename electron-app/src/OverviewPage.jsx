import * as React from "react";
import Box from "@mui/material/Box";
import BarsDataset from './OverviewBar.jsx';
import BasicList from "./FixtureOverview.jsx";

export default function OverviewPage() {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <BasicList />
        <BarsDataset /> 
        
      </Box>
    </div>
  );
}
