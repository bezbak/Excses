import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography'
import Divider from "@mui/material/Divider";
import { Rating } from "@mui/material";
import { Product } from "@/models";

interface MPDprops {
  medias: string[];
  product: Product
}

export default function MPD({ medias, product}: MPDprops) {
  const {
    id,
    price,
    name,
    description,
    artikul,
    main_image,
    owner,
    rating,
    ratingAmount,
    category,
    sub_category,
    sale,
    sale_price,
    media,
  } = product;
  return (
    <>
    <Box sx={{display:{xs:"block",md:"none"}, position:'relative',zIndex:0}}>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {medias.map(obj => (
            <SwiperSlide className="max-h-[400px] ">
              <Image src={obj} alt="Изображения" width={375} height={400} className="object-contain max-w-[375px] block m-auto"></Image>
            </SwiperSlide>
          ))}
        </Swiper>
    </Box>
    <Box px={1.5} sx={{display:{xs:"block",md:"none"}}}>
      <Typography variant="body1" color="initial">
        Цена :{ price } <u>C</u>
         {sale && 
         <del style={{color:"gray"}}>
          {sale_price} <u>c</u>
          </del>
          }
      </Typography>
      <Box display="flex" gap={1} overflow="scroll">
        {medias.map(obj => 
          <Image src={obj} alt="Изображения" width={100} height={120} className="object-contain max-w-[375px] block m-auto rounded-md"></Image> 
          )}
      </Box>
      <Divider/>
      <Box marginTop={3} >
          <Typography variant="body1" color="initial">
            <b>{owner}</b> / {name}
          </Typography>
          <Box display="flex" gap="20px" sx={{ my: 2 }}>
            <Rating value={rating} precision={0.5} readOnly />
            <Typography variant="body2" color="initial">
              {ratingAmount} отзывов
            </Typography>
            <Typography variant="body2" color="initial">
              Арт: {artikul}
            </Typography>
          </Box>
        </Box>
        <Box maxWidth={400}  >
              <Typography
                variant="body1"
                fontSize={16}
                fontWeight={700}
                color="initial"
              >
                О товаре
              </Typography>
              <Typography variant="body1" fontSize={14} color="initial">
                Название: {name}
              </Typography>
              <Typography variant="body1" fontSize={14} color="initial">
                Описание:
              </Typography>
              <Typography variant="body1" fontSize={14} color="initial">
                {description}
              </Typography>
              <Divider />
              <Typography
                variant="body1"
                fontSize={16}
                fontWeight={700}
                color="initial"
              >
                Дополнительная информация
              </Typography>
              <Typography variant="body1" fontSize={14} color="initial">
                {" "}
                Категория : {category.name}
              </Typography>
              <Typography variant="body1" fontSize={14} color="initial">
                {" "}
                Подкатегория : {sub_category?.name}
              </Typography>
              <Divider />
              <Typography
                variant="body1"
                fontSize={16}
                fontWeight={700}
                color="initial"
              >
                Оцените товар
              </Typography>
              <Rating value={rating} precision={0.5} />
            </Box>


    </Box>
    </>
  );
}
