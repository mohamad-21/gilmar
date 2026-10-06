import { IconButton } from "@mui/material";
import React from "react";

export default function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <IconButton
      href={href}
      sx={{
        width: 40,
        height: 40,
        color: "#fff",
        background:
          "linear-gradient(229.52deg, #02ADF7 -18.98%, #26E05A 121.29%), radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%),radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%);",
      }}
    >
      {children}
    </IconButton>
  );
}
