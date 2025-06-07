import * as React from "react";
import Box from "@mui/material/Box";
import BarsDataset from './OverviewBar.jsx';
import BasicList from "./FixtureOverview.jsx";
import ScatterChart2 from "./ScatterPlot.jsx";

export default function OverviewPage() {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <BasicList />
        <BarsDataset /> 
      </Box>
      <Box sx={{marginTop: "10px"}}>
        <ScatterChart2 />
      </Box>
    </div>
  );
}
