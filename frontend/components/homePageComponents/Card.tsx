import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';



const ProductCardWrapper = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.shape.borderRadius,
}));

const ProductCardMedia = styled(CardMedia)({
  paddingTop: '100%', // Controls the aspect ratio of the image (here it's a square image)
  backgroundSize: 'cover',
});

const ProductCardContent = styled(CardContent)({
  flex: '1 0 auto',
});

const ProductCardActions = styled('div')(({ theme }) => ({
  marginTop: 'auto',
}));

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

 const ProductCard: React.FC<ProductCardProps> = ({ title, description, image }) => {
  return (
    <ProductCardWrapper>
      <ProductCardMedia image={image} title={title} />
      <ProductCardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </ProductCardContent>
      <ProductCardActions>
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
      </ProductCardActions>
    </ProductCardWrapper>
  );
};

export default ProductCard;