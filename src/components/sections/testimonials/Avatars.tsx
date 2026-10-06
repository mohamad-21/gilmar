import { Avatar, IconButton } from "@mui/material";
import React from "react";

type Props = {
  testimonials: {
    image: string;
    name: string;
    feedback: string;
    top: number;
    left: number;
  }[];
  onAvatarSelect: (idx: number) => void;
};

export default function Avatars({ testimonials, onAvatarSelect }: Props) {
  return testimonials.map((feedback, idx) => (
    <IconButton
      key={feedback.image}
      sx={{
        position: "absolute",

        display: {
          xs: "none",

          sm: idx === 0 || idx === 2 || idx === 4 ? "block" : "none",

          md: "block",
        },

        top: {
          xs: "50%",
          sm: `${feedback.top}%`,
          md: `${feedback.top}%`,
          lg: `${feedback.top}%`,
        },

        left: {
          xs: "50%",
          sm: `${feedback.left}%`,
          md: `${feedback.left}%`,
          lg: `${feedback.left}%`,
        },

        transform: "translate(-50%, -50%)",
      }}
      onClick={() => onAvatarSelect(idx)}
    >
      <Avatar
        src={`/images/${feedback.image}`}
        sx={{
          width: {
            xs: 0,
            sm: 45,
            md: 52,
            lg: 60,
          },

          height: {
            xs: 0,
            sm: 45,
            md: 52,
            lg: 60,
          },
        }}
      />
    </IconButton>
  ));
}
