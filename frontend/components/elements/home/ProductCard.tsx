import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useActions } from "@/hooks/useAction";
import { useFavorites } from "@/hooks/useFavorites";
import { ProductCardProps } from "@/models";

interface FavoriteProduct {
  id:number;
  main_image:string;
  name:string;
  description: string|null;
  price:number;
  sale:boolean;
  sale_price: number | null;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  main_image,
  price,
  rating,
  ratingAmount,
  description,
  sale,
  sale_price,
}) => {
  const favorites = useFavorites();
  const isFavorite = favorites.some((r) => r.id === id);
  const { toggleFavorites } = useActions();
  const handleToggleFavorites = (item: FavoriteProduct ) => toggleFavorites(item);

  return (
    <Card sx={{ width: {xs:"165px",sm:'180px',md:'211px'}, height: {xs:"255px",sm:'270px',md:'311px'}, position: "relative" }}>
      <CardMedia component="img" sx={ {width: {xs:"165px",sm:'180px',md:'211px'}, height: {xs:"160px",sm:'180px',md:'211px'}}} 
      // height="211" className="max-h-[211px] min-h-[211px]"
       image={main_image} alt={name} />
      <CardContent sx={{position:"relative", p:"10px", height:"100px" }}>
        <Link className='text-[14px] p-0' href={`/${id}`}>
          {name}
        </Link>
        <Typography variant="h6" color="primary" sx={{position: "absolute", bottom:"25px", fontSize:{xs:14,sm:16,md:18}}} gutterBottom>
          {price} <u>C</u>
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, position: "absolute", bottom:5 }}>
          <Rating value={rating} precision={0.5} readOnly />
          <Typography variant="body2" color="text.secondary">
            {ratingAmount}
            {}
          </Typography>
        </Box>
      </CardContent>
      <IconButton
        sx={{
          position: "absolute",
          borderRadius: "4px",
          top: 8,
          right: 8,
          color: isFavorite ? "red" : "",
        }}
        onClick={() => handleToggleFavorites({ id, name, price, main_image , sale, sale_price, description})}
      >
        <FavoriteIcon />
      </IconButton>
    </Card>
  );
};

export default ProductCard;
