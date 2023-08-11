import React from 'react'
import { Card, Grid ,Container} from '@mui/material';
import CompanyLogo from '@assets/image 52.svg';
import Image from 'next/image';

const Arrray = [
    {img: CompanyLogo, id:1},
    {img: CompanyLogo, id:2},
    {img: CompanyLogo, id:3},
    {img: CompanyLogo, id:4},
    {img: CompanyLogo, id:5},
    {img: CompanyLogo, id:6},
    {img: CompanyLogo, id:7},
    {img: CompanyLogo, id:8},
]


const LogoCardList = () => {
  return (
    <Container>
      <Grid 
      sx={{ 
        display:"grid", 
        gridTemplateColumns:{xs:"repeat(2,1fr)",sm:"repeat(3,1fr)",md:"repeat(4,1fr)"}, 
        columnGap:{xs:"5px",md:3,},
        rowGap:{xs:"5px",md:3} , 
        m:"auto",
        my:{md:3} , 
        width:"100%",
        
      }}>
        {Arrray.map(obj => 
        <Card key={obj.id}
        sx={{border:"1px solid #1E232C", 
        borderRadius:{xs:"8px",sm:"12px",md:"16px",lg:"20px"}}}>
            <Image 
            src={obj.img} 
            className='w-full'
            alt='some text'
            width={100} 
            height={150}/>
        </Card>)}
      </Grid>
    </Container>
  )
}
export default LogoCardList;
