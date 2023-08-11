import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typography  from '@mui/material/Typography'
import BigImg from '@/assets/rafiki.svg'
import logo from '@/assets/Eilibay.svg'
import Head from 'next/head'

function UserAnimation() {
  return (
    <div className="md:w-6/12 px-[15px] py-5 text-center hidden h-[650px] md:block ">
      <Head>
      </Head>
      <div className="logo">
        <Image
          className='m-auto mb-2.5 w-10 md:w-[60px]'
          src={logo}
          width={80}
          height={100}
    
          alt="logo img " />
      </div>

      <Typography variant='h2' sx={{fontSize:{md:24,lg:36}}}>
        Eilbay
      </Typography>
      <Image
        src={BigImg}
        alt="Rafiki"
        width={500}
        height={500}
   
      />

      <span><Link href="/" className='underline font-bold mt-7'>Политика конфиденциальности </Link></span>
    </div>

  )
}

export default UserAnimation;
