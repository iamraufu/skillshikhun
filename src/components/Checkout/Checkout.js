import React from 'react';
import './Checkout.css';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import courseData from '../../data/course/courseData.js';
import bkash from '../../images/bkash.jpg';
import payment_medium from '../../images/payment-medium.jpg';
import CourseReview from '../Course/CourseReview';

const Checkout = () => {

    const { courseId } = useParams();
    const course = courseData.filter(course => course.id === courseId);

    const handleSubscription = (type) => {
        if (type === 'full') {
            document.getElementById('full').style.border = "1px solid green";
            document.getElementById('monthly').style.border = "1px solid #dde7f3";
        }
        else {
            document.getElementById('full').style.border = "1px solid #dde7f3";
            document.getElementById('monthly').style.border = "1px solid green";
        }
    }

    const handlePayment = (type) => {
        if (type === 'bkash') {
            document.getElementById('bkash').style.border = "1px solid green";
            document.getElementById('payment_medium').style.border = "1px solid #dde7f3";
        }
        else {
            document.getElementById('bkash').style.border = "1px solid #dde7f3";
            document.getElementById('payment_medium').style.border = "1px solid green";
        }
    }

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'rgb(243, 245, 249)' }}>
            <Navbar />
            <div className="container py-4">
                <div className="row">

                    <div className="col-lg-6">
                        <h1 className='fw-bold checkout-title text-center'>আপনি যে কোর্সটি কিনছেন</h1>

                        <div style={{ borderRadius: '10px', boxShadow: '0 15px 30px #00000005' }} className="row bg-white p-3">
                            <div className="col-sm-6">
                                <img src={course[0].image} style={{ borderRadius: '10px' }} className='img-fluid' alt={course[0].slug} loading="lazy" />
                            </div>
                            <div className="ps-3 mt-2 col-sm-6 text-center">
                                <h2 style={{ fontSize: '16px', lineHeight: '24px', color: '#3f3f3f' }} className='fw-bold'>{course[0].slug}</h2>
                                <h3 style={{ fontSize: '26px', lineHeight: "38px", color: '#3f3f3f' }} className='fw-bold'>&#2547; {course[0].offer_price_per_month}/মাস</h3>
                                <h6><span className='fw-bold'>{course[0].course_duration} মাসের</span> কোর্স | কোর্সটি করেছেন <span className='fw-bold'>{course[0].course_done}</span> জন</h6> 
                                <h6>ব্যাচ <span className='fw-bold'>{course[0].next_batch} ২০২২</span></h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 subscription-container">
                        <h2 style={{ fontSize: '22px', lineHeight:'26px', fontWeight: '400' }} className='fw-bold mt-5 text-center'>সাবস্ক্রিপশন নির্বাচন করুন</h2>

                        {/* div for choosing subscription mode */}
                        <div style={{ borderRadius: '10px', boxShadow: '0 5.44687px 20.4258px #0000000d' }} className="bg-white p-3">
                            <div className="checkout-modes">
                                <button id='monthly' className='subscription-btn'>
                                    <div onClick={() => handleSubscription('monthly')} className="p-3 d-flex justify-content-center">
                                        <div className="col-sm-8">
                                            <h3 style={{ fontSize: '18px', lineHeight: '28px', fontWeight: 'bold' }}>{course[0].next_batch} মাসের ফি</h3>
                                            <p style={{ fontSize: '16px', lineHeight: '28px' }}>মাসিক ভিত্তিতে একমাসের ফি পরিশোধ</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <h4 style={{ fontSize: '22px', lineHeight: "34px", color: '#3f3f3f', textAlign: 'right' }}>&#2547; {course[0].offer_price_per_month}</h4>
                                        </div>
                                    </div>
                                </button>
                            </div>

                            <div className="checkout-modes">
                                <button id='full' className='subscription-btn mt-3'>
                                    <div onClick={() => handleSubscription('full')} className="mt-3 p-3 d-flex justify-content-center">
                                        <div className="col-sm-8">
                                            <h3 style={{ fontSize: '18px', lineHeight: '28px', fontWeight: 'bold' }}>{course[0].course_duration} মাসের ফি</h3>
                                            <p style={{ fontSize: '16px', lineHeight: '28px' }}>একত্রে {course[0].next_batch} মাস সহ {course[0].course_duration} মাসের ফি পরিশোধ</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <h4 style={{ fontSize: '22px', lineHeight: "34px", color: '#3f3f3f', textAlign: 'right' }}>&#2547; {course[0].offer_price}</h4>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-md-6">
                        <CourseReview course={course[0]} />
                    </div> */}

                </div>

                <div className="row">

                    <div className="d-none d-lg-block d-xl-block col-lg-6 checkout_course_review_container">
                        <CourseReview course={course[0]} />
                    </div>

                    <div className="col-lg-6">
                        <h2 style={{ fontSize: '22px', lineHeight:'26px', fontWeight: '400' }} className='fw-bold mt-5 text-center'>পেমেন্ট মেথড নির্বাচন করুন</h2>

                        {/* div for choosing payment mode */}
                        <div style={{ borderRadius: '10px', boxShadow: '0 5.44687px 20.4258px #0000000d' }} className="bg-white p-3">
                            <div className="checkout-modes">
                                <button id='bkash' className='subscription-btn'>
                                    <div onClick={() => handlePayment('bkash')} className="p-3 d-flex">
                                        <img src={bkash} alt="Pay With Bkash" width={300} className='img-fluid mx-auto d-block' />
                                    </div>
                                </button>
                            </div>

                            <div className="checkout-modes">
                                <button id='payment_medium' className='subscription-btn mt-3'>
                                    <div onClick={() => handlePayment('aamarpay')} className="mt-3 p-3 d-flex">
                                        <img src={payment_medium} alt="Pay with other medium" width={300} className='img-fluid mx-auto d-block' />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <p style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'bold' }} className='text-center mt-3'>সম্পূর্ণ নিরাপদ পেমেন্ট নিশ্চয়তা</p>
                        <button className='btn-buy mx-auto d-block mx-auto d-block'>এগিয়ে যান</button>
                    </div>

                    <div className="d-lg-none col-lg-6 checkout_course_review_container">
                        <CourseReview course={course[0]} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;