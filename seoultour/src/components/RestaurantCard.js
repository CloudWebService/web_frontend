import * as React from "react";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

function RestaurantCard(data) {
  const content = Array.isArray(data) ? data : Object.values(data);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ display: "inline" }} variant="h5" component="div">
            {content[0].name}
          </Typography>
        </div>
        {content[0].menu ? (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            - 대표메뉴: {content[0].menu}
          </Typography>
        ) : (
          <div></div>
        )}
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          - 주소: {content[0].addr}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          - 운영 시간: {content[0].time}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          - 전화 번호: {content[0].phone_num}
        </Typography>
      </CardContent>

      {/* <Typography sx={{ mb: 1.5, ml: 1.5 }} color="primary">
        조회수: {content.review}
      </Typography> */}
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </React.Fragment>
  );
}

export default RestaurantCard;
