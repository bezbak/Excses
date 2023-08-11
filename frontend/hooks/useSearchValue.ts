import { RootState } from "@/store"
import { useSelector } from "react-redux"

export const useSearchValue = () => {
    const searchValue = useSelector(
        (state: RootState) => state.reducers.searchValue)
    return searchValue
}