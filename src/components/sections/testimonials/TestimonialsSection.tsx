import Section from "@/components/ui/Section";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import { Stack } from "@mui/material";
import Testimonials from "./Testimonials";

export default function TestimonialsSection() {
  return (
    <Section containerSx={{ position: "relative" }} id="testimonials">
      <Stack spacing={6}>
        <Stack
          spacing={"20px"}
          sx={{
            alignItems: "center",
            px: "2rem",
            textAlign: "center",
            width: "100%",
          }}
        >
          <img src="/images/testimonials-content-icon.svg" alt="cabins" />

          <Stack spacing={1}>
            <SectionTitle>گیلمار از نگاه مهمانان</SectionTitle>
            <SectionDescription>
              تجربه واقعی مهمانان، بهترین روایت از آرامش، طبیعت و حال خوب گیلمار
              است.
            </SectionDescription>
          </Stack>
        </Stack>
        <Testimonials />
      </Stack>
    </Section>
  );
}
