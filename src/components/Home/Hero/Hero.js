import React from 'react';
import './Hero.css';
import logoText from '../../../images/logoText.png';
import landingFront from '../../../images/landing-front.png';
import AOS from 'aos';
import "aos/dist/aos.css";
import DemoClass from '../../DemoClass/DemoClass';
import courseData from '../../../data/course/courseData';
import { Link } from 'react-router-dom';
// import HeroSlider from './HeroSlider';

const Hero = () => {

    AOS.init({ duration: 1000 })

    return (
        <div
            // style={{ marginTop: '8vh' }} 
            className='hero-container'>
            <div className="container">
                <div className="row p-2">
                    {/* <h2 className='text-white hero-text mt-3 text-center'> স্কিল শিখুন এর হাত ধরে শিখুন ঘরে বসে আয় করার মাধ্যম!</h2>
                    <p className='text-white hero-text-sub text-center'>সাশ্রয়ী মূল্যে ঘরে বসে লাইভ ক্লাস করুন ইন্ট্রাক্টর এর সাথে!</p> */}
                    <div data-aos='zoom-in' className="col-xl-8 col-lg-7 col-md-6">
                        <img src={landingFront} className='img-fluid hero-image mt-5' alt="free webinar" loading="lazy" />
                        <h2 className='text-white hero-text'>
                            <img src={logoText} width={150} className='img-fluid pe-2' alt="logo text" loading="lazy" />
                            এর সাথে
                            <br />
                            ঘরে বসেই পা বাড়ান ভবিষ্যতের পথে!</h2>
                        <p className='text-white hero-text-sub'>সরাসরি ইন্সট্রাক্টর এর সাথে লাইভ ক্লাসের মাধ্যমে শিখে নিন ক্যারিয়ার ভিত্তিক ভবিষ্যৎ এর সব স্কিল</p>
                        <Link to='/courses'><button className='see-details-fade px-5 py-3 text-black fw-bold fs-6'>কোর্স সমূহ</button></Link>
                    </div>

                    {/* <div data-aos='zoom-in' className="col-xl-8 col-lg-7 col-md-6 p-2">
                        <HeroSlider />
                    </div> */}

                    <div className="col-xl-4 col-lg-5 col-md-6 hero-demo-container p-2">
                        <DemoClass course={courseData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;