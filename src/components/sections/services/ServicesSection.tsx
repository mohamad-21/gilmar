"use client";

import GridBackground from "@/components/ui/GridBackground";
import Section from "@/components/ui/Section";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import { useInSize } from "@/hooks/useInSize";
import { Stack } from "@mui/material";
import Carousel from "./Carousel";

const sliderItems = [
  {
    title: "دوچرخه سواری",
    imageUrl: "/images/image-slide-3.jpg",
  },
  {
    title: "قایق سواری",
    imageUrl: "/images/image-slide-2.jpg",
  },
  {
    title: "پرنده نگری",
    imageUrl: "/images/image-slide-1.jpg",
  },
  {
    title: "...",
    imageUrl: "/images/Container.png",
  },
];

export default function ServicesSection() {
  const isInSize = useInSize(1200);

  return (
    <Section
      containerSx={{
        pl: `${isInSize ? undefined : 0} !important`,
        position: "relative",
      }}
      id="services"
    >
      <GridBackground
        style={{
          width: 669,
          height: 393,
          top: "-18.5px",
          left: "791.1px",
        }}
      />
      <Stack direction={{ lg: "row" }} sx={{ gap: 4, alignItems: "center" }}>
        <Stack
          spacing={"20px"}
          sx={{
            position: "relative",
            flex: 1,
            alignItems: { lg: "start", xs: "center" },
            textAlign: { lg: "start", xs: "center" },
          }}
        >
          <img src="/images/services-content-icon.svg" width={84} height={52} />

          <Stack spacing={1}>
            <SectionTitle>خدمات رفاهی گیلمار برای اقامتی دلنشین</SectionTitle>

            <SectionDescription
              sx={{
                maxWidth: "620px",
              }}
            >
              در گیلمار، آرامش طبیعت را در کنار خدمات رفاهی کامل تجربه می‌کنید؛
              فضایی دنج و صمیمی که برای ساختن لحظاتی آرام، خوش و به‌یادماندنی
              آماده شده است.
            </SectionDescription>
          </Stack>
        </Stack>
        <Carousel sliderItems={sliderItems} />
      </Stack>
    </Section>
  );
}
