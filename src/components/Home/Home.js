import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import FeaturedCourses from './FeaturedCourses/FeaturedCourses';
import Hero from './Hero/Hero';
import MainReviews from './MainReviews/MainReviews';
import SSFeatures from './SSFeatures/SSFeatures';
// import SSModels from './SSModels';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <FeaturedCourses />
            <SSFeatures />
            {/* <SSModels /> */}
            {/* <MainReviews /> */}
            <Footer />
        </div>
    );
};

export default Home;