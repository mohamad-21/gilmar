"use client";

import { Box, Stack } from "@mui/material";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Avatars from "./Avatars";
import TestimonialCard from "./TestimonialCard";

const guestsTestimonials = [
  {
    image: "avatar-3.svg",
    name: " عبدی پور",
    feedback:
      "اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا بودم واقعاً از هیاهوی شهر دور بشم.",
    top: 21.3,
    left: 15.8,
  },
  {
    image: "avatar-4.svg",
    name: "احسان عبدی پور",
    feedback:
      "اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا بودم واقعاً از هیاهوی شهر دور بشم.",
    top: 44.8,
    left: 18.2,
  },
  {
    image: "avatar-1.svg",
    name: "احسان  پور",
    feedback:
      "اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا بودم واقعاً از هیاهوی شهر دور بشم.",
    top: 58,
    left: 8.2,
  },
  {
    image: "avatar-6.svg",
    name: "عبدی",
    feedback:
      "اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا بودم واقعاً از هیاهوی شهر دور بشم.",
    top: 80.5,
    left: 19.25,
  },
  {
    image: "avatar-5.svg",
    name: "احسان ",
    feedback:
      "اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا بودم واقعاً از هیاهوی شهر دور بشم.",
    top: 28.3,
    left: 81.7,
  },
  {
    image: "avatar-7.svg",
    name: "پور احسان",
    feedback:
      "اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا بودم واقعاً از هیاهوی شهر دور بشم.",
    top: 48,
    left: 85.8,
  },
  {
    image: "avatar-2.svg",
    name: "احسان عبدی ",
    feedback:
      "اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا بودم واقعاً از هیاهوی شهر دور بشم.",
    top: 73.3,
    left: 85,
  },
];

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Stack
      sx={{
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: {
          xs: 550,
          sm: 500,
          md: 550,
          lg: 600,
        },
        overflow: "hidden",
        backgroundImage: "url('/images/testimonials-background.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: {
          xs: "cover",
          sm: "80%",
          md: "75%",
          lg: "70%",
        },
      }}
    >
      <Avatars
        testimonials={guestsTestimonials}
        onAvatarSelect={idx => swiperRef.current?.slideTo(idx)}
      />

      <Box
        sx={{
          width: "100%",
          maxWidth: {
            xs: 450,
            lg: 500,
          },
          px: "2rem",
          height: "100%",
        }}
      >
        <Swiper
          spaceBetween={20}
          autoplay
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          modules={[Pagination]}
          pagination={{ type: "bullets" }}
          style={{
            width: "100%",
            height: "100%",
          }}
          className="testimonials-carousel"
        >
          {guestsTestimonials.map(test => (
            <SwiperSlide
              key={test.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TestimonialCard
                image={test.image}
                name={test.name}
                feedback={test.feedback}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Stack>
  );
}
