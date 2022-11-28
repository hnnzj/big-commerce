import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
            <div className='container-fluid'>
                <span className='navbar-brand mb-0 h1 text-uppercase'>
                    BigCommerce
                </span>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarcollapseidsupersaiyan'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse justify-content-end me-5   '
                    id='navbarcollapseidsupersaiyan'
                >
                    <div className='navbar-nav '>
                        <Link to='/' className='nav-link '>
                            Home
                        </Link>
                        <Link to='/products' className='nav-link'>
                            Products
                        </Link>
                        <a className='nav-link' href='#'>
                            About Us
                        </a>
                        <a className='nav-link' href='#'>
                            Politics
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
