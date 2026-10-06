"use client";

import { Add, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

type Props = {
  title: string;
  desc: string;
};

export default function FaqItem({ title, desc }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion
      expanded={expanded}
      sx={{
        width: "100%",
        borderRadius: "50px !important",
        p: { sm: "12px 6px", xs: "6px" },
      }}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        expandIcon={
          <Box
            sx={{
              width: 30,
              height: 30,
              mr: 2,
              background:
                "linear-gradient(229.52deg, #02ADF7 -18.98%, #26E05A 121.29%)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            {expanded ? <Remove fontSize="small" /> : <Add fontSize="small" />}
          </Box>
        }
      >
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 800,
            fontSize: { sm: 14, xs: 12 },
            lineHeight: "24px",
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant="body2"
          sx={{ lineHeight: "32px", fontWeight: 600, color: "#4C4C4D" }}
        >
          {desc}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
