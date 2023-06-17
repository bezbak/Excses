import { Card, Grid } from '@mui/material'
import React from 'react'
import CompanyLogo from '@assets/image 52.svg'
import Image from 'next/image'
import {Container} from '@mui/material'

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
    <Container sx={{px:{xs:0}}}>
      <Grid 
      sx={{ 
        display:"grid", 
        gridTemplateColumns:{xs:"repeat(2,49%)",sm:"repeat(3,33%)",md:"repeat(4,calc(25% - 18px))",lg:"repeat(4,calc(25% - 24px))",xl:"repeat(4,calc(25% - 32px))"}, 
        columnGap:{xs:"5px",md:3,lg:4},
        rowGap:{xs:"5px",md:3,lg:4} , 
        my:{xs:2,md:3,lg:4} , 
        alignContent:'center',
        width:"100%",
        m:"auto"
      }}
      
      >
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

export default LogoCardList
