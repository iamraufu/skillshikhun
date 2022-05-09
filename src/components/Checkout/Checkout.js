import React, { useEffect, useState } from 'react';
import './Checkout.css';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import courseData from '../../data/course/courseData.js';
// import bkash from '../../images/bkash.jpg';
// import payment_medium from '../../images/payment-medium.jpg';
import CourseReview from '../Course/CourseReview';
// import Payment from '../Payment/Payment';

const Checkout = () => {

    const { courseId } = useParams();
    const course = courseData.filter(course => course.id === courseId);
    const [price, setPrice] = useState(0);
    const [payment_url, setPayment_url] = useState('');
    const [tran_id, setTran_id] = useState("");

    const handleSubscriptionStyle = (type) => {
        if (type === 'full') {
            document.getElementById('full').style.border = "1px solid green";
            document.getElementById('full').style.backgroundColor = "#f0f7ff";
            document.getElementById('monthly').style.border = "1px solid #dde7f3";
            document.getElementById('monthly').style.backgroundColor = "transparent";
            setPrice(course[0].offer_price_eng);
        }
        else {
            document.getElementById('full').style.border = "1px solid #dde7f3";
            document.getElementById('full').style.backgroundColor = "transparent";
            document.getElementById('monthly').style.border = "1px solid green";
            document.getElementById('monthly').style.backgroundColor = "#f0f7ff";
            setPrice(course[0].offer_price_per_month_eng);
        }
    }

    // const handlePaymentStyle = (type) => {
    //     if (type === 'bkash') {
    //         document.getElementById('bkash').style.border = "1px solid green";
    //         document.getElementById('bkash').style.backgroundColor = "#f0f7ff";
    //         document.getElementById('payment_medium').style.border = "1px solid #dde7f3";
    //         document.getElementById('payment_medium').style.backgroundColor = "transparent";
    //     }
    //     else {
    //         document.getElementById('bkash').style.border = "1px solid #dde7f3";
    //         document.getElementById('bkash').style.backgroundColor = "transparent";
    //         document.getElementById('payment_medium').style.border = "1px solid green";
    //         document.getElementById('payment_medium').style.backgroundColor = "#f0f7ff";
    //     }
    // }

    const proceedToPayment = () => {
        if (price === 0) {
            document.getElementById('subscription_mode_warning').style.display = "block";
        }
        else {
            document.getElementById('subscription_mode_warning').style.display = "none";
        }

        setTran_id(Math.floor(Math.random() * 9000 + 1000));
        fetch('https://sandbox.aamarpay.com/jsonpost.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                store_id: "aamarpaytest",
                signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
                cus_name: "Imtiaz Akil",
                cus_email: "imtiaz.akil@softbd.com",
                cus_phone: "01870762472",
                cus_add1: "53, Gausul Azam Road, Sector-14, Dhaka, Bangladesh",
                cus_add2: "Dhaka",
                cus_city: "Dhaka",
                cus_country: "Bangladesh",
                amount: {price},
                tran_id: `SkillShikhun_${tran_id}`,
                currency: "BDT",
                success_url: "http://localhost:3000/success",
                fail_url: "http://localhost:3000/fail",
                cancel_url: "http://localhost:3000/cancel",
                desc: "Lend Money",
                type: "json"
            })
        })
            .then(res => res.json())
            .then(async data => await setPayment_url(data.payment_url))
            .catch(err => console.log(err))

        fetch(`https://sandbox.aamarpay.com/paynow.php?track=`+ payment_url)
    }

    useEffect(() => proceedToPayment(), [])


    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'rgb(243, 245, 249)' }}>
            <Navbar />
            <div className="container py-4">
                <div className="row">

                    <div className="col-lg-6 d-none d-lg-block">
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

                    <div className="col-lg-6 subscription-container mt-5">
                        <h2 style={{ fontSize: '22px', lineHeight:'26px', fontWeight: '400' }} className='fw-bold mt-5 text-center'>সাবস্ক্রিপশন নির্বাচন করুন</h2>

                        {/* div for choosing subscription mode */}
                        <div style={{ borderRadius: '10px', boxShadow: '0 5.44687px 20.4258px #0000000d' }} className="bg-white p-3">
                            <div className="checkout-modes">
                                <button id='monthly' className='subscription-btn'>
                                    <div onClick={() => handleSubscriptionStyle('monthly')} className="p-2 d-flex justify-content-center">
                                        <div className="col-sm-8">
                                            <h3 style={{ fontSize: '18px', lineHeight: '28px', fontWeight: 'bold' }}>{course[0].next_batch} মাসের ফি</h3>
                                            <p style={{ fontSize: '16px', lineHeight: '28px' }}>মাসিক ভিত্তিতে একমাসের ফি</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <h4 style={{ fontSize: '22px', lineHeight: "34px", color: '#3f3f3f', textAlign: 'right' }}>&#2547; {course[0].offer_price_per_month}</h4>
                                        </div>
                                    </div>
                                </button>
                            </div>

                            <div className="checkout-modes">
                                <button id='full' className='subscription-btn mt-3'>
                                    <div onClick={() => handleSubscriptionStyle('full')} className="p-2 d-flex justify-content-center">
                                        <div className="col-sm-8">
                                            <h3 style={{ fontSize: '18px', lineHeight: '28px', fontWeight: 'bold' }}>{course[0].course_duration} মাসের ফি</h3>
                                            <p style={{ fontSize: '16px', lineHeight: '28px' }}>একত্রে {course[0].next_batch} মাস সহ {course[0].course_duration} মাসের ফি</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <h4 style={{ fontSize: '22px', lineHeight: "34px", color: '#3f3f3f', textAlign: 'right' }}>&#2547; {course[0].offer_price}</h4>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <p id='subscription_mode_warning' style={{display: 'none' }} className="text-danger mt-3 fw-bold ms-2">*সাবস্ক্রিপশন মোড নির্বাচন করুন</p>
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
                        {/* <h2 style={{ fontSize: '22px', lineHeight:'26px', fontWeight: '400' }} className='fw-bold mt-4 text-center'>পেমেন্ট মেথড নির্বাচন করুন</h2> */}

                        {/* div for choosing payment mode */}
                        {/* <div style={{ borderRadius: '10px', boxShadow: '0 5.44687px 20.4258px #0000000d', height:'200px' }} className="bg-white p-3">
                            <div className="checkout-modes">
                                <button id='bkash' className='subscription-btn'>
                                    <div onClick={() => handlePaymentStyle('bkash')} className="d-flex">
                                        <img src={bkash} alt="Pay With Bkash" width={200} className='img-fluid mx-auto d-block' />
                                    </div>
                                </button>
                            </div>

                            <div className="checkout-modes">
                                <button id='payment_medium' className='subscription-btn mt-3'>
                                    <div onClick={() => handlePaymentStyle('aamarpay')} className="d-flex">
                                        <img src={payment_medium} alt="Pay with other medium" width={150} className='p-2 img-fluid mx-auto d-block' />
                                    </div>
                                </button>
                            </div>
                        </div> */}
                        <p style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'bold' }} className='text-center mt-5'>সম্পূর্ণ নিরাপদ পেমেন্ট নিশ্চয়তা</p>
                        <button onClick={proceedToPayment} className='btn-buy mx-auto d-block mx-auto d-block'>এগিয়ে যান</button>
                        
                        {/* Payment Gateway */}
                        <p>Price: {price}</p>
                        {/* <Payment /> */}
                        <p>Payment Url: {payment_url.payment_url}</p>

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