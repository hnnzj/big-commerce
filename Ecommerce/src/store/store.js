import { configureStore } from "@reduxjs/toolkit";
import { inmuebleSlice } from "./inmuebleSlice";

const store = configureStore({
  reducer: {
    inmueble: inmuebleSlice.reducer,
  },
});

export default store;
