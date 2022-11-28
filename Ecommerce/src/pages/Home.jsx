import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { HighRating } from '../components/HighRating/HighRating';
import { NavBar } from '../components/NavBar/NavBar';
import { Sections } from '../components/Sections/Sections';

export const Home = () => {
    return (
        <div className='container-fluid html'>
            <HighRating />
            <Sections />
        </div>
    );
};
