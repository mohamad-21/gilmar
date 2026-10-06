import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

type Props = {
  image: string;
  name: string;
  feedback: string;
};

export default function TestimonialCard(testimonial: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        gap: 1,
      }}
    >
      <Avatar
        src={`/images/${testimonial.image}`}
        alt={testimonial.name}
        sx={{
          width: 100,
          height: 100,
        }}
      />

      <Card
        sx={{
          borderRadius: "16px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            gap: 3,

            p: "24px",
          }}
        >
          <Box
            component="img"
            src="/images/quotes-icon.svg"
            alt="quote"
            sx={{
              width: 28,
              height: 28,
            }}
          />

          <Typography
            variant="subtitle2"
            sx={{
              color: "#4C4C4D",
              fontWeight: 600,
              lineHeight: "32px",
            }}
          >
            {testimonial.feedback}
          </Typography>

          <Box
            sx={{
              mt: {
                xs: 0.5,
                md: 1,
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: {
                  xs: 13,
                  sm: 14,
                },
              }}
            >
              {testimonial.name}
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                color: "#4C4C4D",
                fontWeight: 600,
                mt: 1,
                fontSize: {
                  xs: 11,
                  sm: 12,
                },
              }}
            >
              مهمان
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
