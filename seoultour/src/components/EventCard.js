import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styles from "../Styles/Card.module.css";

function EventCard() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const [data, setData] = useState();
  const response = {
    title: "건국 예디대 졸업전시회",
    category: "미술",
    district: "광진구",
    date: "2023-12-01~2023-12-03",
    place: "건국대학교 대운동장",
    introduction: "건국대학교 대운동장에서 열리는 예디대 학생들의 졸업 전시회",
    paidOrfree: "무료",
    age: "누구나",
    lat: "37.5408",
    lng: "127.0793",
  };
  const review = "100회";
  useEffect(() => {
    setData(response);
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }

  const card = (
    <React.Fragment>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ display: "inline" }} variant="h5" component="div">
            {data.title}
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </div>
        </div>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          - 카테고리: {data.category}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          - 자치구: {data.district}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          - 행사 기간: {data.place}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          - 장소: {data.paidOrfree}
        </Typography>
      </CardContent>
      <Typography sx={{ mb: 1.5, ml: 1.5 }} color="primary">
        조회수: {review}
      </Typography>

      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </React.Fragment>
  );

  return data ? (
    <div>
      <Card variant="outlined">{card}</Card>
      INFO <br />- 행사 소개: {data.introduction} <br />- 가격:{" "}
      {data.paidOrfree == "유료" ? data.fee : data.paidOrfree} <br />- 연령:{" "}
      {data.age}
      <div className={styles.mapContainer}>
        <Map center={{ lat: data.lat, lng: data.lng }} style={{}}>
          <MapMarker position={{ lat: data.lat, lng: data.lng }}></MapMarker>
        </Map>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default EventCard;
