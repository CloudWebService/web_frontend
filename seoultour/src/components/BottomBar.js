import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StadiumIcon from "@mui/icons-material/Stadium";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import GroupsIcon from "@mui/icons-material/Groups";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box position="fixed" bottom="0px" left="0" width="100%">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="행사" icon={<StadiumIcon />} />
        <BottomNavigationAction label="음식점" icon={<RestaurantIcon />} />
        <BottomNavigationAction label="혼잡도" icon={<GroupsIcon />} />
        <BottomNavigationAction label="즐겨찾기" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Box>
  );
}
