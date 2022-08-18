import React from 'react';
import FRI500 from '../../images/promo/FRI500.png';
import promo_sm from '../../images/promo/promo_sm.png';

const PromoImages = () => {
    return (
        <>
            <img className='img-fluid d-none d-lg-block' src={FRI500} alt="Buy Now" />
            <img className='img-fluid d-lg-none' src={promo_sm} alt="Buy Now" />
        </>
    );
};

export default PromoImages;