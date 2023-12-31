import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
export default function HeaderBar() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <Box
      position="fixed"
      top="0px"
      left="0"
      width="100%"
      zIndex={99}
      sx={{ flexGrow: 1 }}
    >
      <AppBar position="static">
        <Toolbar>
          <ArrowBackIcon onClick={handleBackClick} />
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
