"use client";

import { Container, AppBar, Toolbar, Box, Stack } from "@mui/material";
import Image from "next/image";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "transparent",
        color: "text.primary",
        px: { xs: 3, sm: 5 },
        pt: 4,
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Box
          sx={{
            background: "#fff",
            p: 1,
            borderRadius: 999,
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 43, sm: 53 },
              px: 1,
              border: "1px solid",
              borderColor: "#EEF3F6",
              borderRadius: 999,
              gap: 2,
            }}
          >
            <Box
              sx={{
                position: "relative",
                flexShrink: 0,
                width: { xs: 125, sm: 170 },
                height: { xs: 37, sm: 53 },
              }}
            >
              <Image
                src="/logo.png"
                fill
                alt="گیلمار"
                sizes="170px"
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>

            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "left",
                flex: 1,
                gap: 2,
              }}
            >
              <DesktopNav />
              <MobileNav />
            </Stack>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}
