import GridBackground from "@/components/ui/GridBackground";
import Section from "@/components/ui/Section";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import { Box, Stack } from "@mui/material";
import CabinCard from "./CabinCard";

const cabinsImage = [
  "cabin-image-1.jpg",
  "cabin-image-2.jpg",
  "cabin-image-3.jpg",
  "cabin-image-4.jpg",
];

export default function CabinsSection() {
  return (
    <Section containerSx={{ position: "relative" }} id="cabins">
      <GridBackground
        style={{
          width: 669,
          height: 393,
          top: "-31px",
          left: "-14.6px",
        }}
      />
      <Stack spacing={6}>
        <Stack
          spacing={"20px"}
          sx={{
            alignItems: "center",

            textAlign: "center",
            width: "100%",
          }}
        >
          <img src="/images/cabins-content-icon.svg" alt="cabins" />

          <Stack spacing={1}>
            <SectionTitle>انواع اتاق‌های اقامتگاه گیلمار</SectionTitle>
            <SectionDescription>
              اتاق‌های گیلمار با فضایی دنج و امکانات مناسب، برای اقامتی آرام در
              دل طبیعت آماده شده‌اند.
            </SectionDescription>
          </Stack>
        </Stack>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(302px, 1fr))",
            gap: "20px",
            maxWidth: "100%",
            mx: "auto !important",
          }}
        >
          {cabinsImage.map(image => (
            <CabinCard
              key={image}
              title="خانه چوبی گیلمار"
              price="۱۳۰۰۰۰"
              imageUrl={`/images/${image}`}
            />
          ))}
        </Box>
      </Stack>
    </Section>
  );
}
