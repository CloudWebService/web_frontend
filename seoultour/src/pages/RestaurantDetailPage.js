import * as React from "react";
import styles from "../Styles/Card.module.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import CardContents from "../components/RestaurantCard";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";
import Comments from "../components/Comments";
import axios from "axios";

function RestaurantDetailPage() {
  const [restaurantData, setRestaurantData] = useState();
  const [reviewList, setReviewList] = useState([]);
  const restaurant_res = {
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
  const review_res = [
    {
      _oid: "review_id_1",
      restaurant_id: "restaurant_id_123",
      user_id: "user_id_456",
      comment: "맛있어요. 가족들과 식사하기 좋아요",
    },
    {
      _oid: "review_id_2",
      restaurant_id: "restaurant_id_123",
      user_id: "user_id_789",
      comment: "잘먹었습니다.",
    },
  ];
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
  const setReview = async () => {
    await axios
      .get(
        BASE_URL +
          `/api/restaurant/reviews?userId=${id}&restaurantId=${data._id}`
      )
      .then((res) => {
        console.log("리뷰 get완료 :", res.data);
        setReviewList(res.data);
      })
      .catch((err) => {
        alert("리뷰 get 실패: ", err);
      });
  };

  useEffect(() => {
    setRestaurantData(restaurant_res);
    setReview();
  }, []);
  if (!restaurantData) {
    return <div>Loading...</div>;
  }

  return restaurantData && reviewList ? (
    <div>
      <Card variant="outlined">
        <CardContents data={restaurantData}></CardContents>
      </Card>
      <Typography variant="h5" component="div">
        위치
      </Typography>

      <Map
        className={styles.mapContainer}
        center={{ lat: restaurantData.위도, lng: restaurantData.경도 }}
      >
        <MapMarker
          position={{ lat: restaurantData.위도, lng: restaurantData.경도 }}
        ></MapMarker>
      </Map>
      {/* <Typography variant="h5" component="div">
        리뷰
      </Typography> */}
      <Box sx={{ position: "relative", ml: 3.5, mt: 3.0 }}>
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
        <SendIcon sx={{ position: "absolute", bottom: "10px", right: "5px" }} />
      </Box>
      <div>
        {reviewList.map((review, idx) => (
          <Comments key={idx} data={review} />
        ))}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default RestaurantDetailPage;
