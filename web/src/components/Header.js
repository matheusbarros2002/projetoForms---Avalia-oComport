/* eslint-disable no-unused-vars */
import React from "react";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

import logo from "../assets/images/logo4.png";

export default function Header() {
  const theme = createTheme();

  const useStyles = makeStyles(() => ({
    logo: {
      padding: "0.1rem",
      marginTop: "0.6rem",
      height: "4rem",
    },
  }));
  const classes = useStyles();
  const drawerWidth = 1;
  return (
    // <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          marginBottom: "2rem"
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <img src={logo} className={classes.logo} alt="logo" height="50" />
          </Typography>
        </Toolbar>
      </AppBar>
    // </Box>
  );
}
