import * as React from "react";
import styles from "../Styles/Card.module.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import CardContents from "../components/RestaurantCard";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
function RestaurantDetailPage() {
  const [restaurantData, setRestaurantData] = useState();

  const res = {
    _id: "mongodb 고유 object_id",
    name: "내가 찜한 닭",
    lat: 37.5518,
    lon: 127.0736,
    info: "건대 맛의거리 내가 찜한 닭 입니다.",
    views: ["음식이 맛있어요", "가족식사하기 좋네요."],
    addr: "서울 광진구 아차산로33길 63",
    phone_num: "02-450-3234",
    menu: "매콤 찜닭, 로제 찜닭",
    time: "09:30~22:00",
    review: "100회",
  };
  // {
  // _id: "mongodb 고유 object_id",
  // name: "왕가탕후루",
  // lat: "37.4964",
  // lon: "126.9572",
  // info: "건대 탕후루 맛집입니다.",
  // views: ["음식이 맛있어요", "가족식사하기 좋네요."],
  // addr: "서울특별시 광진구 아차산로29길 7 1층",
  // phone_num: "02-450-1934",
  // menu: "탕후루",
  // time: "09:30~23:00",
  // review: "120회",
  // },

  useEffect(() => {
    setRestaurantData(res);
  }, []);
  if (!restaurantData) {
    return <div>Loading...</div>;
  }

  return restaurantData ? (
    <div>
      <Card variant="outlined">
        <CardContents data={restaurantData}></CardContents>
      </Card>
      <Typography variant="h5" component="div">
        위치
      </Typography>

      <Map
        className={styles.mapContainer}
        center={{ lat: restaurantData.lat, lng: restaurantData.lon }}
      >
        <MapMarker
          position={{ lat: restaurantData.lat, lng: restaurantData.lon }}
        ></MapMarker>
      </Map>
      {/* <Typography variant="h5" component="div">
        리뷰
      </Typography> */}
      <Box sx={{ ml: 3.5, mt: 3.0 }}>
        <TextField
          className={styles.restaurantContainer}
          id="input-with-icon-textfield"
          label="review"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Box>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default RestaurantDetailPage;
