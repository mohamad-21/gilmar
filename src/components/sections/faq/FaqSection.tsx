import GridBackground from "@/components/ui/GridBackground";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import FaqList from "./FaqList";

const faqItems = [
  {
    title: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
    desc: "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر، قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.",
  },
  {
    title: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
    desc: "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر، قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.",
  },
  {
    title: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
    desc: "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر، قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.",
  },
  {
    title: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
    desc: "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر، قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.",
  },
];

export default function FaqSection() {
  return (
    <Box sx={{ px: "2rem", pt: 15 }} id="faq">
      <Container
        maxWidth="xl"
        sx={{ px: "0 !important", position: "relative" }}
      >
        <GridBackground
          style={{ width: 669, height: 393, top: "-94.5px", left: "791.1px" }}
        />
        <Stack
          sx={{
            gap: 5,
            alignItems: { xs: "center", lg: "start" },
          }}
          direction={{ lg: "row" }}
        >
          <Stack
            spacing={"20px"}
            sx={{
              width: "100%",
              alignItems: { lg: "start", xs: "center" },

              textAlign: { lg: "start", xs: "center" },
            }}
          >
            <img src="/images/faq-content-icon.svg" alt="faqs" />

            <Stack spacing={1}>
              <SectionTitle>سوالات متداول مهمانان گیلمار</SectionTitle>
              <SectionDescription>
                پاسخ رایج‌ترین سوالات درباره رزرو، اقامت و امکانات گیلمار را
                اینجا پیدا کنید تا با خیال راحت سفر خود را برنامه‌ریزی کنید.
              </SectionDescription>
            </Stack>

            <Box
              sx={{
                width: {
                  sm: 420,
                  xs: "100%",
                  height: 382,
                  position: "relative",
                  alignSelf: "center",
                },
              }}
            >
              <Image src="/images/faq-content-icon-2.svg" fill alt="faq" />
            </Box>
          </Stack>

          <FaqList items={faqItems} />
        </Stack>
      </Container>
    </Box>
  );
}
