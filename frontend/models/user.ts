import { Product } from "./product";

export interface Country {
    name: string;
    code: string;
  }
  
export interface UserProfileProps {
    fullName: string;
    avatar: string| undefined;
    products?: Product[];
    rating: number;
    country?: Country;
    bio: string;
    isLoggedIn: boolean;
  }