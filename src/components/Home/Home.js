import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import FeaturedCourses from './FeaturedCourses';
import Hero from './Hero';
import SSFeatures from './SSFeatures';
import SSModels from './SSModels';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <FeaturedCourses />
            <SSFeatures />
            <SSModels />
        </div>
    );
};

export default Home;