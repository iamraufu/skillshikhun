import React from 'react';
import './Hero.css';
// import logoText from '../../../images/logoText.png';
// import landingFront from '../../../images/landing-front.png';
import AOS from 'aos';
import "aos/dist/aos.css";
// import DemoClass from '../../DemoClass/DemoClass';
// import courseData from '../../../data/course/courseData';
// import { Link } from 'react-router-dom';
import call_white from '../../../images/call_white.svg'
import HeroSlider from './HeroSlider';

const Hero = () => {

    AOS.init({ duration: 1000 })

    return (
        <div
            // style={{ marginTop: '8vh' }} 
            className='hero-container'>
            <div className="container">
                <div className="row p-2">
                    <h2 className='text-white hero-text mt-3 text-center mt-5'> স্কিল শিখুন এর হাত ধরে শিখুন ঘরে বসে আয় করার মাধ্যম!</h2>
                    <p className='text-white hero-text-sub text-center'>সাশ্রয়ী মূল্যে ঘরে বসে লাইভ ক্লাস করুন ইন্সট্রাক্টর এর সাথে!</p>
                    
                    <a style={{border:'1px solid lightgrey', borderRadius:'5px', maxWidth:'400px'}} href="tel:09613823645" className='text-decoration-none text-white text-center mb-5 p-2 mx-auto d-block row'>
                        কোর্স সম্পর্কিত যেকোনো তথ্যের জন্য কল করুন <button className='btn-hero-call btn btn-dark btn-sm py-2 text-white fs-6'><img width={25} className='img-fluid' src={call_white} alt="" /> 09613823645</button></a>

                    {/* <div data-aos='zoom-in' className="col-xl-8 col-lg-7 col-md-6">
                        <img src={landingFront} className='img-fluid hero-image mt-5' alt="free webinar" loading="lazy" />
                        <h2 className='text-white hero-text'>
                            <img src={logoText} width={150} className='img-fluid pe-2' alt="logo text" loading="lazy" />
                            এর সাথে
                            <br />
                            ঘরে বসেই পা বাড়ান ভবিষ্যতের পথে!</h2>
                        <p className='text-white hero-text-sub'>সরাসরি ইন্সট্রাক্টর এর সাথে লাইভ ক্লাসের মাধ্যমে শিখে নিন ক্যারিয়ার ভিত্তিক ভবিষ্যৎ এর সব স্কিল</p>
                        <Link to='/courses'><button className='see-details-fade px-5 py-3 text-black fw-bold fs-6'>কোর্স সমূহ</button></Link>
                    </div> */}

                    <div 
                    // data-aos='zoom-in' 
                    className="col-xl-12 px-2 pb-5">
                        <HeroSlider />
                    </div>

                    {/* <div className="col-xl-4 col-lg-5 col-md-6 hero-demo-container p-2 mx-auto d-block pb-5">
                        <DemoClass course={courseData} />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;