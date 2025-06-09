import * as React from "react";
import Box from "@mui/material/Box";
import BarsDataset from './components/OverviewBar.jsx';
import BasicList from "./components/FixtureOverview.jsx";
import ScatterChart2 from "./components/ScatterPlot.jsx";
import MultiSeriesRadar from "./components/PlayerCompChart.jsx";
import Grid from '@mui/material/Grid';

export default function OverviewPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 4 }}>
          <BasicList />
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <BarsDataset /> 
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <MultiSeriesRadar/>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <ScatterChart2 />
        </Grid>
      </Grid>
    </Box>
  );
}