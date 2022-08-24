import React from 'react';
// import FRI500 from '../../images/promo/FRI500.png';
import skill999 from '../../images/promo/skill999.png';
// import promo_sm from '../../images/promo/promo_sm.png';
import skill999_sm from '../../images/promo/skill999_sm.png';

const PromoImages = () => {
    return (
        <>
            <img className='img-fluid d-none d-lg-block' src={skill999} alt="Buy Now" />
            <img className='img-fluid d-lg-none' src={skill999_sm} alt="Buy Now" />
        </>
    );
};

export default PromoImages;