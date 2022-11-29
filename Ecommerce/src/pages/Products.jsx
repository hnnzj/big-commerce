import React, { useEffect, useRef } from "react";
import "animate.css";
import remera from "../assets/remera.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllInmuebles } from "../store/thunk";
export const Products = () => {
  const categoryRef = useRef();
  const dispatch = useDispatch();
  const categorias = [
    "Remeras",
    "Jeans",
    "Camperas",
    "Bermudas",
    "Ropa interior",
    "Hoodies",
  ];
  const { inmuebles } = useSelector((state) => state.inmueble);

  useEffect(() => {
    inmuebles === null && dispatch(getAllInmuebles());
  });

  console.log(inmuebles);

  return (
    <div className="container d-flex flex-row animate__animated animate__fadeIn">
      <div className="col-sm-2 col-4 padre  ">
        <div className="col-sm-12 hijo mt-5 text-uppercase ">
          <h2 className="">Categorias</h2>
          <ul className="d-flex flex-column text-start p-0 ">
            {categorias.map((el) => (
              <>
                <li className=" mt-2 list-unstyled ">
                  <span key={el} id={el}>
                    {el}
                  </span>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-10">
        <div className="container-fluid padre">
          <div className="row hijo gap-1 ">
            {inmuebles?.slice(0, 9).map((el) => (
              <div className="item card mt-5  onHover ">
                <img src={el.imagen} alt="" className="card-img" />
                <div className="card-body p-0  d-flex">
                  <div className="d-flex text-center  flex-column">
                    <h2 className="card-title">{el.name}</h2>
                    <h2 className="card-subtitle">{el.desc}</h2>
                    <span className="badge fs-4 bg-warning text-dark mt-3">
                      ${el.price}
                    </span>
                  </div>
                </div>
                <button className="btn btn-warning  mb-2 ">Add Cart</button>
              </div>
            ))}
            <hr className="mt-5 bg-white" />
            <hr className="mt-5 bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
