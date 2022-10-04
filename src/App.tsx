import { useState } from "react";
import * as React from "react";
import { AppToolbar, Toolbar } from "./components/AppToolbar";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { PeopleGrid } from "./components/PeopleGrid";

export function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "#root": {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          },
        }}
      />

      <AppToolbar />
      <Toolbar />

      <PeopleGrid sx={{ flexGrow: 1 }} />
    </React.Fragment>
  );
}
