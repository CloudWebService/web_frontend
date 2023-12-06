import * as React from "react";
import styles from "../Styles/Card.module.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import CardContents from "../components/EventCard";
function EventDetailPage() {
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
      <Card variant="outlined">
        <CardContents data={data} favoriteState={false}></CardContents>
      </Card>
      <Typography variant="h5" component="div">
        Info
      </Typography>
      <Typography variant="body2">
        <br />- 행사 소개: {data.introduction} <br />- 가격:{" "}
        {data.paidOrfree == "유료" ? data.fee : data.paidOrfree} <br />- 연령:{" "}
        {data.age}
      </Typography>

      <Map
        className={styles.mapContainer}
        center={{ lat: data.lat, lng: data.lon }}
      >
        <MapMarker position={{ lat: data.lat, lng: data.lon }}></MapMarker>
      </Map>
      {/* <div className="restaurantInfo">
        <Typography variant="h5" component="div">
          근처맛집
        </Typography>
        {restaurantData.map((data) => (
          <Box>
            <Card className={styles.restaurantContainer} sx={{ mb: 2.5 }}>
              {" "}
              <CardContent>
                <Typography variant="h6" component="div">
                  {data.name}
                </Typography>
                <Typography variant="body2">{data.info}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </div> */}
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default EventDetailPage;
