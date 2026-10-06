import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type Props = {
  title: string;
  price: string;
  imageUrl: string;
};

export default function CabinCard({ title, price, imageUrl }: Props) {
  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        height: 302,
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <CardContent
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: "1.5rem !important",
          gap: 1,
          color: "#fff",
          background:
            "linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,0) 65%)",
          "&:last-child": {
            pb: 2,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 700,
            lineHeight: 1.5,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            fontSize: 14,
            opacity: 0.9,
          }}
        >
          هر شب اقامت از {price} تومان
        </Typography>
      </CardContent>
    </Card>
  );
}
