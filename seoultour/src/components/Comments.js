import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Comments(data) {
  const commentText = Array.isArray(data) ? data : Object.values(data);
  console.log("comments.js", commentText);

  return (
    <Card sx={{ width: "85%", position: "relative", ml: 3.5, mb: 1.5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          익명
        </Typography>
        <Typography sx={{ fontSize: 15 }} variant="body2">
          {commentText[0].comment}
        </Typography>
      </CardContent>
    </Card>
  );
}
