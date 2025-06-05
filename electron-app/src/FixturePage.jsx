import * as React from "react";
import Box from "@mui/material/Box";
import FixtureTable from "./FixtureTable2.jsx";

export default function FixturePage() {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <FixtureTable />
      </Box>
    </div>
  );
}
