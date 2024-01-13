import { createSlice } from "@reduxjs/toolkit";
import { ERole, IUser } from "../../hooks/user.hook";

export interface AuthSliceData {
  userCurrent: IUser | null;
  role: ERole | null;
}
const initialState: AuthSliceData = {
  userCurrent: "có",
  role: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      (state.userCurrent = action.payload.userCurrent),
        (state.role = action.payload.role);
    },
    signOut: (state) => {
      state.role = state.userCurrent = null;
    },
  },
});
export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
