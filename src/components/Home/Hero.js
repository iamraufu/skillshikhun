import React from 'react';
import webinar from '../../images/webinar.png';

const Hero = () => {
    return (
        <div className='container bg-dark'>
            <img src={webinar} className='img-fluid' alt="free webinar" />
        </div>
    );
};

export default Hero;