"use client";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface Props {
  image: string;
  title: string;
  desc: string;
}

export default function BlogCard({ image, title, desc }: Props) {
  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        height: { sm: 482, xs: 420 },
        borderRadius: "20px",
        overflow: "hidden",
      }}
      elevation={0}
    >
      <CardActionArea sx={{ width: "100%", height: "100%" }}>
        <CardMedia
          component="img"
          image={`/images/${image}`}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(87%)",
          }}
        />

        <CardContent
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            p: 3,
            background:
              "linear-gradient(0deg, rgba(7, 7, 8, 0.88) 0%, rgba(7, 7, 8, 0) 100%)",
            boxShadow:
              "0px 10px 30px 0px #00000052 inset, 0px 24px 48px 0px #002E251F",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              width: "100%",
              fontWeight: 800,
              color: "#fff",
              mb: "4px",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{
              width: "100%",
              lineHeight: "32px",
              color: "#FFFFFFB8",
            }}
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
