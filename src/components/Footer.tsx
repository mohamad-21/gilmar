"use client";

import { footerLinks, sectionPaddingX } from "@/constants";
import { LinkedIn, Telegram, X, YouTube } from "@mui/icons-material";
import { Box, ButtonGroup, Container, Stack, Typography } from "@mui/material";
import SocialLink from "./ui/SocialLink";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        px: sectionPaddingX,
        pt: "12rem",
        pb: "2rem",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
      id="contact"
    >
      <Container
        maxWidth="xl"
        disableGutters
        sx={{ position: "relative", zIndex: 2 }}
      >
        <Stack spacing={2}>
          <Stack
            direction="row"
            sx={{
              flexWrap: "wrap",
              background: "#fff",
              borderRadius: "20px",
              gap: 4,
              backgroundImage: { lg: "url('/images/footer-map-icon.svg')" },
              backgroundPosition: "left bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "364px 276px",
              overflow: "hidden",
            }}
          >
            <Stack
              direction="row"
              sx={{
                flexWrap: "wrap",
                p: "1.5rem 2rem 0",
                gap: 4,
                columnGap: 8,
              }}
            >
              <Stack sx={{ maxWidth: 375 }} spacing={2}>
                <img src="/logo.png" width={170} height={53} alt="logo" />

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    maxWidth: 300,
                    color: "#4C4C4D",
                    lineHeight: "32px",
                  }}
                >
                  اقامتگاه بوم‌گردی گیلمار، بزرگ‌ترین مجموعه اکولوژ شمال کشور با
                  امکانات رفاهی و تفریحی متنوع، در فضایی منحصربه‌فرد و با مجوز
                  رسمی میراث فرهنگی گیلان فعالیت می‌کند.
                </Typography>
              </Stack>

              {footerLinks.map((item, idx) => (
                <Stack sx={{ maxWidth: 375 }} key={idx} spacing={2}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      lineHeight: "53px",
                      fontWeight: 800,
                      color: "#1A1A1A",
                    }}
                  >
                    {item.label}
                  </Typography>

                  <Stack
                    component="ul"
                    sx={{
                      pr: idx === 1 ? "0" : "20px",
                      listStyle: idx === 1 ? "none" : "",
                    }}
                    spacing={1.5}
                  >
                    {item.links.map(link => (
                      <Typography
                        key={link}
                        variant="body2"
                        component="li"
                        sx={{
                          fontWeight: 600,
                          lineHeight: "32px",
                          wordWrap: "break-word",
                          color: "#4C4C4D",
                          width: "100%",
                        }}
                      >
                        {link}
                      </Typography>
                    ))}
                  </Stack>
                </Stack>
              ))}

              <Box
                sx={{
                  display: { lg: "none", sm: "block", xs: "none" },
                  m: "0 auto -10px -2rem",
                }}
              >
                <img src="/images/footer-map-icon.svg" alt="location" />
              </Box>
            </Stack>

            <Box
              sx={{
                display: { sm: "none", xs: "flex" },
                width: "100%",
              }}
            >
              <img
                src="/images/footer-map-icon.svg"
                width="100%"
                alt="location"
              />
            </Box>
          </Stack>
          <Stack
            sx={{
              background: "#fff",
              height: { sm: 56 },
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: { sm: "100px", xs: "20px" },
              p: { sm: "10px 14px", xs: 2 },
              gap: 2,
              boxShadow: "0px 0px 0px 6px #FFFFFF",
            }}
            direction={{ sm: "row" }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 500, color: "#4C4C4D", lineHeight: "32px" }}
            >
              © تمامی حقوق برای اقامتگاه بوم‌گردی گیلمار محفوظ است.
            </Typography>
            <ButtonGroup sx={{ gap: 1.5 }}>
              <SocialLink href="#">
                <LinkedIn />
              </SocialLink>
              <SocialLink href="#">
                <Telegram />
              </SocialLink>
              <SocialLink href="#">
                <YouTube />
              </SocialLink>
              <SocialLink href="#">
                <X />
              </SocialLink>
            </ButtonGroup>
          </Stack>
        </Stack>
      </Container>

      <Box
        sx={{
          position: "absolute",
          background: "#C5D8FF",
          width: 640,
          height: 640,
          top: { lg: "60%", sm: "80%", xs: "85%" },
          right: { lg: "-22%", sm: "-30%", xs: "-50%" },

          borderRadius: "50%",
          filter: "blur(170px)",
        }}
      />
    </Box>
  );
}
