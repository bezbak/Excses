import { UserProfileProps } from '@/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState: UserProfileProps = {
  fullName: 'Li-ning',
  // email: 'linkasdg@gmail.com',
  bio: "Hello world my javascript leuanana",
  isLoggedIn: false,
  avatar: undefined,
  rating: 4.3,
  country: {name:"china",code:"ch"}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserProfileProps>) {
      return action.payload;
    },
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUser, setLoggedIn } = userSlice.actions;
export default userSlice.reducer;