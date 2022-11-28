import React, { useState } from 'react';
import { useEffect } from 'react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import 'animate.css';

export const HighRating = () => {
    const products = [
        {
            name: 'Producto 1',
            imagen: 'Imagen',
            precio: '200',
            descripcion: 'askdaisjdasd',
        },
        {
            name: 'Producto 2',
            imagen: 'Imagen',
            precio: '200',
            descripcion: 'askdaisjdasd',
        },
        {
            name: 'Producto 3',
            imagen: 'Imagen',
            precio: '200',
            descripcion: 'askdaisjdasd',
        },
    ];

    const [index, setIndex] = useState(0);
    const [mostRating, setMostRating] = useState(products[0]);

    const next = () => {
        if (index === 2) {
            return setIndex(0);
        }
        setIndex(index + 1);
    };

    const prev = () => {
        if (index === 0) {
            return setIndex(2);
        }
        setIndex(index - 1);
    };

    useEffect(() => {
        setMostRating(products[index]);
    }, [index]);
    return (
        <div>
            <div className='card text-center  d-flex flex-row justify-content-evenly  align-items-center '>
                <button onClick={prev}>{<TbChevronLeft size={100} />}</button>
                <div className='border border-1 border-dark p-3 w-100'>
                    <div>
                        <img
                            src=''
                            className='card-img'
                            alt='imagen-producto'
                        />
                        <div className='card-body  '>
                            <h5 className='card-title '>{mostRating?.name}</h5>
                            <p className='card-text  '>
                                {mostRating?.descripcion}
                            </p>
                            <button className='btn btn-dark'>Comprar</button>
                        </div>
                    </div>
                </div>
                <span onClick={next}>{<TbChevronRight size={100} />}</span>
            </div>
        </div>
    );
};
