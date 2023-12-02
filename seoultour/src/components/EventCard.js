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
import { Map, MapMarker } from "react-kakao-maps-sdk";
function EventCard(data) {
  const contents = Array.isArray(data) ? data : Object.values(data);
  console.log(contents[0]);
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
              <FavoriteIcon />
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
      <Typography sx={{ mb: 1.5, ml: 1.5 }} color="primary">
        조회수: {contents[0].review}
      </Typography>

      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </React.Fragment>
  );
}

export default EventCard;
