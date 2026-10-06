"use client";
import { createTheme } from "@mui/material/styles";
import { abarFanum } from "./assets/fonts/abar";

const theme = createTheme({
  palette: {
    background: {
      default: "#F5F8FA",
    },
  },
  typography: {
    fontFamily: abarFanum.style.fontFamily,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "999px",
          textTransform: "none",
        },
      },

      variants: [
        {
          props: {
            variant: "contained",
            color: "primary",
          },
          style: {
            background: `linear-gradient(229.52deg, #02ADF7 -18.98%, #26E05A 121.29%),
radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%),
radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)`,
          },
        },
      ],
    },
  },
  direction: "rtl",
});

export default theme;
