import localFont from "next/font/local";

export const abarFanum = localFont({
  src: [
    {
      path: "./AbarMidfaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./AbarMidfaNum-SemiBold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./AbarMidFaNum-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./AbarMidFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./AbarMidFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-abar",
});
