import * as React from "react";
import styles from "../Styles/Card.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";

function EventCard(data, favoriteState) {
  const contents = Array.isArray(data) ? data : Object.values(data);
  const [id, setId] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const fpPromise = import("https://openfpcdn.io/fingerprintjs/v4").then(
    (FingerprintJS) => FingerprintJS.load()
  );
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    console.log(isFavorite);
    console.log("favoriteState=", Boolean(data.favoriteState));
    console.log("eventcard???", data, data.favoriteState);
    setIsFavorite(Boolean(data.favoriteState));
    fpPromise
      .then((fp) => fp.get())
      .then(
        (
          result //console.log(typeof result.visitorId)
        ) => setId(result.visitorId)
      );
  }, [favoriteState]);
  const handleFavorite = async () => {
    if (!isFavorite) {
      setIsFavorite(!isFavorite);
      await axios
        .post(
          `${BASE_URL}/api/bookmarks?userId=65701f9fc246da016fdbc189&eventId=${contents[0]._id}`
        )
        .then((res) => {
          console.log("즐겨찾기 등록 post완료 :", res);
        })
        .catch((err) => {
          alert("즐겨찾기 등록 post 실패: ", err);
        });
    } else {
      // onFavoriteChange && onFavoriteChange();
      setIsFavorite(!isFavorite);
      console.log(`${id}`, `${contents[0]._id}`);

      await axios
        .delete(
          `${BASE_URL}/api/bookmarks?userId=65701f9fc246da016fdbc189&eventId=${contents[0]._id}`
        )
        .then((res) => {
          console.log("즐겨찾기 delete 완료 :", res);
        })
        .catch((err) => {
          alert("즐겨찾기 delete 실패: ", err);
        });
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ display: "inline" }} variant="h5" component="div">
            {contents[0].title}
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon
                onClick={handleFavorite}
                color={isFavorite ? "error" : "inherit"}
              />
            </IconButton>
          </div>
        </div>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          - 카테고리: {contents[0].category}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          - 자치구: {contents[0].district}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          - 행사 기간: {contents[0].place}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          - 장소: {contents[0].paidOrfree}
        </Typography>
      </CardContent>

      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </React.Fragment>
  );
}

export default EventCard;
