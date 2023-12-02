import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <ArrowBackIcon />
          <Typography
            variant="h6"
            component="div"
            sx={{ ml: 1.0, flexGrow: 1 }}
          >
            Seoul Tour
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
