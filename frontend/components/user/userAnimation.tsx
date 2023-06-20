import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '@mui/material'
import BigImg from '@/assets/rafiki.svg'
import logo from '@/assets/Eilibay.svg'

function UserAnimation() {
  return (
    <div className="md:w-6/12 px-[15px] pb-10 text-center hidden h-[650px] md:block ">
      <div className="logo">
        <Image
          className='m-auto mb-2.5 md:w-[60px]'
          src={logo}
          width={80}
          alt="logo img " />
      </div>

      <Typography variant='h2' sx={{fontSize:{md:24,lg:36}}}>
        Eilibay
      </Typography>
      <Image
        className='m-auto mt-10 md:mt-5'
        src={BigImg}
        priority={true}
        width={450}
        alt="man big phone img"/>

      <span><Link href="/" className='underline font-bold mt-7'>Политика конфиденциальности </Link></span>
    </div>

  )
}

export default UserAnimation;
