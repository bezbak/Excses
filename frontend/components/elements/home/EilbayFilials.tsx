import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import amico from "@assets/amico.png";
import imageUrl from "@assets/imageUrl.png";



interface Props {}

export default function EilbayFilials(props: Props) {
  
  return (
    <Box mt={3} mb={10}>
      <Container maxWidth="lg">
        <Typography variant="h1" color="primary" textAlign='center'>Пункты выдачи Eilbay</Typography>
        <Box display="flex" justifyContent="space-around"  alignItems="center" flexWrap="wrap-reverse">
          <Image
            src={amico}
            alt="Possible animation"
            priority={true}
            width={200}
            height={250}
          />

          <Box display="flex" minWidth="400px"  justifyContent='space-between' >
              <Typography component="ul" color='primary' whiteSpace="nowrap">
                <Typography component="li">KG - г. Ош</Typography>
                <Typography component="li">UZ - г. Ташкент</Typography>
                <Typography component="li">KZ - г. Алматы</Typography>
                <Typography component="li">RU - г. Москва</Typography>
                <Typography component="li">GR - г. Берлин</Typography>
              </Typography>
              
              <Typography component="ul" color='primary' whiteSpace="nowrap">
                <Typography component="li">Средняя Азия</Typography>
                <Typography component="li">Средняя Азия</Typography>
                <Typography component="li">Средняя Азия</Typography>
                <Typography component="li">Европа</Typography>
                <Typography component="li">Европа</Typography>
              </Typography>
            
          </Box>

          <Image
            src={imageUrl}
            alt="some text"
            width={200}
            height={250}
          />
        </Box>
      </Container>
    </Box>
  );
}
