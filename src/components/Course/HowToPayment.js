import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

const HowToPayment = (props) => {

    const course = props.course;

    const [isOpen, setOpen] = useState(false);

    return (
        <div style={{ backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ececec' }} className="payment-video-container container mt-5">
            <h2 style={{ color: '#343b6d', fontSize: '22px' }} className='fw-bold text-center my-3'>পেমেন্ট করার পদ্ধতি</h2>
            <p className='my-3'>কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে <span className='text-success' style={{cursor:'pointer'}} onClick={()=> setOpen(true)}>এই ভিডিও দেখুন</span></p>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={course.videoId} onClose={() => setOpen(false)} />
        </div>
    );
};

export default HowToPayment;