import { createSlice } from "@reduxjs/toolkit";
import { UserEmptyState } from "./initialstate";
import userReducers from "./reducers";

export const NAME_STATE = "user";

export const userSlice = createSlice({
  name: NAME_STATE,
  initialState: UserEmptyState,
  reducers: userReducers,
});
export const userReducer = userSlice.reducer;

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
