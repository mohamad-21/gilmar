import { Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/material/styles";
import React from "react";

export const sectionTitleFontSizes = { md: 32, sm: 25, xs: 23 };

export default function SectionTitle({
  sx,
  children,
}: {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}) {
  return (
    <Typography
      component="h1"
      sx={{
        fontWeight: 800,
        fontSize: sectionTitleFontSizes,
        lineHeight: 1.8,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
