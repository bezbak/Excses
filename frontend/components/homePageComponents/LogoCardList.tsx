import { Card, Grid } from '@mui/material'
import React from 'react'
import CompanyLogo from '@assets/image 52.svg'
import Image from 'next/image'

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
    <Grid sx={{display:"grid", gridTemplateColumns:{xs:"repeat(2,47%)",sm:"repeat(2,47%)",md:"repeat(3,31%)",lg:"repeat(4,22%)"}, columnGap:{xs:"5px",md:3,lg:4},rowGap:{xs:"5px",md:3,lg:4} , my:{xs:2,md:3,lg:4} , width:"fit-content",m:"auto"}}>
        {Arrray.map(obj => 
        <Card key={obj.id} sx={{border:"1px solid black", borderRadius:"20px"}}>
            <Image 
            src={obj.img} 
            className='w-full'
            
            alt='some text' 
            width={100} 
            height={150}/>
        </Card>)}
    </Grid>
  )
}

export default LogoCardList
