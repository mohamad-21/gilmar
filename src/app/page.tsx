import AboutSection from "@/components/sections/about/AboutSection";
import BlogsSection from "@/components/sections/blogs/BlogsSection";
import CabinsSection from "@/components/sections/cabins/CabinsSection";
import FaqSection from "@/components/sections/faq/FaqSection";
import HeroSection from "@/components/sections/hero/HeroSection";
import PackagesSection from "@/components/sections/packages/PackagesSection";
import RulesSection from "@/components/sections/rules/RulesSection";
import ServicesSection from "@/components/sections/services/ServicesSection";
import TestimonialsSection from "@/components/sections/testimonials/TestimonialsSection";
import TourVideoSection from "@/components/sections/tour-video/TourVideoSection";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack spacing={15}>
      <HeroSection />
      <AboutSection />
      <RulesSection />
      <ServicesSection />
      <CabinsSection />
      <TourVideoSection />
      <TestimonialsSection />
      <PackagesSection />
      <BlogsSection />
      <FaqSection />
    </Stack>
  );
}
