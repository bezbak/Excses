import axios from "axios";
import { CreateUserDto , LoginDto, ResponseUser} from "./types";


const instance = axios.create({
  baseURL:""
});


export const userApi = {
  async register(dto: CreateUserDto) {
    const {data} = await instance.post<CreateUserDto, {data:ResponseUser}>("/auth/register", dto)
        return data;
      },
      async login(dto: LoginDto) {
        const {data} = await instance.post<LoginDto, {data:ResponseUser}>("/auth/login", dto)
        return data;
      }
    }
    
    // import { fetchProductsFailure, fetchProductsStart, fetchProductsSuccess } from "@/store/products/products.slice";
    // import { Product } from "@/models";
// export const fetchProducts = () => async (dispatch:any) => {
//     dispatch(fetchProductsStart());
//     try {
//       const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
//       const products = response.data;
//       dispatch(fetchProductsSuccess(products));
//     } catch (error:any) {
//       const errorMessage = error.message;
//       dispatch(fetchProductsFailure(errorMessage));
//     }
//   };

// import axios from "axios";
// import { Product } from "./types";

// const instance = axios.create({
//   baseURL: "https://example.com/api",
// });

// export const productApi = {
//   async create(product: Product) {
//     const { data } = await instance.post<Product, { data: Product }>(
//       "/products",
//       product
//     );
//     return data;
//   },

//   async update(id: number, product: Product) {
//     const { data } = await instance.put<Product, { data: Product }>(
//       `/products/${id}`,
//       product
//     );
//     return data;
//   },

//   async delete(id: number) {
//     await instance.delete(`/products/${id}`);
//   },
// };
