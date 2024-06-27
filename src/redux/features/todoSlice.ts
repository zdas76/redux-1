import { createSlice } from "@reduxjs/toolkit";

// export type interface TotoState {
//     value: number
// }

const initialState = {};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

// export const {} = todoSlice.actions;

export default todoSlice.reducer;
