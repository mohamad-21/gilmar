"use client";

import { AccountCircleOutlined, MenuRounded } from "@mui/icons-material";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

import { navbarLinks } from "@/constants";

export default function MobileNav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isOpen = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{
          display: { xs: "none", sm: "flex", lg: "none" },
          flexShrink: 0,
          height: 52,
          px: 2,
          fontWeight: 600,
        }}
      >
        <AccountCircleOutlined sx={{ fontSize: 26, ml: 1 }} />
        ورود یا ثبت نام
      </Button>
      <IconButton
        onClick={handleOpen}
        sx={{
          display: { xs: "flex", lg: "none" },
          color: "text.primary",
        }}
      >
        <MenuRounded />
      </IconButton>

      <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
        {navbarLinks.map(link => (
          <MenuItem
            key={link.label}
            component={Link}
            href={link.href}
            onClick={handleClose}
            sx={{
              width: 250,
              py: 1.25,
            }}
          >
            {link.label}
          </MenuItem>
        ))}

        <MenuItem
          component={Link}
          href="#"
          onClick={handleClose}
          sx={{
            display: { xs: "flex", sm: "none" },
            width: 250,
            py: 1.25,
          }}
        >
          <AccountCircleOutlined
            sx={{
              fontSize: 26,
              ml: 1,
            }}
          />
          ورود یا ثبت نام
        </MenuItem>
      </Menu>
    </>
  );
}
