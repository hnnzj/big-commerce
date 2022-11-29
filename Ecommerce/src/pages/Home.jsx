import React from "react";
import { useEffect } from "react";
import { Footer } from "../components/Footer/Footer";
import { HighRating } from "../components/HighRating/HighRating";
import { NavBar } from "../components/NavBar/NavBar";
import { Sections } from "../components/Sections/Sections";
import { useDispatch } from "react-redux";
import { getAllInmuebles } from "../store/thunk";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllInmuebles());
  });
  return (
    <div className="container-fluid html">
      <HighRating />
      <Sections />
    </div>
  );
};
