import React from 'react';
import './Hero.css';
import logoText from '../../images/logoText.png';
// import underline from '../../images/underline.png';
// import heroFront from '../../images/hero-front.png';
import landingFront from '../../images/landing-front.svg';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";

const Hero = () => {

    AOS.init({duration : 1000})

    return (
        <div style={{ marginTop: '8vh' }} className='hero-container'>
            <div className="container">
                <div className="row">
                    <div data-aos='zoom-in' className="col-sm-4 col-md-6">
                        <img src={landingFront} className='img-fluid hero-image mt-5' alt="free webinar" loading="lazy" />
                    </div>
                    <div className="col-sm-8 col-md-6">
                        <h2 className='text-white hero-text'>
                            {/* <span style={{ color: '#b94a8f' }}>স্কিল শিখুন</span>  */}
                            <img src={logoText} width={200} className='img-fluid pe-2' alt="logo text" loading="lazy" />
                            এর সাথে 
                            <br />
                            ঘরে বসেই পা বাড়ান ভবিষ্যতের পথে!</h2>
                            {/* <img src={underline} style={{marginTop:'-6rem',marginLeft:'4.8rem'}}  className='img-fluid underline' alt="underline" loading="lazy"/> */}
                        <p className='text-white hero-text-sub'>সরাসরি ইন্সট্রাক্টর এর সাথে লাইভ ক্লাসের মাধ্যমে শিখে নিন ক্যারিয়ার ভিত্তিক ভবিষ্যৎ এর সব স্কিল</p>
                        {/* <Link to='/demo-class'><button className='hero-demo-btn'>ফ্রি ডেমো ক্লাস</button></Link> */}
                        {/* <button className='hero-app'>অ্যাপ ডাউনলােড করাে</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;