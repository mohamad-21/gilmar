"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Typography } from "@mui/material";

import { Pagination } from "swiper/modules";

import { useInSize } from "@/hooks/useInSize";

export default function PackagesCarousel() {
  const isInSize = useInSize(460);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: { md: 602, sm: 502, xs: "100%" },
          height: { md: 800, sm: 715, xs: isInSize ? 380 : 500 },
        }}
      >
        <Box sx={{ overflow: "hidden", width: "100%", height: "100%" }}>
          <Typography
            variant="subtitle2"
            sx={{
              display: { sm: "block", xs: "hidden" },
              position: "absolute",
              width: { sm: 137, xs: "auto" },
              top: { md: 95, sm: 90 },
              left: { md: "-2%", sm: "-7%" },
              fontWeight: 600,
              lineHeight: "32px",
            }}
          >
            تجربه‌ی اقامتی اصیل در دل طبیعت شمال
          </Typography>
          <Swiper
            modules={[Pagination]}
            pagination={{
              type: "bullets",
            }}
            spaceBetween={10}
            slidesPerView={1}
            style={{
              userSelect: "none",
              width: "100%",
              height: "100%",
              borderRadius: "24px",
            }}
            className="package-carousel"
            loop
            dir="ltr"
          >
            {Array.from({ length: 4 }).map((_, idx) => (
              <SwiperSlide
                key={idx}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "24px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={`/images/package-slide-${idx + 1}.svg`}
                  alt={`cabin ${idx + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    minWidth: "100%",
                    minHeight: "100%",
                    objectFit: "cover",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          display: { xs: "block", sm: "none" },
          fontWeight: 600,
          mt: "-3rem",
          lineHeight: "32px",
        }}
      >
        تجربه‌ی اقامتی اصیل در دل طبیعت شمال
      </Typography>
    </>
  );
}
