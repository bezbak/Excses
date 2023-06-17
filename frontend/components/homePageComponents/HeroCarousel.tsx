import React, { ReactElement } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, IconButton, Button } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import imgage from 'assets/HeroImage.png';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { BiChevronDownCircle } from 'react-icons/bi';




interface ItemProps {
  name: string;
  description: string;
  img: StaticImageData;
}

const items: ItemProps[] = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
    img: imgage
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    img: imgage
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    img: imgage
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    img: imgage
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    img: imgage
  },
];

export default function HeroCarousel() {
  return (
    <Carousel
    sx={{width:"100%", height:{xs:'30vh',md:"50vh"},borderRadius:"20px", overflow:'hidden'}}
    navButtonsProps={{          
      style: {
          backgroundColor: '#E8ECF4',
          borderRadius: 12,
          width:50,
          height:50,
          color:"#1E232C",
          fontSize:'39px',
          padding: 0,
      }
      
    }} 
    navButtonsWrapperProps={{   
        style: {
            height:"89%",
            top: '0'
        }
    }}
    activeIndicatorIconButtonProps={{
      style: {
          backgroundColor:"#4546DC",
          color:"#4546DC",
          width:"15px",
          height:"15px",
          padding:0,

      }
    }}
    indicatorIconButtonProps={{
        style: {
          backgroundColor:"#7879FF",
          color:"#7879FF",
          opacity: "0.5",
          height:"10px",
          width:"10px",
          padding:0,
      }
    }}
    indicatorContainerProps={{
      style: {
        
        display:"flex",
        justifyContent: "center",
        gap: "22px",
        alignItems:"center",
      }

  }}
    className='container'
    NextIcon={<ChevronRight className='text-4xl'/>}
    PrevIcon={<ChevronLeft className='text-4xl'/>}

    >
      {items.map((item, i) => <CarouselItem key={i} item={item} />)}
    </Carousel>
  );
}

function CarouselItem(props: { item: ItemProps }) {
  return (
    <Paper sx={{height:{xs:'30vh',md:"50vh"}}}>
      <Image 
        className='w-full rounded-[20px] md:rounded-[30px]'
        src={props.item.img}
        width={500}
        height={100}
        alt={props.item.name} />
    </Paper>
  );
}




