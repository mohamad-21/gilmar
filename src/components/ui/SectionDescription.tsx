import { Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/material/styles";
import React from "react";

export default function SectionDescription({
  sx,
  children,
}: {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}) {
  return (
    <Typography
      variant="subtitle2"
      sx={{
        fontWeight: 600,
        color: "#4C4C4D",
        lineHeight: "32px",
        maxWidth: "620px",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
