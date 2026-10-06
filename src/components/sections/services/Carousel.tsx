"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Typography } from "@mui/material";

import { useInSize } from "@/hooks/useInSize";

type Props = {
  sliderItems: {
    title: string;
    imageUrl: string;
  }[];
};

export default function Carousel({ sliderItems }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  const isInSize = useInSize(1200);

  return (
    <Box
      sx={{
        position: "relative",
        flex: 1.2,
        minWidth: 0,
        width: "100%",
        maxWidth: { lg: "100%", xs: 768 },
      }}
    >
      <Box sx={{ overflow: "hidden" }}>
        <Swiper
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          initialSlide={1}
          spaceBetween={24}
          tabIndex={1}
          slidesPerView={isInSize ? "auto" : 3}
          centeredSlides
          style={{ marginLeft: isInSize ? 0 : "-7rem", userSelect: "none" }}
          dir="ltr"
          className="services-carousel"
        >
          {sliderItems.map(item => (
            <SwiperSlide
              key={item.title}
              style={{
                position: "relative",
                width: 214,
                height: 304,
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(0deg, rgba(7, 7, 8, 0.64) 0%, rgba(7, 7, 8, 0) 100%)",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: 17,
                    right: 15,
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: 800,
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
