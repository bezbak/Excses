import HeroCarousel from '@/components/homePageComponents/HeroCarousel';
import LogoCardList from '@/components/homePageComponents/LogoCardList';

import Link from 'next/link';

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between py-[24px] px-[32px]`} >

      <HeroCarousel/>
      <LogoCardList/>
      <Link href="/user/login" className='text-black'>login/registration</Link> 
      
    </main>
  )
}
