import React from 'react';
import fb from '../../images/facebook.svg'

const CourseGroup = ({course}) => {
    console.log(course);
    return (
        <div style={{ backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ececec' }} className='my-5'>
            <h2 style={{ color: '#343b6d', fontSize: '22px' }} className='fw-bold text-center my-3'><img src={fb} width={20} className='img-fluid pb-2' alt="" /> কমিউনিটি</h2>
            <p className='ps-4'>কমিউনিটি -এর সাথে কানেক্টেড থাকতে এবং আপডেট পেতে</p>
            <a href={course.facebook_group} target='blank'><button className='btn btn-sm btn-primary mx-auto d-block my-3 px-5 py-2'>ফেসবুক গ্রুপ এ জয়েন করুন</button></a>
        </div>
    );
};

export default CourseGroup;