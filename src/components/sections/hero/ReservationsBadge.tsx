import { Avatar, AvatarGroup, Stack, Typography } from "@mui/material";
import React from "react";

export default function ReservationsBadge() {
  return (
    <Stack
      sx={{
        borderRadius: "100px",
        background: "#fff",
        boxShadow: "0 0 8px rgba(0,0,0,0.1)",
        width: "166px",
        alignItems: "center",
        justifyContent: "space-between",
        p: 1,
      }}
      direction="row"
      spacing={1}
    >
      <AvatarGroup spacing={12}>
        <Avatar
          sx={{
            width: "26px",
            height: "26px",
            ml: "-12px !important",
          }}
          src={"/images/avatar-1.svg"}
        />
        <Avatar
          sx={{ width: "26px", height: "26px" }}
          src={"/images/avatar-2.svg"}
        />
        <Avatar
          sx={{ width: "26px", height: "26px" }}
          src={"/images/avatar-3.svg"}
        />
      </AvatarGroup>
      <Typography variant="caption" sx={{ fontWeight: 600 }} color="#1A1A1A">
        +۱۲۰ رزرو موفق
      </Typography>
    </Stack>
  );
}
