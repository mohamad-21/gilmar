import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

type Props = {
  title: string;
  desc: string;
  iconUrl: string;
  rotateTo?: "left" | "right";
  children?: React.ReactNode;
};

export default function RuleItem({
  title,
  desc,
  iconUrl,
  rotateTo,
  children,
}: Props) {
  return (
    <Card
      sx={{
        background: "transparent",
        boder: "none",
        boxShadow: "none",
        position: "relative",
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          sx={{
            background: "#fff",
            mx: "auto",
            width: "128px",
            height: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "24px",
            transform: `${rotateTo ? (rotateTo === "left" ? "rotate(-15deg)" : "rotate(15deg)") : ""}`,
            boxShadow: "0px 40px 32px -24px #0F0F0F1F",
            mb: 4,
          }}
        >
          <img src={iconUrl} width={96} alt={title} />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: "800", fontSize: "16px" }}>
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "#4C4C4D", maxWidth: "260px", lineHeight: "32px" }}
        >
          {desc}
        </Typography>
      </CardContent>
      {children}
    </Card>
  );
}
