import * as React from "react";
import Box from "@mui/material/Box";
import BarsDataset from './components/OverviewBar.jsx';
import BasicList from "./components/FixtureOverview.jsx";
import ScatterChart2 from "./components/ScatterPlot.jsx";

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
