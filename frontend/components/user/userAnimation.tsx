import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '@mui/material'
import BigImg from '../../assets/all-images/rafiki.svg'
import logo from '../../assets/all-images/Eilibay.svg'

function UserAnimation() {
  return (
 
        <div className="w-6/12 px-[35px] pb-10 text-center h-[650px]">
            <div className="logo">
                <Image 
                className='m-auto mb-2.5'
                src={logo} 
                width={80} 
                alt="logo img " />
            </div>

            <Typography variant='h2'>
              Eilibay
            </Typography>
            <Image 
                className='m-auto mt-10'
                src={BigImg} 
                priority={false}
                width={450}
                loading='lazy'
                alt="man big phone img" />
            
            <span><Link href="/" className='underline font-bold mt-7'>Политика конфиденциальности </Link></span>
      </div>
 
  )
}

export default UserAnimation;
