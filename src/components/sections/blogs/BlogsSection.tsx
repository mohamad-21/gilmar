import GridBackground from "@/components/ui/GridBackground";
import Section from "@/components/ui/Section";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import { Box, Stack } from "@mui/material";
import BlogCard from "./‌BlogCard";

export default function BlogsSection() {
  return (
    <Section sx={{ position: "relative" }} id="blog">
      <GridBackground
        style={{
          width: 669,
          height: 393,
          top: "-4px",
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
          <img src="/images/blogs-content-icon.svg" alt="blogs" />

          <Stack spacing={1}>
            <SectionTitle>
              مجله و مقالات گیلمار؛ روایت سفر، طبیعت و آرامش
            </SectionTitle>
            <SectionDescription>
              در مجله گیلمار، خواندنی‌هایی درباره سفر، طبیعت، فرهنگ محلی و تجربه
              اقامتی دلنشین را دنبال کنید.
            </SectionDescription>
          </Stack>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              md: "repeat(auto-fit, 408px)",
              xs: "repeat(auto-fit, minmax(300px, 1fr))",
            },
            gap: "20px",
            maxWidth: "100%",
            mx: "auto !important",
          }}
        >
          {Array.from({ length: 3 }).map((_, idx) => (
            <BlogCard
              key={idx}
              title="۱0 تجربه‌ای که نباید در طبیعت شمال از دست بدهید"
              desc="از قدم‌زدن در جنگل‌های مه‌آلود تا نوشیدن چای کنار شالیزار، در این مقاله با لذت‌های ساده و آرامش‌بخش طبیعت..."
              image="blog-image.png"
            />
          ))}
        </Box>
      </Stack>
    </Section>
  );
}
