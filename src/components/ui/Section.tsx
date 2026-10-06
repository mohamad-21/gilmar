import { Box, Container } from "@mui/material";
import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material/styles";
import { sectionPaddingX } from "@/constants";

type SectionProps = {
  children: ReactNode;
  sx?: SxProps<Theme>;
  containerSx?: SxProps<Theme>;
  id?: string;
};

export default function Section({
  children,
  sx,
  containerSx,
  id,
}: SectionProps) {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        ...sx,
        overflow: "hidden",
      }}
      id={id}
    >
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          px: sectionPaddingX,
          ...containerSx,
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
