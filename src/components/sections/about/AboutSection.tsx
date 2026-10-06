import ArrowCircle from "@/components/ui/ArrowCircle";
import Section from "@/components/ui/Section";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";

export default function AboutSection() {
  return (
    <Section id="about">
      <Stack
        direction={{ md: "row", xs: "column-reverse" }}
        sx={{ alignItems: "center", gap: 4 }}
      >
        <Stack spacing="20px" sx={{ flex: 1, alignItems: "start" }}>
          <img src="/images/about-content-icon.svg" />
          <Stack spacing={1}>
            <SectionTitle>گیلمار؛ آرامش ناب در آغوش طبیعت گیلان</SectionTitle>

            <SectionDescription
              sx={{
                maxWidth: "620px",
              }}
            >
              گیلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها، میزبان
              لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر تالابی، حضور
              پرندگان بومی و مهاجر، نزدیکی به جاذبه‌های گردشگری گیلان، مسیر
              دسترسی مناسب و انواع تفریحات و گشت‌های گیلان‌گردی، این اقامتگاه را
              به مقصدی متفاوت برای سفر تبدیل کرده است.
            </SectionDescription>
          </Stack>

          <Button variant="contained" sx={{ pl: 1 }}>
            مهمان گیلمار شو
            <ArrowCircle style={{ marginRight: "1rem" }} />
          </Button>
        </Stack>

        <Box
          sx={{
            display: "flex",
            flex: { md: 1.3 },
          }}
        >
          <Image
            src="/images/about-section-image.png"
            alt="about"
            width={580}
            height={620}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Stack>
    </Section>
  );
}
