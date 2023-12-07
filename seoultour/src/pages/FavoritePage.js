import * as React from "react";
import styles from "../Styles/Card.module.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import CardContents from "../components/EventCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FavoritePage() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const handleEventItem = (event) => {
    console.log(event);
    navigate("/favorite-event-detail", {
      state: { eventData: event },
    });
  };
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
      .get(BASE_URL + `/api/bookmarks?userId=${id}`)
      .then((res) => {
        console.log("즐겨찾기 리스트 get완료 :", res);
        setData(res.data);
      })
      .catch((err) => {
        // console.log(BASE_URL + `/api/bookmarks?useId=${id}`);
        alert("즐겨찾기 리스트 불러오기 실패: ", err);
        console.log(BASE_URL + `/api/bookmarks?userId=${id}`);
      });
    // setData(response);
  };
  useEffect(() => {
    fpPromise
      .then((fp) => fp.get())
      .then((result) => {
        setId(result.visitorId);
        console.log("id?", id, result.visitorId);
      });
    axios
      .get(BASE_URL + `/api/bookmarks?userId=65701f9fc246da016fdbc189`)
      .then((res) => {
        console.log(
          "getetete",
          BASE_URL + `/api/bookmarks?userId=65701f9fc246da016fdbc189`
        );
        console.log("즐겨찾기 리스트 get완료 :", res);
        setData(res.data);
      })
      .catch((err) => {
        // console.log(BASE_URL + `/api/bookmarks?useId=${id}`);
        alert("즐겨찾기 리스트 불러오기 실패: ", err);
        console.log(BASE_URL + `/api/bookmarks?userId=${id}`);
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
          <Card
            variant="outlined"
            onClick={() => handleEventItem(cardData)}
            key={cardData._id}
          >
            <CardContents
              data={cardData}
              favoriteState={true}

              // onFavoriteChange={onFavoriteChange}
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
