import React from "react";
import HeroCarousel from "@/components/elements/home/HeroCarousel";
import LogoCardList from "@/components/elements/home/LogoCardList";
import ProductList from "@/components/elements/home/ProductList";
import EilbayFilials from "@/components/elements/home/EilbayFilials";
import ProductListFilters from "@/components/elements/home/ProductListFilters";


export default function Home() {
  return (
    <>
      <HeroCarousel />
      <LogoCardList />
      <ProductListFilters/>
      <ProductList />
      <EilbayFilials />
    </>
  );
}


