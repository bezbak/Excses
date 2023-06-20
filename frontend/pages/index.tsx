import React from 'react'
import HeroCarousel from '@/components/homePageComponents/HeroCarousel';
import LogoCardList from '@/components/homePageComponents/LogoCardList';
import Catalog from '@/components/homePageComponents/Catalog';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between py-[24px] px-1 md:px-[32px]`} >
      <HeroCarousel/>
      <LogoCardList/>
      <Catalog/>
    
      <Link href="/user/login" className='text-black'>login/registration</Link> 
    </main>
  )
}
