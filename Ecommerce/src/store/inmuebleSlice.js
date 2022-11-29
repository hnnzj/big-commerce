import { createSlice } from "@reduxjs/toolkit";
export const inmuebleSlice = createSlice({
  name: "inmuebles",
  initialState: {
    inmuebles: null,
  },
  reducers: {
    getInmuebles: (state, { payload }) => {
      state.inmuebles = payload;
    },
  },
});
export const { getInmuebles } = inmuebleSlice.actions;
