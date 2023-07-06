import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Muhammad Ali" },
  { id: "1", name: "Muhammad Talha" },
  { id: "2", name: "Muhammad Aqib" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
