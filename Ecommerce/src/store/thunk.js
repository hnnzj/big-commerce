import { getInmuebles } from "./inmuebleSlice";
import axios from "axios";

export const getAllInmuebles = () => {
  return async (dispatch) => {
    const result = await axios("http://localhost:3000/api/inmuebles/");
    console.log(result);
    dispatch(getInmuebles(result.data.info));
  };
};
