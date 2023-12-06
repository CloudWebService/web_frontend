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
import { useNavigate } from "react-router-dom";
export default function BottomBar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const moveBookmark = () => {
    navigate("/bookmark");
  };
  const moveEventListPage = () => {
    navigate("/");
  };
  const moveRestaurantListPage = () => {
    navigate("/");
  };
  const moveCongestionPage = () => {
    navigate("/");
  };
  return (
    <Box position="fixed" bottom="0px" left="0" width="100%">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="행사"
          onClick={moveEventListPage}
          icon={<StadiumIcon />}
        />
        <BottomNavigationAction
          label="음식점"
          onClick={moveRestaurantListPage}
          icon={<RestaurantIcon />}
        />
        <BottomNavigationAction
          label="혼잡도"
          onClick={moveCongestionPage}
          icon={<GroupsIcon />}
        />
        <BottomNavigationAction
          label="즐겨찾기"
          onClick={moveBookmark}
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
