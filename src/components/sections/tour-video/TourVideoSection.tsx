import ArrowCircle from "@/components/ui/ArrowCircle";
import GridBackground from "@/components/ui/GridBackground";
import PlayIcon from "@/components/ui/PlayIcon";
import Section from "@/components/ui/Section";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import { sectionPaddingX } from "@/constants";
import { Box, Button, IconButton, Stack } from "@mui/material";

export default function TourVideoSection() {
  return (
    <Section
      sx={{
        position: "relative",
        height: { lg: "690px", xs: "auto" },
        px: sectionPaddingX,
        pb: { xs: "6rem !important", sm: 0 },
      }}
      containerSx={{
        px: 0,
        height: "100%",
        position: "relative",
      }}
      id="tour-video"
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: { xs: "none", lg: "block" },
        }}
      >
        <img
          src="/images/tour-video-forest.jpg"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            objectPosition: "50% 50%",
          }}
          alt="forst"
        />
      </Box>
      <Stack
        direction={{ lg: "row", xs: "column-reverse" }}
        sx={{
          height: "100%",
          gap: 6,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { lg: "93.9px", sm: "60%", xs: "55%" },
            left: { lg: "711.1px" },
            zIndex: 1,
          }}
        >
          <GridBackground
            style={{
              width: 669,
              height: 393,
              top: "93.9px",
              left: "711.1px",
            }}
          />
        </Box>
        <Stack
          sx={{
            alignItems: "start",
            justifyContent: "center",
            backgroundImage: { lg: "url('/images/europe-map.png')" },
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundSize: "cover",
            flex: 2.3,
            position: "relative",
            zIndex: 2,
          }}
        >
          <Stack
            spacing={"20px"}
            sx={{
              alignItems: "start",
            }}
          >
            <img src="/images/tour-video-content-icon.svg" alt="tour" />

            <Stack
              spacing={"20px"}
              sx={{
                width: "100%",
              }}
            >
              <Stack spacing={1}>
                <SectionTitle>تور ویدیویی اقامتگاه گیلمار</SectionTitle>
                <SectionDescription
                  sx={{
                    maxWidth: {
                      lg: "420px",
                      xs: "500px",
                    },
                  }}
                >
                  در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای گرم
                  اقامتگاه گیلمار را از نزدیک تماشا کنید و پیش از سفر، حال‌وهوای
                  دلنشین آن را تجربه کنید.
                </SectionDescription>
              </Stack>
            </Stack>

            <Button variant="contained" sx={{ pl: 1 }}>
              اقامت در گیلمار
              <ArrowCircle style={{ marginRight: "1rem" }} />
            </Button>
          </Stack>
        </Stack>

        <Stack
          sx={{
            position: "relative",
            flex: { lg: 1 },
            alignItems: "center",
            justifyContent: "center",
            height: { lg: "100%", md: "400px", xs: "300px" },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: { lg: "none", xs: "block" },
            }}
          >
            <img
              src="/images/tour-video-forest.jpg"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                objectPosition: "50% 50%",
              }}
              alt="forst"
            />
          </Box>
          <IconButton
            color="inherit"
            sx={{
              width: "78px",
              background: "#fff !important",
              ":hover": {
                boxShadow: "0 0 0 15px #ffffff53",
              },
              transition: ".5s ease",
              height: "78px",
            }}
          >
            <PlayIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Box
        sx={{
          position: "absolute",
          bottom: { lg: "-80px", sm: "25%", xs: "36%" },
          left: { lg: "55%", sm: "5%", xs: "8%" },
          transform: "translateX(-50%), rotate(-20deg)",
          width: { sm: 134, xs: 80 },
          height: { sm: 139, xs: 85 },
          zIndex: 2,
        }}
      >
        <img
          src="/images/tour-section-bottom-icon.svg"
          width="100%"
          height="100%"
          alt="tour"
        />
      </Box>
    </Section>
  );
}
