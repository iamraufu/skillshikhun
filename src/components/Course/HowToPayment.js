import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import payment from '../../images/dashboard/payment.svg';

const HowToPayment = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <div style={{ backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ececec' }} className="payment-video-container container mt-5">
            <h2 style={{ color: '#343b6d', fontSize: '22px' }} className='fw-bold text-center my-3'><img src={payment} width={30} className='img-fluid pb-2' alt="" /> পেমেন্ট করার পদ্ধতি</h2>
            <p className='my-3'>কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে <span className='text-success' style={{cursor:'pointer'}} onClick={()=> setOpen(true)}>এই ভিডিও দেখুন</span></p>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId='cTQWH9wfQV0' onClose={() => setOpen(false)} />
        </div>
    );
};

export default HowToPayment;