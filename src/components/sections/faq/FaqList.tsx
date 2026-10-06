"use client";

import { Stack } from "@mui/material";
import FaqItem from "./FaqItem";

type Props = {
  items: {
    title: string;
    desc: string;
  }[];
};

export default function FaqList({ items }: Props) {
  return (
    <Stack sx={{ width: "100%", maxWidth: 620, gap: 2, pt: 2 }}>
      {items.map(({ title, desc }, idx) => (
        <FaqItem title={title} desc={desc} key={idx} />
      ))}
    </Stack>
  );
}
