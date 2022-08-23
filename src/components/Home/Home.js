import React from 'react';
// import PromoImages from '../PromoMessage/PromoImages';
// import PromoMessage from '../PromoMessage/PromoMessage';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Tracker from '../Tracker/Tracker';
import Counter from './Counter/Counter';
import FeaturedCourses from './FeaturedCourses/FeaturedCourses';
import FeaturedInstallment from './FeaturedInstallment/FeaturedInstallment';
import Hero from './Hero/Hero';
import MainReviews from './MainReviews/MainReviews';
import SSFeatures from './SSFeatures/SSFeatures';
// import SSModels from './SSModels';

const Home = () => {
    return (
        <div>
            {/* <PromoMessage /> */}
            <Navbar />
            <Hero />
            <FeaturedCourses />
            <FeaturedInstallment />
            {/* <PromoImages /> */}
            <SSFeatures />
            <Counter />
            {/* <SSModels /> */}
            <MainReviews />
            <Footer />
            <Tracker />
        </div>
    );
};

export default Home;