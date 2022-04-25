import React from 'react';
import './Hero.css';
import logoText from '../../images/logoText.png';
// import underline from '../../images/underline.png';
// import heroFront from '../../images/hero-front.png';
import landingFront from '../../images/landing-front.png';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
import DemoClass from '../DemoClass/DemoClass';
import courseData from '../../data/course/courseData';

const Hero = () => {

    AOS.init({ duration: 1000 })

    return (
        <div style={{ marginTop: '8vh' }} className='hero-container'>
            <div className="container">
                <div className="row">
                    <div data-aos='zoom-in' className="col-sm-4 col-md-6">
                        <img src={landingFront} className='img-fluid hero-image mt-5' alt="free webinar" loading="lazy" />
                        <h2 className='text-white hero-text'>
                            <img src={logoText} width={200} className='img-fluid pe-2' alt="logo text" loading="lazy" />
                            এর সাথে
                            <br />
                            ঘরে বসেই পা বাড়ান ভবিষ্যতের পথে!</h2>
                        <p className='text-white hero-text-sub'>সরাসরি ইন্সট্রাক্টর এর সাথে লাইভ ক্লাসের মাধ্যমে শিখে নিন ক্যারিয়ার ভিত্তিক ভবিষ্যৎ এর সব স্কিল</p>
                    </div>
                    <div className="col-sm-8 col-md-6 mt-5">
                        <DemoClass course={courseData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;