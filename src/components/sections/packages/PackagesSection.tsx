import ArrowCircle from "@/components/ui/ArrowCircle";
import GridBackground from "@/components/ui/GridBackground";
import Section from "@/components/ui/Section";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import { Box, Button, Stack, Typography } from "@mui/material";
import PackagesCarousel from "./PackagesCarousel";

const packages = [
  {
    image: "package-1.svg",
    title: "۱ شب اقامت",
  },
  {
    image: "package-2.svg",
    title: "صبحانه",
  },
  {
    image: "package-3.svg",
    title: "قایق‌سواری",
  },
  {
    image: "package-4.svg",
    title: "تور جنگل‌نوردی",
  },
];

export default function PackagesSection() {
  return (
    <Section id="packages">
      <Stack
        direction={{ lg: "row", xs: "column" }}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <Stack
          spacing={"20px"}
          sx={{
            alignItems: {
              lg: "start",
              xs: "center",
            },
            textAlign: { lg: "start", xs: "center" },
            position: "relative",
            width: "100%",
          }}
        >
          <GridBackground
            style={{
              width: 669,
              height: 393,
              top: "-35.5px",
              left: "791.1px",
            }}
          />
          <img src="/images/packages-content-icon.svg" alt="package" />

          <Stack spacing={1}>
            <SectionTitle>پکیج‌های ویژه اقامت در گیلمار</SectionTitle>
            <SectionDescription>
              پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات
              هیجان‌انگیز در دل طبیعت است.
            </SectionDescription>
          </Stack>

          <Stack
            spacing={"10px"}
            sx={{ mt: "3rem !important", textAlign: "right" }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 800,
                lineHeight: "32px",
              }}
            >
              پکیج رمانتیک دو نفره
            </Typography>
            <SectionDescription>
              شامل: ۱ شب اقامت + صبحانه + تور جنگل‌نوردی + قایق‌سواری
            </SectionDescription>

            <Stack
              direction="row"
              sx={{ flexWrap: "wrap", gap: 4, my: "4rem !important" }}
            >
              {packages.map(item => (
                <Stack
                  key={item.title}
                  sx={{
                    background: "#fff",
                    width: 116,
                    height: 116,
                    borderRadius: "12px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 0.7,
                    boxShadow:
                      "0px 0px 0px 6px #FFFFFF, 0px 24px 48px 0px #002E251F",
                  }}
                >
                  <img src={`/images/${item.image}`} alt={item.title} />
                  <Typography
                    variant="body2"
                    sx={{
                      mt: "5px",
                      color: "#4C4C4D",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Stack
              direction={{ sm: "row" }}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Typography variant="h6" sx={{ color: "#43A047" }}>
                قیمت: ۲۳۰۰۰۰۰ تومان
              </Typography>
              <Button variant="contained" sx={{ pl: 1 }}>
                همین حالا رزرو کن
                <ArrowCircle style={{ marginRight: "1rem" }} />
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <PackagesCarousel />
      </Stack>
    </Section>
  );
}
