import { RootState } from "@/store"
import { useSelector } from "react-redux"

export const useUser = () => {
    const user = useSelector(
        (state: RootState) => state.reducers.user)
    return user
}