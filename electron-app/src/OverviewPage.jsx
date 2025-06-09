import * as React from "react";
import Box from "@mui/material/Box";
import BarsDataset from './components/OverviewBar.jsx';
import BasicList from "./components/FixtureOverview.jsx";
import ScatterChart2 from "./components/ScatterPlot.jsx";
import MultiSeriesRadar from "./components/PlayerCompChart.jsx";

export default function OverviewPage() {
  return (
    <div>
      <h2>What's new?</h2>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <BasicList />
        <BarsDataset /> 
      </Box>
      <Box sx={{marginTop: "10px", display: "flex", justifyContent: "flex-start"}}>
        <ScatterChart2 />
        <MultiSeriesRadar/>
      </Box>
    </div>
  );
}
