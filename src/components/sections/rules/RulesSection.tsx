import GridBackground from "@/components/ui/GridBackground";
import Section from "@/components/ui/Section";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import { Box, Stack } from "@mui/material";
import RuleItem from "./RuleItem";

export default function RulesSection() {
  return (
    <Section id="rules">
      <Stack
        spacing={"20px"}
        sx={{
          alignItems: "center",
          position: "relative",
          textAlign: "center",
          width: "100%",
        }}
      >
        <img src="/images/rules-header-icon.svg" alt="rules" />

        <Stack spacing={1}>
          {" "}
          <SectionTitle>همراهی برای حفظ آرامش و طبیعت گیلمار</SectionTitle>
          <SectionDescription
            sx={{
              maxWidth: { md: "100%", xs: 500 },
            }}
          >
            برای حفظ آرامش، نظم و تجربه‌ای دلنشین برای همه مهمانان، لطفاً قوانین
            اقامتگاه گیلمار را پیش از رزرو مطالعه و رعایت فرمایید.
          </SectionDescription>
        </Stack>

        <GridBackground
          style={{
            width: 669,
            height: 393,
            top: "128px",
            left: "-14.6px",
          }}
        />
        <Stack
          direction="row"
          sx={{
            pt: 6,
            columnGap: 9,
            rowGap: 3,
            flexWrap: { lg: "nowrap", xs: "wrap" },
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: { lg: "block", xs: "none" },
              position: "absolute",
              width: 836,
              top: "80px",
              left: "80px",
            }}
          >
            <img src="/images/rules-section-dash-line.svg" alt="dash line" />
          </Box>
          <RuleItem
            title="مراقبت از وسایل اقامتگاه"
            desc="مهمانان عزیز مسئول نگهداری از تجهیزات و وسایل داخل اقامتگاه در طول مدت اقامت هستند."
            iconUrl="/images/rule-image-1.svg"
            rotateTo="left"
          >
            <Box
              sx={{
                position: "absolute",
                zIndex: 5,
                width: 11,
                height: 11,
                top: "27px",
                left: "206px",
                transform: "rotate(-105deg)",
                borderRadius: "2px",
                background: "#DCB9F0",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                zIndex: 5,
                width: 8,
                height: 8,
                top: "98px",
                left: "11px",
                transform: "rotate(20deg)",
                borderRadius: "2px",
                background: "#9AC8FF",
              }}
            />
          </RuleItem>

          <RuleItem
            title="حفظ آرامش اقامتگاه"
            desc="برای حفظ فضای آرام و دلنشین گیلمار، لطفاً از ایجاد سر‌وصدای زیاد به‌ویژه در ساعات شب خودداری کنید."
            iconUrl="/images/rule-image-2.svg"
            rotateTo="right"
          >
            <Box
              sx={{
                position: "absolute",
                zIndex: 5,
                width: 11,
                height: 11,
                top: "81px",
                left: "236px",
                transform: "rotate(165deg)",
                borderRadius: "4px",

                background: "#FABDC1",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                zIndex: 5,
                width: 8,
                height: 8,
                top: "14px",
                left: "30px",
                transform: "rotate(20deg)",
                borderRadius: "2px",
                background: "#92A5EF",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                zIndex: 5,
                width: 3,
                height: 3,
                top: "170.13px",
                left: "21.37px",
                transform: "rotate(20deg)",
                borderRadius: "2px",

                background: "#9AC8FF",
              }}
            />
          </RuleItem>
          <RuleItem
            title="حفظ طبیعت و محیط زیست"
            desc="گیلمار در دل طبیعت قرار دارد؛ لطفاً در حفظ محیط‌زیست، فضای سبز و منابع طبیعی همراه ما باشید."
            iconUrl="/images/rule-image-3.svg"
            rotateTo="left"
          >
            <Box
              sx={{
                position: "absolute",
                zIndex: 5,
                width: 7,
                height: 7,
                top: "25.13px",
                left: "217.37px",
                transform: "rotate(20deg)",
                borderRadius: "2px",

                background: "#FFD166",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                zIndex: 5,
                width: 11,
                height: 11,
                top: "191px",
                left: "17px",
                transform: "rotate(20deg)",
                borderRadius: "2px",
                background: "#CDB4DB",
              }}
            />
          </RuleItem>
        </Stack>
      </Stack>
    </Section>
  );
}
