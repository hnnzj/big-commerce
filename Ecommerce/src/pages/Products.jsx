import React, { useRef } from 'react';
import 'animate.css';
import remera from '../assets/remera.png';
export const Products = () => {
    const categoryRef = useRef();

    const categorias = [
        'Remeras',
        'Jeans',
        'Camperas',
        'Bermudas',
        'Ropa interior',
        'Hoodies',
    ];

    const products = [
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
        },
        {
            name: 'Remera',
            price: 200,
            desc: 'ksjjsjga',
            rating: 5,
        },
    ];

    return (
        <div className='container d-flex flex-row animate__animated animate__fadeIn'>
            <div className='col-sm-2 col-4 padre  '>
                <div className='col-sm-12 hijo mt-5 text-uppercase '>
                    <h2 className=''>Categorias</h2>
                    <ul className='d-flex flex-column text-start p-0 '>
                        {categorias.map((el) => (
                            <>
                                <li className=' mt-2 list-unstyled '>
                                    <span key={el} id={el}>
                                        {el}
                                    </span>
                                </li>
                            </>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='col-10'>
                <div className='container-fluid padre'>
                    <div className='row hijo gap-1 '>
                        {products.slice(0, 9).map((el) => (
                            <div className='item card text-center mt-5  onHover '>
                                <div className='card-body d-flex'>
                                    <img
                                        src={remera}
                                        alt=''
                                        className='card-img  w-50'
                                    />
                                    <div className='d-flex justify-content-center ms-4 flex flex-column'>
                                        <h2 className='card-title'>
                                            {el.name}
                                        </h2>
                                        <h2 className='card-subtitle'>
                                            {el.desc}
                                        </h2>
                                        <span className='badge fs-4 bg-warning text-dark mt-3'>
                                            ${el.price}
                                        </span>
                                    </div>
                                </div>
                                <button className='btn btn-warning  mb-2 '>
                                    Add Cart
                                </button>
                            </div>
                        ))}
                        <hr className='mt-5 bg-white' />
                        <hr className='mt-5 bg-white' />
                    </div>
                </div>
            </div>
        </div>
    );
};
