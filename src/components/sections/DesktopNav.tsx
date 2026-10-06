import { AccountCircleOutlined } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

import { navbarLinks } from "@/constants";

export default function DesktopNav() {
  return (
    <>
      <Stack
        component="nav"
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: { xs: "none", lg: "flex" },
          flex: 1,
          gap: 3,
        }}
      >
        {navbarLinks.map(link => (
          <Typography
            key={link.label}
            component={Link}
            href={link.href}
            variant="body2"
            sx={{
              color: "text.primary",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            {link.label}
          </Typography>
        ))}
      </Stack>
      <Button
        variant="contained"
        sx={{
          display: { xs: "none", lg: "flex" },
          flexShrink: 0,
          height: 52,
          px: 2,
          fontWeight: 600,
        }}
      >
        <AccountCircleOutlined sx={{ fontSize: 26, ml: 1 }} />
        ورود یا ثبت نام
      </Button>
    </>
  );
}
