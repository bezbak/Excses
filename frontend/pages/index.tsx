import HeroCarousel from '@/components/homePageComponents/HeroCarousel';
import LogoCardList from '@/components/homePageComponents/LogoCardList';
import Catalog from '@/components/homePageComponents/Catalog';
import ProductCard from '@/components/homePageComponents/Card';
import img from '@assets/Снимок экрана 2023-04-05 в 16.31 3.png'
import Link from 'next/link';

const productData = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is the description of Product 1.',
    image: img,
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is the description of Product 2.',
    image: img,
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'This is the description of Product 3.',
    image: img,
  },
];

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between py-[24px] px-1 md:px-[32px]`} >

      <HeroCarousel/>
      <LogoCardList/>
      <Catalog/>
      {productData.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
        />
      ))}
      <Link href="/user/login" className='text-black'>login/registration</Link> 
      
    </main>
  )
}
