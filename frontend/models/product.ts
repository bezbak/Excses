export interface ProductMedia {
    id: number;
    image: string;
    product: number;
}

export interface ProductCategory {
    id:number;
    name: string;
    slug: string;
}

export interface ProductSub_Category{
    id:number;
    name: string;
    slug: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: ProductCategory;
    main_image: string;
    sale: boolean;
    sale_price: number | null;
    media: ProductMedia[] | [];
    sub_category: ProductSub_Category | null;
    artikul: string;
    rating: number;
    ratingAmount: number;
    owner:string;
}


export interface ProductShort{
    id: number;
    name: string;
    main_image: string;
}

export interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    main_image: string;
    price: number;
    rating: number;
    ratingAmount: number;
    sale:boolean;
    sale_price: number | null;
  }