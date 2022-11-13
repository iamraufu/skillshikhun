import React, { useEffect } from 'react';
import PromoImages from '../PromoMessage/PromoImages';
import PromoMessage from '../PromoMessage/PromoMessage';
import IndexSEO from '../SEO/IndexSEO';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Tracker from '../Tracker/Tracker';
import Counter from './Counter/Counter';
import FeaturedCourses from './FeaturedCourses/FeaturedCourses';
import FeaturedInstallment from './FeaturedInstallment/FeaturedInstallment';
import Hero from './Hero/Hero';
import HomeDemo from './HomeDemo';
import MainReviews from './MainReviews/MainReviews';
import SSFeatures from './SSFeatures/SSFeatures';
// import SSModels from './SSModels'

const Home = () => {

    useEffect(() => {
        window?.MC_PIXEL?.fireLogConversionEvent(`homepage`)
    },)

    return (
        <div>
            <IndexSEO />
            <PromoMessage />
            <Navbar />
            <Hero />

            <div style={{ marginTop:'-2rem', backgroundColor: 'rgb(243, 245, 249)' }} className="container-fluid">
                <div className="col-xl-6 col-lg-5 col-md-6 hero-demo-container p-2 mx-auto d-block">
                    <HomeDemo />
                </div>
            </div>

            <FeaturedCourses />
            <FeaturedInstallment />
            <PromoImages />
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