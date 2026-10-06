"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

import ArrowCircle from "../../ui/ArrowCircle";
import ReservationsBadge from "./ReservationsBadge";
import Section from "@/components/ui/Section";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle, {
  sectionTitleFontSizes,
} from "@/components/ui/SectionTitle";

export default function HeroSection() {
  return (
    <Section sx={{ pt: 6 }} id="hero">
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          top: -80,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            background: "#C5D8FF",
            top: -140,
            right: -140,
            width: 640,
            height: 640,
            borderRadius: "50%",
            filter: "blur(170px)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            background: "#C5D8FF",
            top: -140,
            left: -140,
            width: 640,
            height: 640,
            borderRadius: "50%",
            filter: "blur(170px)",
          }}
        />
      </Box>

      <Stack
        spacing={3}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Stack spacing={1}>
          <SectionTitle
            sx={{
              fontSize: {
                ...sectionTitleFontSizes,
                md: 40,
              },
              maxWidth: {
                xs: "100%",
                lg: "md",
              },
            }}
          >
            اقامتگاه بوم‌گردی گیلمار جایی که طبیعت خانه است
          </SectionTitle>

          <SectionDescription
            sx={{
              maxWidth: {
                xs: 600,
                lg: 800,
              },
            }}
          >
            اقامتگاه بومگردی گیلمار بزرگ ترین مجموعه اکولوژ شمال کشور دارای
            امکانات رفاهی و تفریحی در فضایی منحصر به فرد با مجوز رسمی از اداره
            میراث فرهنگی، صنایع دستی و گردشگری گیلان فعالیت دارد.
          </SectionDescription>
        </Stack>

        <Button
          variant="contained"
          size="large"
          sx={{
            pl: 1,
          }}
        >
          مهمان گیلمار شو
          <ArrowCircle style={{ marginRight: "1rem" }} />
        </Button>

        <Box
          sx={{
            display: {
              xs: "none",
              lg: "block",
            },
            position: "relative",
            width: "100%",
            maxWidth: 1200,
            height: 580,
          }}
        >
          <Image
            src="/images/hero-image.svg"
            fill
            alt="hero"
            priority
            loading="eager"
            style={{
              filter: "drop-shadow(0 0 25px #f27777)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              bottom: 25,
              right: 0,
              width: 230,
            }}
          >
            <HeroImageSubtitle />
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: 20,
              left: 0,
            }}
          >
            <ReservationsBadge />
          </Box>
        </Box>

        {/* Mobile */}
        <Stack
          spacing={3}
          sx={{
            display: {
              xs: "flex",
              lg: "none",
            },
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 1200,
              height: {
                xs: 330,
                sm: 400,
                md: 500,
              },
            }}
          >
            <Image
              src="/images/hero-image-2.svg"
              fill
              alt="hero"
              style={{
                filter: "drop-shadow(0 0 25px #f27777)",
                objectFit: "cover",
                borderRadius: 20,
              }}
            />
          </Box>

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            sx={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            spacing={1}
          >
            <HeroImageSubtitle />
            <ReservationsBadge />
          </Stack>
        </Stack>
      </Stack>
    </Section>
  );
}

function HeroImageSubtitle() {
  return (
    <Typography
      variant="subtitle2"
      sx={{
        fontWeight: 600,
        lineHeight: 2,
        color: "#1A1A1A",
      }}
    >
      فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال
    </Typography>
  );
}
