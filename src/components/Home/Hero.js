import React from 'react';
import './Hero.css';
import logoText from '../../images/logoText.png';
import landingFront from '../../images/landing-front.png';
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
                    <div data-aos='zoom-in' className="col-xl-8 col-lg-7 col-md-6">
                        <img src={landingFront} className='img-fluid hero-image mt-5' alt="free webinar" loading="lazy" />
                        <h2 className='text-white hero-text'>
                            <img src={logoText} width={150} className='img-fluid pe-2' alt="logo text" loading="lazy" />
                            এর সাথে
                            <br />
                            ঘরে বসেই পা বাড়ান ভবিষ্যতের পথে!</h2>
                        <p className='text-white hero-text-sub'>সরাসরি ইন্সট্রাক্টর এর সাথে লাইভ ক্লাসের মাধ্যমে শিখে নিন ক্যারিয়ার ভিত্তিক ভবিষ্যৎ এর সব স্কিল</p>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 hero-demo-container">
                        <DemoClass course={courseData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;