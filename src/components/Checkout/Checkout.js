import React, { useEffect, useState } from 'react';
import './Checkout.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
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
    const [disabled, setDisabled] = useState(true);

    const phone = localStorage.getItem('phone');
    const [userPhoneData, setUserPhoneData] = useState({})

    useEffect(() => {
        fetch(`https://skillshikhun.herokuapp.com/users/phone/${phone}`)
            .then(res => res.json())
            .then(data => setUserPhoneData(data))
    }, [phone])

    const handleSubscriptionStyle = (type) => {
        if (type === 'full') {
            document.getElementById('full').style.border = "1px solid green";
            document.getElementById('full').style.backgroundColor = "#f0f7ff";
            document.getElementById('monthly').style.border = "1px solid #dde7f3";
            document.getElementById('monthly').style.backgroundColor = "transparent";
            document.getElementById('subscription_mode_warning').style.display = "none";
            setPrice(course[0].offer_price_eng);
            setDisabled(false);
        }
        else {
            document.getElementById('full').style.border = "1px solid #dde7f3";
            document.getElementById('full').style.backgroundColor = "transparent";
            document.getElementById('monthly').style.border = "1px solid green";
            document.getElementById('monthly').style.backgroundColor = "#f0f7ff";
            document.getElementById('subscription_mode_warning').style.display = "none";
            setPrice(course[0].offer_price_per_month_eng);
            setDisabled(false);
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



    const proceedToPayment = async () => {

        setDisabled(true);

        document.getElementById('payment_proceed').innerText = 'অপেক্ষা করুন!'
        document.getElementById('checkout_container').style.display = 'none';
        document.getElementById('checkout_container').style.filter = 'blur(3px)';
        document.getElementById('loading_spinner').style.display = 'block';

        var timeleft = 10;
        var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
        clearInterval(downloadTimer);
        }     
        document.getElementById("progressBar").value = 10 - timeleft;
        timeleft -= 1;
        }, 1000);

        // Aamar Pay Payment Gateway
        await fetch('https://secure.aamarpay.com/jsonpost.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: JSON.stringify({
                store_id: "skillshikhun",
                signature_key: "7445cc98363b6b9cae4af766ef0f0186",
                cus_name: `${userPhoneData.name}`,
                cus_email: `hr@skillshikhun.com`,
                cus_phone: `${userPhoneData.phone}`,
                cus_add1: "Skill Shikhun, Dhaka, Bangladesh",
                cus_add2: "Dhaka",
                cus_city: "Dhaka",
                cus_country: "Bangladesh",
                amount: `${price}`,
                tran_id: `SkillShikhun_${Math.floor(Math.random() * 900000 + 100000)}`,
                currency: "BDT",
                success_url: "http://localhost:3000/success",
                fail_url: "http://localhost:3000/fail",
                cancel_url: "http://localhost:3000/cancel",
                desc: `Purchase ${course[0].slug} Course`,
                type: "json"
            })
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data.payment_url)
            })

        // SSL Payment Gateway
        // await fetch('https://skillshikhun.herokuapp.com/ssl-request'
        // ,{
        //     method: 'GET',
        //     headers: { 
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*'
        // },
        // }
        // )
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err))

        // Aamar Pay Gateway
        // await fetch('https://skillshikhun.herokuapp.com/api/aamar-pay')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         window.location.replace(data.payment_url)
        //     }
        //     )
        //     .catch(err => console.log(err))
    }

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'rgb(243, 245, 249)' }}>
            <Navbar />
            <div id='checkout_container' className="container py-4 checkout-container">
                <div className="row">

                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="checkout-title-container">
                        {
                            userPhoneData?.phone ? <h1 className='fw-bold checkout-title text-center'><span className='text-primary fw-bold'>{userPhoneData?.name}</span> যে কোর্সটি কিনছেন</h1> : null
                        }
                        </div>

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
                        <h2 style={{ fontSize: '22px', lineHeight: '26px', fontWeight: '400' }} className='fw-bold mt-5 text-center'>সাবস্ক্রিপশন নির্বাচন করুন</h2>

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
                        <p id='subscription_mode_warning' className="text-danger mt-3 fw-bold ms-2">* সাবস্ক্রিপশন মোড নির্বাচন করুন</p>
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
                        <p style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'bold' }} className='text-center mt-4'><FontAwesomeIcon icon={faUserShield} /> সম্পূর্ণ নিরাপদ পেমেন্ট নিশ্চয়তা</p>

                        <button
                            onClick={() => proceedToPayment()}
                            id='payment_proceed'
                            className='btn-buy mx-auto d-block mx-auto d-block' disabled={disabled}>এগিয়ে যান</button>

                    </div>

                    <div className="d-lg-none col-lg-6 checkout_course_review_container">
                        <CourseReview course={course[0]} />
                    </div>

                </div>
            </div>

            <div id='loading_spinner' className='container-fluid d-flex justify-content-center align-items-center' style={{display:'none', paddingTop:'15rem', margin:'auto', width:'50%'}}
            // style={{ display: 'none', position: 'absolute', height: '50px', width: '100px', top: '50%', left: '50%', marginLeft: '-50px', marginTop: '-50px' }}
            >
                <h1 style={{ fontSize: '16px', lineHeight: '24px', color: '#3f3f3f'
                // , marginLeft: '-1.5rem' 
                }} className='fw-bold text-center me-2 mt-2'>অপেক্ষা করুন</h1>
                {/* <div className="spinner-grow" role="status">
                    <span className="sr-only"></span>
                </div> */}
                <progress value="0" max="12" id="progressBar" className=''></progress>
            </div>

        </div>
    );
};

export default Checkout;