import * as React from "react";
import styles from "../Styles/Card.module.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import CardContents from "../components/EventCard";
function FavoritePage() {
  const [data, setData] = useState();

  const response = {
    _oid: "event object id1",
    title: "건국 예디대 졸업전시회",
    category: "미술",
    district: "광진구",
    date: "2023-12-01~2023-12-03",
    place: "건국대학교 대운동장",
    introduction: "건국대학교 대운동장에서 열리는 예디대 학생들의 졸업 전시회",
    paidOrfree: "무료",
    age: "누구나",
    lat: "37.5408",
    lon: "127.0793",
    review: "100회",
  };

  const review = "100회";
  useEffect(() => {
    setData(response);
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }

  return data ? (
    <div>
      <h2>관심있는 행사</h2>
      <Card variant="outlined">
        <CardContents data={data} favoriteState={true}></CardContents>
      </Card>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default FavoritePage;
