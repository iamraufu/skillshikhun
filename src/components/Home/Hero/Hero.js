import React from 'react';
import './Hero.css';
import "aos/dist/aos.css";
import HeroSlider from './HeroSlider';
import callWhitePhoto from '../../../images/call_white.svg'

const Hero = () => {

    return (
        <div
            // style={{ marginTop: '8vh' }} 
            className='hero-container'>
            <div className="container">
                <div className="row p-2">
                    <h2 className='text-white hero-text mt-3 text-center mt-4'>স্কিল শিখুন এর হাত ধরে শিখুন ঘরে বসে আয় করার মাধ্যম!</h2>
                    <p className='text-white hero-text-sub text-center'>সাশ্রয়ী মূল্যে ঘরে বসে লাইভ ক্লাস করুন ইন্সট্রাক্টর এর সাথে!</p>

                    <a style={{ border: '1px solid lightgrey', borderRadius: '5px', maxWidth: '400px' }} href="tel:09613823645" className='text-decoration-none text-white text-center mb-5 p-2 mx-auto d-block row'>
                        কোর্স সম্পর্কিত যেকোনো তথ্যের জন্য কল করুন <button className='btn-hero-call btn btn-dark btn-sm py-2 text-white fs-6'><img width={25} className='img-fluid' src={callWhitePhoto} alt="call us" /> 09613823645</button></a>

                    <div className="col-xl-12 px-2 pb-5">
                        <HeroSlider />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;