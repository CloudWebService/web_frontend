import * as React from "react";
import styles from "../Styles/Card.module.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import CardContents from "../components/EventCard";
import SmallCard from "../components/SmallCard";
import { useLocation } from "react-router-dom";

import axios from "axios";

function EventDetailPage() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const location = useLocation();

  const data = location.state
    ? location.state.eventData
    : console.log("eventData null");
  // const [data, setData] = useState({});
  const [restaurant_res, setRestaruantData] = useState([]);
  // const data = {
  //   _oid: "event object id1",
  //   title: "건국 예디대 졸업전시회",
  //   category: "미술",
  //   district: "광진구",
  //   date: "2023-12-01~2023-12-03",
  //   place: "건국대학교 대운동장",
  //   introduction: "건국대학교 대운동장에서 열리는 예디대 학생들의 졸업 전시회",
  //   paidOrfree: "무료",
  //   age: "누구나",
  //   lat: "37.5408",
  //   lon: "127.0793",
  //   review: "100회",
  // };
  const res_res = [
    {
      _id: "1",
      name: "내가 찜한 닭",
      lat: 37.5518,
      lon: 127.0736,
      info: "건대 맛의거리 내가 찜한 닭 입니다.",
      reviews: ["음식이 맛있어요", "가족식사하기 좋네요."],
      addr: "서울 광진구 아차산로33길 63",
      phone_num: "02-450-3234",
      menu: "매콤 찜닭, 로제 찜닭",
      time: "09:30~22:00",
      review: "100회",
    },
    {
      _id: "2",
      name: "왕소구이",
      lat: 37.5528,
      lon: 127.0739,
      info: "건대 후문 왕소구이 입니다.",
      views: ["음식이 맛있어요", "가족식사하기 좋네요."],
      addr: "서울 광진구 아차산로33길 63",
      phone_num: "02-450-3234",
      // menu: "제육, 김찌, 된찌",
      time: "09:30~22:00",
      review: "50회",
    },
  ];

  const review = "100회";
  useEffect(() => {
    console.log("eventdetail", data);
    // setReview();
  }, []);

  if (!data || !data.lat || !data.lng) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card variant="outlined">
        <CardContents data={data} favoriteState={false}></CardContents>
      </Card>
      <Typography variant="h5" component="div">
        Info
      </Typography>
      <Typography varia nt="body2">
        <br />- 행사 소개: {data.introduction} <br />- 가격:{" "}
        {data.paidOrfree == "유료" ? data.fee : data.paidOrfree} <br />- 연령:{" "}
        {data.age}
      </Typography>

      <Map
        className={styles.mapContainer}
        center={{ lat: data.lat, lng: data.lng }}
      >
        <MapMarker position={{ lat: data.lat, lng: data.lng }}></MapMarker>
      </Map>
    </div>
  );
}

export default EventDetailPage;
