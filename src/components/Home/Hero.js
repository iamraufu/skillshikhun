import React from 'react';
import './Hero.css';
import webinar from '../../images/webinar.png';

const Hero = () => {
    return (
        <div style={{ marginTop: '10vh', backgroundColor: '#653dae' }} className=''>
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <img src={webinar} className='img-fluid hero-image' alt="free webinar" loading="lazy" />
                </div>
                <div className="col-md-6">
                    <h2 className='text-white hero-text'><span style={{color:'#b94a8f'}}>স্কিল শিখুন</span> এর সাথে আপনার ক্যারিয়ারের সুযোগগুলি প্রসারিত করুন !</h2>
                    <p className='text-white hero-text-sub'>সরাসরি ইন্সট্রাক্টর এর সাথে লাইভ ক্লাসের মাধ্যমে শিখে নিন ভবিষ্যৎ এর সব স্কিল</p>
                    <button className='hero-demo-btn'>ফ্রি ডেমো ক্লাস</button>
                    {/* <button className='hero-app'>অ্যাপ ডাউনলােড করাে</button> */}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;