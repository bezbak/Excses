import React from "react";
import { useFavorites } from "@/hooks/useFavorites";
import { Container, Typography, Box } from "@mui/material";
import Image from "next/image";
import { useSearchValue } from "@/hooks/useSearchValue";

export default function Favorites() {
  const favorites = useFavorites();
  const searchValue = useSearchValue()

  return (
    <Container >
      <Typography variant="body1" color="initial" px={4}>
        Избранное
      </Typography>
      
      {favorites.length  ? 
      (favorites.filter(obj => obj.name.toUpperCase().includes(searchValue.query.toUpperCase()))
      .map((obj) => (
        <Box display="flex" px={4} py={2} gap="20px" mb={'22px'} sx={{border:"1px solid #e1e1e1"}}>
         
          <Image
            className="object-cover rounded-[7px] w-[150px] h-[200px] md:min-w-[260px] md:min-h-[300px] "
            src={obj.main_image}
            alt={obj.name}
            width={260}
            height={300}
          ></Image>
          <Box>
            <Box display="flex" alignItems={'center'}>
              <Typography variant="body1" sx={{fontSize:{xs:14,sm:16,md:24}}} fontWeight={600} color="initial">
                {obj.price} <u>C</u> 
              </Typography>
              <Typography variant="body1" sx={{fontSize:{xs:10,sm:12,md:18}}} className="text-[#909090]">
                {obj.sale_price}
              </Typography> 
            </Box>
            <Typography variant="body1"  sx={{fontSize:{xs:14,sm:16,md:24}}} color="initial">
              {obj.description}
            </Typography>
          </Box>
        </Box>
      )))
      :
     ( <Typography textAlign="center" className="text-black">Тут пусто. <br /> Вы пока еще не добавили товары в избранное!</Typography>)
      }
    </Container>
  );
}
