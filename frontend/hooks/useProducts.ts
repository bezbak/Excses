import { RootState } from "@/store"
import { useSelector } from "react-redux"

export const useProducts = () => {
    const products = useSelector(
        (state: RootState) => state.reducers.products.products)
    return products
}