import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Container} from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import image from 'assets/HeroImage.jpg';
import image1 from 'assets/HeroImage1.png';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { relative } from 'path';




interface ItemProps {
  name: string;
  description: string;
  img: StaticImageData;
}

const items: ItemProps[] = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
    img: image
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    img: image1
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    img: image
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    img: image
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    img: image
  },
];

export default function HeroCarousel() {
  return (

<Container sx={{p:0, minHeight:"300px",position:"relative"}}>
    <Carousel
    sx={{ 
        borderRadius:"20px",
        pt:2 
        }}
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
    
    NextIcon={<ChevronRight className='text-4xl'/>}
    PrevIcon={<ChevronLeft className='text-4xl'/>}>

    {items.map((item, i) => <CarouselItem key={i} item={item} />)}

    </Carousel>
    </Container>
  );
}

function CarouselItem(props: { item: ItemProps }) {
  return (
      <Paper sx={{height:'400px', width:"100%"}}>
        <Image 
          className='w-full h-full object-cover object-top rounded-xl'
          src={props.item.img}
          width={800}
          alt={props.item.name} />
      </Paper>
  );
}




