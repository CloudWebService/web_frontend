import * as React from "react";
import styles from "../Styles/Card.module.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import CardContents from "../components/EventCard";
import axios from "axios";
function FavoritePage() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const response = [
    {
      _oid: "1",
      title: "건국 예디대 졸업전시회",
      category: "미술",
      district: "광진구",
      date: "2023-12-01~2023-12-03",
      place: "건국대학교 대운동장",
      introduction:
        "건국대학교 대운동장에서 열리는 예디대 학생들의 졸업 전시회",
      paidOrfree: "무료",
      age: "누구나",
      lat: "37.5408",
      lon: "127.0793",
      review: "100회",
    },
    {
      _oid: "2",
      title: "동국 공과대학 졸업전시회",
      category: "학술",
      district: "서초",
      date: "2023-10-01~2023-10-03",
      place: "동국대학교 강당",
      introduction: "동국대학교 강당 졸업 전시회",
      paidOrfree: "무료",
      age: "누구나",
      lat: "37.6408",
      lon: "127.0773",
      review: "100회",
    },
    {
      _oid: "3",
      title: "동국 공과대학 졸업전시회",
      category: "학술",
      district: "서초",
      date: "2023-10-01~2023-10-03",
      place: "동국대학교 강당",
      introduction: "동국대학교 강당 졸업 전시회",
      paidOrfree: "무료",
      age: "누구나",
      lat: "37.6408",
      lon: "127.0773",
      review: "100회",
    },
  ];

  const review = "100회";
  const fpPromise = import("https://openfpcdn.io/fingerprintjs/v4").then(
    (FingerprintJS) => FingerprintJS.load()
  );
  const setBookmarkList = async () => {
    await axios
      .get(
        "https://4ece099f-93aa-44bb-a61a-5b0fa04f47ac.mock.pstmn.io" +
          `/api/bookmarks/1`
      )
      // .get(BASE_URL+`/api/bookmarks/${id}`)
      .then((res) => {
        console.log("즐겨찾기 리스트 get완료 :", res.data);
        setData(res.data);
      })
      .catch((err) => {
        alert("즐겨찾기 리스트 get 실패: ", err);
      });
    // setData(response);
  };
  useEffect(() => {
    fpPromise
      .then((fp) => fp.get())
      .then((result) => {
        setId(result.visitorId);
        setBookmarkList();
      });
  }, []);
  const onFavoriteChange = () => {
    setBookmarkList(); // 상태가 변경되면 서버에서 데이터 다시 가져오기
  };
  if (!data) {
    return <div>Loading...</div>;
  }

  return data ? (
    <div>
      <h2>관심있는 행사</h2>
      {data.map((cardData) => (
        <div className={styles.eventContainer}>
          <Card variant="outlined" key={cardData._oid}>
            <CardContents
              data={cardData}
              favoriteState={true}
              onFavoriteChange={onFavoriteChange}
            ></CardContents>
          </Card>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default FavoritePage;
