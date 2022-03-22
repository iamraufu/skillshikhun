import React from 'react';
import webinar from '../../images/webinar.png';

const Hero = () => {
    return (
        <div style={{ marginTop: '10vh',backgroundColor: '#653dae'}} className=''>
            <div className="container d-flex">
                    <div className="col-md-6">
                        <img src={webinar} className='img-fluid' alt="free webinar" />
                    </div>
                    <div className="col-md-6">
                        <h2 className='text-white mt-5'>সরাসরি ইন্সট্রাক্টর এর সাথে লাইভ ক্লাসের মাধ্যমে শিখে নিন
                            ভবিষ্যৎ এর সব স্কিল।</h2>
                    </div>
            </div>
        </div>
    );
};

export default Hero;