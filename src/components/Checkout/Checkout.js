import React, { useEffect, useState } from 'react';
import './Checkout.css';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Shared/Navbar/Navbar';
import courseData from '../../data/course/courseData.js';
// import bkash from '../../images/bkash.jpg';
// import payment_medium from '../../images/payment-medium.jpg';
import CourseReview from '../Course/CourseReview';
// import Payment from '../Payment/Payment';
// import tick from '../../images/tick.svg';
import untick from '../../images/untick.svg';
import checkbox from '../../images/checkbox.svg';
// import Footer from '../Shared/Footer/Footer';
// import AwesomeSlider from 'react-awesome-slider';
import load from '../../images/load.gif';
import Typewriter from 'typewriter-effect';

const Checkout = () => {

    let navigate = useNavigate();

    const { courseId } = useParams();
    const course = courseData.filter(course => course.id === courseId);
    const [price, setPrice] = useState(1250);
    const [remainingPrice, setRemainingPrice] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const phone = localStorage.getItem('phone');
    const name = JSON.parse(localStorage.getItem('name'));
    const [userPhoneData, setUserPhoneData] = useState({})
    // const [paymentGateway, setPaymentGateway] = useState([]);

    const [payments, setPayments] = useState([]);

    useEffect(() => {
        fetch(`https://skillshikhun.herokuapp.com/users/phone/${phone}`)
            .then(res => res.json())
            .then(data => setUserPhoneData(data))
    }, [phone])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://skillshikhun.herokuapp.com/api/get-payments/${phone}`);
            const data = await res.json();
            setPayments(data);
        }
        fetchData();
    }, [phone])

    payments.map(paid => paid.course).find(paid => paid === course[0].name) && navigate('/dashboard');

    const handleSubscriptionStyle = (type) => {

        if (type === 'full') {
            document.getElementById('full_tick').style.display = 'block';
            document.getElementById('full_untick').style.display = 'none';
            document.getElementById('monthly_tick').style.display = 'none';
            document.getElementById('monthly_untick').style.display = 'block';
            document.getElementById('full').style.border = "1px solid green";
            document.getElementById('full').style.backgroundColor = "#f0f7ff";
            document.getElementById('monthly').style.border = "1px solid #dde7f3";
            document.getElementById('monthly').style.backgroundColor = "transparent";
            setPrice(course[0].offer_price);
            setDisabled(false);
        }
        else {
            document.getElementById('monthly_tick').style.display = 'block';
            document.getElementById('monthly_untick').style.display = 'none';
            document.getElementById('full_untick').style.display = 'block';
            document.getElementById('full_tick').style.display = 'none';
            document.getElementById('full').style.border = "1px solid #dde7f3";
            document.getElementById('full').style.backgroundColor = "transparent";
            document.getElementById('monthly').style.border = "1px solid green";
            document.getElementById('monthly').style.backgroundColor = "#f0f7ff";
            setPrice(course[0].price_per_month);
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


    useEffect(() => {
        if (price === 1250) {
            setRemainingPrice(course[0].price - price);
        }
        else {
            setRemainingPrice(course[0].offer_price - price);
        }
    }, [course, price])

    const proceedToPayment = async () => {
        setDisabled(true);

        document.getElementById('checkout_container').style.display = 'none';
        // document.getElementById('payment_proceed').innerText = '????????????????????? ????????????!'
        document.getElementById('loading_spinner').style.display = 'block';

        var timeLeft = 10;
        var downloadTimer = setInterval(function () {
            if (timeLeft <= 0) {
                clearInterval(downloadTimer);
            }
            document.getElementById("progressBar").value = 10 - timeLeft;
            timeLeft -= 1;
        }, 1000);

        // Aamar Pay Payment Gateway
        // await fetch('https://sandbox.aamarpay.com/jsonpost.php', {
        await fetch('https://secure.aamarpay.com/jsonpost.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: JSON.stringify({
                store_id: "skillshikhun",
                // store_id: "aamarpaytest",
                signature_key: "7445cc98363b6b9cae4af766ef0f0186",
                // signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
                cus_name: `${userPhoneData.name}`,
                cus_email: `${userPhoneData.email}`,
                cus_phone: `${userPhoneData.phone}`,
                cus_add1: "Skill Shikhun, Dhaka, Bangladesh",
                cus_add2: "Dhaka",
                cus_city: "Dhaka",
                cus_country: "Bangladesh",
                amount: `${price}`,
                // amount: 1,
                tran_id: `SkillShikhun_${Math.floor(Math.random() * 900000 + 100000)}`,
                currency: "BDT",
                success_url: `https://skillshikhun.herokuapp.com/api/make-payment`,
                fail_url: `https://skillshikhun.herokuapp.com/api/payment-failure`,
                cancel_url: `https://www.skillshikhun.com/checkout/${courseId}`,
                desc: `Purchase ${course[0].slug} Course`,
                type: "json",
                opt_a: `${course[0].name}`,
                opt_b: `${course[0].type}`,
                opt_c: `${remainingPrice}`
            })
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data.payment_url);
                // console.log(data.payment_url);
            })
            .catch(err => console.log(err))



        // SSL Payment Gateway
        // fetch('https://skillshikhun.herokuapp.com/ssl-request'
        // ,{
        //     method: 'POST',
        //     headers: { 
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*'
        // },
        // body: JSON.stringify({
        //     name: `${userPhoneData.name}`,
        //     email: `${userPhoneData.email}`,
        //     phone: `${userPhoneData.phone}`,
        //     address: "Skill Shikhun, Dhaka, Bangladesh",
        //     city: "Dhaka",
        //     country: "Bangladesh",
        //     amount: `${price}`,
        //     // amount: '1',
        //     tran_id: `SkillShikhun_${Math.floor(Math.random() * 900000 + 100000)}`,
        //     currency: "BDT",
        //     success_url: `https://skillshikhun.herokuapp.com/api/make-payment`,
        //     fail_url: `https://skillshikhun.herokuapp.com/api/payment-failure`,
        //     cancel_url: `https://www.skillshikhun.com/checkout/${courseId}`,
        //     desc: `Purchase ${course[0].slug} Course`,
        //     type: "json",
        //     opt_a: `${course[0].id}`,
        //     opt_b: `${course[0].type}`,
        //     opt_c: `${remainingPrice}`
        // })
        // }
        // )
        //     .then(res => res.json())
        //     .then(data => window.location.replace(data.url.redirectGatewayURL))
        //     .catch(err => console.log(err))

        // Aamar Pay Gateway
        // await fetch('https://skillshikhun.herokuapp.com/api/aamar-pay')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         // window.location.replace(data.payment_url)
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
                            <h1 style={{ fontSize: '20px', lineHeight: '26px', fontWeight: '400' }} className='fw-bold checkout-title text-center'><span className='text-primary fw-bold'>{name}</span> ?????? ????????????????????? ???????????????</h1>
                            {/* {
                                userPhoneData?.phone ? <h1 style={{ fontSize: '20px', lineHeight: '26px', fontWeight: '400' }} className='fw-bold checkout-title text-center'><span className='text-primary fw-bold'>{userPhoneData?.name}</span> ?????? ????????????????????? ???????????????</h1> :

                                    <h1 style={{ paddingTop: '4rem', fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='text-center'><div className="spinner-grow" role="status">
                                        <span className="visually-hidden"></span>
                                    </div> ????????? ??????????????? ...<span style={{ fontSize: '24px', lineHeight: '36px', color: '#b94a8f', fontWeight: '600' }}></span></h1>
                            } */}
                        </div>

                        <div style={{ borderRadius: '10px', boxShadow: '0 3px 10px 3px rgba(127, 127, 127, 0.2)', height: '180px' }} className="d-flex justify-content-center align-items-center bg-white p-3">
                            <div className="col-sm-6">
                                <img src={course[0].image} style={{ borderRadius: '10px' }} width={400} height={100} className='img-fluid' alt={course[0].slug} loading="lazy" />
                            </div>
                            <div className="ps-3 col-sm-6 text-center">
                                <h2 style={{ fontSize: '16px', lineHeight: '24px', color: '#3f3f3f' }} className='fw-bold'>{course[0].slug}</h2>
                                <h3 style={{ fontSize: '20px', lineHeight: "28px", color: '#3f3f3f' }} className='fw-bold'>&#2547; {course[0].price_per_month_bn}/?????????</h3>
                                <h6><span className='fw-bold'>{course[0].course_duration} ???????????????</span> ??????????????? | ????????????????????? ?????????????????? <span className='fw-bold'>{course[0].course_done}</span> ??????</h6>
                                <h6>??????????????? <span className='fw-bold'>{course[0].next_batch} ????????????</span></h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 subscription-container mt-5">
                        <h2 style={{ fontSize: '20px', lineHeight: '26px', fontWeight: '400' }} className='fw-bold mt-5 text-center'>???????????????????????????????????? ???????????????????????? ????????????</h2>

                        {/* div for choosing subscription mode */}
                        {/* 
                        <div style={{ borderRadius: '10px', boxShadow: '0 5.44687px 20.4258px #0000000d' }} className="bg-white p-3 subscription-choose">
                            <div className="checkout-modes">

                                <button style={{ border: '1px solid green', backgroundColor: '#f0f7ff' }} onClick={() => handleSubscriptionStyle('monthly')} id='monthly' className='subscription-btn'>
                                    <div className="p-2 d-flex justify-content-center align-items-center">
                                        <div className="col-xl-2 col-sm-2 pb-3">
                                            <i id='monthly_untick' style={{ display: "none" }}><img src={untick} width={20} className='img-fluid' alt="untick svg" /></i>
                                            <i id='monthly_tick'><img src={checkbox} width={25} className='img-fluid' alt="tick svg" /></i>
                                        </div>
                                        <div className="col-xl-7 col-sm-7">
                                            <h3 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: 'bold' }}>{course[0].next_batch} ??????????????? ??????</h3>
                                            <p style={{ fontSize: '14px', lineHeight: '24px' }}>??????????????? ???????????????????????? ????????????????????? ??????</p>
                                        </div>
                                        <div className="col-xl-3 col-sm-3">
                                            <h4 style={{ fontSize: '18px', lineHeight: "30px", color: '#3f3f3f', textAlign: 'right', fontWeight: 'bold' }}>&#2547; {course[0].offer_price_per_month}</h4>
                                        </div>
                                    </div>

                                </button>

                            </div>

                            <div className="checkout-modes">

                                <button onClick={() => handleSubscriptionStyle('full')} id='full' className='subscription-btn mt-3'>
                                    <div className="p-2 d-flex justify-content-center">
                                        <div className="col-xl-2 col-sm-1 pt-3">
                                            <i id='full_untick'><img src={untick} width={20} className='img-fluid' alt="untick svg" /></i>
                                            <i id='full_tick' style={{ display: 'none' }}><img src={checkbox} width={25} className='img-fluid' alt="tick svg" /></i>
                                        </div>
                                        <div className="col-xl-7 col-sm-7">
                                            <h3 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: 'bold' }}>{course[0].course_duration} ??????????????? ??????</h3>
                                            <p style={{ fontSize: '14px', lineHeight: '24px' }}>?????????????????? {course[0].next_batch} ????????? ?????? {course[0].course_duration} ??????????????? ??????</p>
                                        </div>
                                        <div className="col-xl-3 col-sm-4">
                                            <h4 style={{ fontSize: '18px', lineHeight: "30px", color: '#3f3f3f', textAlign: 'right', fontWeight: '700' }}>&#2547; {course[0].offer_price} <br /><span className='text-success fw-bold fs-6'>????????? ?????????????????? &#2547; {course[0].price_saved}</span></h4>
                                        </div>
                                    </div>
                                </button>

                            </div>
                        </div> 
                        */}
                        {/* <p id='subscription_mode_warning' className="text-danger mt-3 fw-bold ms-2">* ???????????????????????????????????? ????????? ???????????????????????? ????????????</p> */}

                        <div className="row course-fee-container">
                            <button style={{ border: '1px solid green', backgroundColor: '#f0f7ff' }} onClick={() => handleSubscriptionStyle('monthly')} id='monthly' className='d-flex p-2 justify-content-around align-items-center subscription-btn'>
                                <div className="col-sm-2">
                                    <img id='monthly_tick' src={checkbox} width={25} className='img-fluid' alt="tick svg" />
                                    <img id='monthly_untick' src={untick} style={{ display: 'none' }} width={20} className='img-fluid' alt="untick svg" />
                                </div>

                                <div className="col-sm-7">
                                    <h3 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'bold' }}>{course[0].next_batch} ??????????????? ??????</h3>
                                    <p style={{ fontSize: '14px', lineHeight: '22px' }}>??????????????? ???????????????????????? ????????????????????? ??????</p>
                                </div>

                                <div style={{ textAlign: 'right' }} className="col-sm-3">
                                    <h4 style={{ fontSize: '16px', lineHeight: "24px", color: '#3f3f3f', fontWeight: 'bold' }}>&#2547; {course[0].price_per_month_bn}</h4>
                                </div>

                            </button>

                            <button onClick={() => handleSubscriptionStyle('full')} id='full' className='d-flex p-2 justify-content-around align-items-center mt-2 subscription-btn'>

                                <div className="col-sm-2">
                                    <img id='full_tick' src={checkbox} style={{ display: 'none' }} width={25} className='img-fluid' alt="tick svg" />
                                    <img id='full_untick' src={untick} width={20} className='img-fluid' alt="untick svg" />
                                </div>

                                <div className="col-sm-7">
                                    <h3 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'bold' }}>{course[0].course_duration} ??????????????? ??????</h3>
                                    <p style={{ fontSize: '14px', lineHeight: '22px' }}>?????????????????? {course[0].next_batch} ????????? ?????? {course[0].course_duration} ??????????????? ??????</p>
                                </div>

                                <div style={{ textAlign: 'right' }} className="col-sm-3">
                                    <h4 style={{ fontSize: '16px', lineHeight: "24px", color: '#3f3f3f', fontWeight: 'bold' }}>&#2547; {course[0].offer_price_bn}</h4>
                                    <small className='text-success fw-bold'>????????? ?????????????????? &#2547; {course[0].price_saved}</small>
                                </div>

                            </button>

                        </div>

                    </div>

                </div>

                <div className="row">

                    <div className="d-none d-lg-block d-xl-block col-lg-6 checkout_course_review_container">
                        <CourseReview course={course[0]} />
                    </div>

                    <div className="col-lg-6">
                        {/* <h2 style={{ fontSize: '22px', lineHeight:'26px', fontWeight: '400' }} className='fw-bold mt-4 text-center'>????????????????????? ???????????? ???????????????????????? ????????????</h2> */}

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
                        <p style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'bold' }} className='text-center mt-4 d-block d-none d-lg-block'><FontAwesomeIcon className='text-success' icon={faUserShield} /> ?????????????????? ??? ??????????????? ????????????????????? ????????????????????????</p>

                        <button
                            onClick={() => proceedToPayment()}
                            id='payment_proceed'
                            className='btn-buy mx-auto d-block d-none d-lg-block' disabled={disabled}>?????? ?????????????????? ????????????</button>

                    </div>

                    <div className="d-lg-none col-lg-6 checkout_course_review_container">
                        <CourseReview course={course[0]} />
                    </div>

                </div>
            </div>

            <div id='loading_spinner' className='container-fluid' style={{ display: 'none', paddingTop: '5rem', margin: 'auto' }}>
                <img src={load} className='mx-auto d-block' width={250} alt="Redirecting to Payment Gateway" />
                <div className="d-flex justify-content-center">
                    <Typewriter
                        options={{
                            strings: ['????????????????????? ????????? ???????????? ????????????????????? ????????????????????? ???????????? ', '?????????????????? ?????????????????? ?????????????????? ????????????????????? ???????????????????????? ???????????? ??????????????? ???????????????'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    {/* <h1 style={{ fontSize: '16px', lineHeight: '24px', color: '#3f3f3f' }} className='fw-bold text-center me-2 mt-2'>????????????????????? ????????????</h1> */}
                    <progress value="0" max="10" id="progressBar" className=''></progress>
                </div>
            </div>

            {/* visible on smaller screen */}
            <div style={{ boxShadow: '0 3px 10px 3px #0003' }} className="container-fluid d-lg-none fixed-bottom bg-white">
                <p style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'bold' }} className='text-center mt-4'><FontAwesomeIcon className='text-success' icon={faUserShield} /> ?????????????????? ??? ??????????????? ????????????????????? ????????????????????????</p>
                <button style={{ height: '60px', backgroundImage: 'linear-gradient(to right , #13338b , #b94a8f)', margin: '10px 0' }}
                    onClick={() => proceedToPayment()}
                    id='payment_proceed'
                    className='btn-buy mx-auto d-block mx-auto d-block fw-bold fs-5' disabled={disabled}>?????? ?????????????????? ????????????</button>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Checkout;