// import React, { useState } from 'react';
// import './Course.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUsers, faClock, faCalendarDays, faPhone, faCheck, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
// import courseData from '../../data/course/courseData.js';
// import live from '../../images/liveClass.svg';
// import { Link } from 'react-router-dom';
// import paymentMethods from '../../images/payment-methods.png';
// import CourseCard from './CourseCard';
// const Navbar = React.lazy(() => import('../Shared/Navbar/Navbar'));
// const Footer = React.lazy(() => import('../Shared/Footer/Footer'));

// const Course = (props) => {

//     const CourseName = props.name;

//     const [isOpen, setIsOpen] = useState(false);

//     const course = courseData.find(course => course.name === CourseName);
//     const otherCourses = [courseData.filter(otherCourses => otherCourses.name !== CourseName)];

//     return (
//         <div style={{ backgroundColor: '#f8f9fa' }}>
//             <Navbar />
//             <div className="container">

//                 {/* Course Top Left Section Goes Here */}
//                 <section style={{marginTop:'5.5rem'}}>
//                     <div className="row">
//                         <div className="col-sm-6">
//                             <CourseCard course = {course} />
//                         </div>
//                         <div className="col-sm-6">

//                         </div>
//                     </div>
//                 </section>

//             </div>
//         </div>
//     );
// };

// export default Course;

import React, { useRef, useState } from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClock, faCalendarDays, faPhone, faCheck, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import courseData from '../../data/course/courseData.js';
import live from '../../images/liveClass.svg';
import { Link } from 'react-router-dom';
// import paymentMethods from '../../images/payment-methods.png';
import DemoClass from '../DemoClass/DemoClass';
import CourseReview from './CourseReview';
const HowToPayment = React.lazy(() => import('./HowToPayment'));
const Navbar = React.lazy(() => import('../Shared/Navbar/Navbar'));
// const DemoClass = React.lazy(() => import('../DemoClass/DemoClass'));

const Course = (props) => {

    const name = props.name;

    const course = courseData.find(course => course.name === name);
    // const otherCourses = [courseData.filter(otherCourses => otherCourses.name !== name)];

    const [showMore, setShowMore] = useState(false);
    const [promoCode, setPromoCode] = useState(false);

    const myRef = useRef(null);

    const seeMore = () => {
        setShowMore(false);
        window.scrollTo(0, 0);
    }

    const handlePromoCode = () =>{ 
        setPromoCode(true);
    }

    return (
        <div style={{ backgroundColor: '#f8f9fa' }}>
            <Navbar />

            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div style={{ top: '120px', borderRadius: '25px' }} className="position-sticky">
                            <h1 style={{ fontSize: '22px' }} className='text-center course-alt-title fw-bold'>{course.alt_title}</h1>
                            <div className="responsive-embed-youtube">
                                <iframe className='' width="100%" height='auto' src={`${course.source}?controls=0`} title={course.slug} style={{ borderRadius: '22px' }} allowFullScreen srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${course.source}?controls=0><img src=${course.image} alt=${course.alt_title} loading="lazy"><span>▶</span></a>`}
                                ></iframe>
                            </div>

                            <div style={{ marginTop: '-1rem', backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ececec' }} className="container">
                                <div className="row py-5">
                                    <div style={{ justifyContent: 'space-between' }} className="d-flex py-3">
                                        <div className="col-lg-6">
                                            <h2 style={{ fontSize: '20px', lineHeight: '24px' }} className='text-center'>{course.next_batch} ২০২২ ব্যাচ এ ভর্তি চলছে</h2>
                                        </div>
                                        <div className="col-lg-6">
                                            <h2 style={{ textAlign: 'right', fontSize: '20px', lineHeight: '24px' }} className='fw-bold'>&#2547; {course.offer_price_per_month}/মাস</h2>
                                        </div>
                                    </div>
                                    <div style={{ justifyContent: 'space-between' }} className="d-flex py-2">
                                        <div className="col-md-6">
                                            <div className="d-flex justify-content-center">
                                                <div className="mt-2 me-2 fs-4">
                                                    <FontAwesomeIcon style={{ fontSize: '16px', lineHeight: '24px' }} icon={faUsers} />
                                                </div>
                                                <div className="">
                                                    <p style={{ fontSize: '14px', lineHeight: '22px' }} className='text-center'> কোর্সটি করেছেন<br /><span style={{ borderRadius: '15px', border: '1px solid #12348d', fontSize: '16px', lineHeight: '24px' }} className='fw-bold px-3'>{course.course_done}</span></p>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <div className="mt-3 me-2 fs-4">
                                                    <FontAwesomeIcon style={{ fontSize: '16px', lineHeight: '24px' }} icon={faCalendarDays} />
                                                </div>
                                                <div className="">
                                                    <p style={{ fontSize: '14px', lineHeight: '22px' }} className='text-center mt-2'> নেক্সট ব্যাচ<br /><span style={{ borderRadius: '15px', border: '1px solid #12348d', fontSize: '16px', lineHeight: '24px' }} className='fw-bold px-3'>{course.next_batch} ২০২২</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex justify-content-center">
                                                <div className="mt-2 me-2 fs-4">
                                                    <FontAwesomeIcon style={{ fontSize: '16px', lineHeight: '24px' }} icon={faClock} />
                                                </div>
                                                <div className="">
                                                    <p style={{ fontSize: '14px', lineHeight: '22px' }} className='text-center'> সময় লাগবে<br /><span style={{ borderRadius: '15px', border: '1px solid #12348d', fontSize: '16px', lineHeight: '24px' }} className='fw-bold px-3'>{course.course_duration} মাস</span></p>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <div className="">
                                                    <p style={{ fontSize: '14px', lineHeight: '22px' }} className='text-center'><img src={live} className='img-fluid pe-1' width={35} alt="live class" /> লাইভ ক্লাস সংখ্যা<br /><span style={{ borderRadius: '15px', border: '1px solid #12348d', fontSize: '16px', lineHeight: '24px' }} className='fw-bold px-3 ms-4'>{course.total_classes} টি</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 style={{ textDecoration: 'underline', cursor: 'pointer' }} className='fs-4 ms-2 text-center my-3'>প্রোমো কোড</h2>
                                    
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6 mt-1">
                                                <Link to='' className='text-decoration-none'><button className='btn-demo mx-auto d-block p-3' onClick={()=>myRef.current.scrollIntoView()}>একটি ফ্রি ক্লাস করে দেখুন &#8594;</button></Link>
                                            </div>
                                            <div className="col-md-6 mt-1">
                                                <Link to={`/checkout/${course.id}`} className='text-decoration-none'><button className='btn-buy mx-auto d-block p-3'>এখনই ভর্তি হয়ে যান &#8594;</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-center mt-3'>কোর্সটি সম্পর্কে বিস্তারিত জানতে <span style={{ textDecoration: 'underline' }}><a href="tel:09613823645" className='text-success'><FontAwesomeIcon style={{ textDecoration: 'none' }} className='mx-1' icon={faPhone} />কল করুন: 09613823645</a></span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h2 style={{ marginTop: '3.5rem', fontSize: '22px' }} className="text-center py-3 fw-bold">কোর্স মডিউল</h2>
                        {
                            showMore ?
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    {
                                        course.outline.map(item =>
                                            <div style={{ border: 'none' }} className="accordion-item m-2" key={item.id}>
                                                <h2 className="accordion-header" id={`flush-heading${item.id}`}>
                                                    <button style={{ backgroundColor: '#f1f1f1', borderRadius: '10px' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
                                                        <span className='pe-2'>&#43;</span>{item.subtitle}
                                                    </button>
                                                </h2>
                                                <div id={`flush-collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${item.id}`} data-bs-parent="#accordionFlushExample">
                                                    <div style={{ backgroundColor: 'white', border: 'none' }} className="accordion-body text-black">{item.brief}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    <h5 style={{ cursor: 'pointer' }} className='text-center' onClick={seeMore}>কম দেখতে ক্লিক করুন <FontAwesomeIcon icon={faAngleUp} /></h5>
                                </div> :
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    {
                                        course.outline.slice(0, 6).map(item =>
                                            <div style={{ border: 'none' }} className="accordion-item m-2" key={item.id}>
                                                <h2 className="accordion-header" id={`flush-heading${item.id}`}>
                                                    <button style={{ backgroundColor: '#f1f1f1', borderRadius: '10px' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
                                                        <span className='pe-2'>&#43;</span>{item.subtitle}
                                                    </button>
                                                </h2>
                                                <div id={`flush-collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${item.id}`} data-bs-parent="#accordionFlushExample">
                                                    <div style={{ backgroundColor: 'white', border: 'none' }} className="accordion-body text-black">{item.brief}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    <h5 style={{ cursor: 'pointer' }} className='text-center' onClick={() => setShowMore(true)}>আরো দেখতে ক্লিক করুন <FontAwesomeIcon icon={faAngleDown} /></h5>
                                </div>
                        }

                        {/* What you'll learn in this course */}
                        <div style={{ backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ececec' }} className="mt-5">
                            <h2 style={{ color: '#343b6d', fontSize: '22px' }} className='fw-bold text-center mt-3'>এই কোর্সে আপনি কি শিখবেন?</h2>
                            <ul className='p-4'>
                                {
                                    course.features.map(item => <li key={item.id} style={{ color: '#454c7e', textAlign: 'justify', listStyle: 'none', fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className="mt-2" ><FontAwesomeIcon className='text-success' icon={faCheck} /> {item.item}</li>)
                                }
                            </ul>
                        </div>

                        {/* Instructor Profile */}
                        <div style={{ backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ececec' }} className="container course-instructor mt-5">
                            <h2 style={{ color: '#343b6d', fontSize: '22px' }} className='fw-bold text-center mt-3'>ইনস্ট্রাক্টর</h2>
                            <div className="d-flex m-2">
                                <div className="py-2">
                                    <img style={{ borderRadius: '50%' }} src={course.instructor_image} alt={course.course_instructor} className='img-fluid' />
                                </div>
                                <div className="p-3">
                                    <h3 style={{ fontSize: '18px', lineHeight: '28px', textAlign: 'justify' }}>{course.course_instructor}</h3>
                                    {
                                        course?.instructor_designation ? <p style={{ fontSize: '14px', lineHeight: '20px' }}>{course.instructor_designation}</p> : <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, molestias!</p>
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Demo Class Registration Form */}
                        <DemoClass course={course} refProp={myRef} />

                        {/* How to payment */}
                        <HowToPayment course={course} />

                        {/* Course Review */}
                        <CourseReview course={course} />

                        {/* Payment System */}
                        {/* <div className="payment-container mt-5">
                            <h2 style={{ fontSize: '36px', fontWeight: '600', lineHeight: '36px', color: '#434257' }} className='my-5 text-center'>পেমেন্ট এর পদ্ধতি</h2>
                            <img className='img-fluid mx-auto d-block mb-5' width={400} src={paymentMethods} alt="payment methods" loading="lazy" />
                            <h3 style={{ fontSize: '17px', lineHeight: '27px', fontWeight: '700', color: '#54595f' }}>ওয়েবসাইটের মাধ্যমে ভর্তি</h3>
                            <ul style={{ fontSize: '17px', lineHeight: '27px', fontWeight: '400', color: '#54595f' }} className='my-4'>
                                <li>আপনার কাঙ্ক্ষিত কোর্সের নিচে <b>“এখনই ভর্তি হয়ে যান”</b> অপশনে ক্লিক করুন</li>
                                <li>আপনার স্ক্রীনে দেখানো ফর্মটি প্রয়োজনীয় তথ্য দিয়ে পূরণ করুন</li>
                                <li>ফর্মটি সফলভাবে পূরণ হলে <b>“এগিয়ে যান”</b> অপশনে ক্লিক করুন</li>
                                <li>আপনার পছন্দনীয় পেমেন্ট অপশন বাছাই করুন</li>
                                <li>আপনি যে কোনও <b>ক্রেডিট কার্ড, ডেবিট কার্ড, বিকাশ, নগদ, রকেট, উপায়</b> কিংবা <b>ব্যাংক</b> এর মাধ্যমে পেমেন্ট করতে পারবেন</li>
                            </ul>
                            <p style={{ fontSize: '17px', lineHeight: '27px', fontWeight: '400', color: '#54595f', textAlign: 'justify' }} className='my-4'>আপনার ফর্ম পূরণ এবং পেমেন্ট সম্পন্ন হওয়ার ২৪ ঘণ্টার মধ্যে আমাদের কাস্টমার সার্ভিস থেকে আপনাকে কল দিয়ে ক্লাস জয়েন করার পদ্ধতি ও তারিখ জানিয়ে দিবে। অন্যথায় আপনি নিজেই আমাদের হেল্পলাইনে কল করে জেনে নিতে পারবেন। আমাদের হেল্পলাইন নম্বর : 09613823645</p>
                            <h4 style={{ fontSize: '17px', lineHeight: '27px', fontWeight: '700', color: '#54595f' }} className='my-3'>ফোনের মাধ্যমে ভর্তি</h4>
                            <p style={{ fontSize: '17px', lineHeight: '27px', fontWeight: '400', color: '#54595f', textAlign: 'justify' }} className='my-4'>আমাদের রয়েছে কাস্টমার সার্ভিস নাম্বারে কল দিয়ে কোর্সে ভর্তির সুব্যবস্থা। আমাদের কাস্টমার সার্ভিস নাম্বারে কল দিয়ে প্রয়োজনীয় তথ্য দিয়ে পেমেন্ট সম্পন্ন করুন। পেমেন্ট সম্পন্ন হওয়ার ২৪ ঘণ্টার মধ্যে আমাদের কাস্টমার সার্ভিস থেকে আপনাকে কল দিয়ে আপনার আবেদন ভেরিফাই করা হবে। ভেরিফাই হওয়ার সাথে সাথে আপনার সেই কোর্সে ভর্তি প্রক্রিয়া সম্পন্ন হবে। </p>
                            <h5 style={{ fontSize: '20px', lineHeight: '30px', fontWeight: '600', color: '#434257' }} className='text-center my-5'>এই কোর্স সম্পর্কে কোনও প্রশ্ন থাকলে আমাদের হেল্পলাইন নম্বর এ যোগাযোগ করুন</h5>
                            <h6 style={{ fontSize: '36px', lineHeight: '36px', fontWeight: '700', color: '#434257' }} className='text-center my-5'>09613823645</h6>
                            <p style={{ fontSize: '20px', lineHeight: '30px', fontWeight: '600', color: '#434257' }} className='text-center mt-5'>আমাদের কাস্টমার সার্ভিস সপ্তাহে ৭ দিন ২৪ ঘণ্টা খোলা থাকে</p>
                        </div> */}
                    </div>

                </div>
            </div>


            {/* Other Course Container  */}
            {/* <div className="container py-5">
                <h2 style={{ fontSize: '24px', lineHeight: '23px', color: '#343b6d' }} className='fw-bold'>আরো কোর্স</h2>
                <div className="row">
                    {
                        otherCourses[0].map(otherCourse =>
                            <div key={otherCourse.id} className="col-lg-3 col-md-6 my-4">
                                <div style={{ backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ececec', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)' }}>
                                    <Link onClick={() => { window.scrollTo(0, 0); }} to={otherCourse.route}><img style={{ borderRadius: '15px' }} className='img-fluid' src={otherCourse.image} alt={otherCourse.title} loading="lazy" /></Link>
                                    <h3 style={{ fontSize: '18px', lineHeight: '28px', color: '#343b6d' }} className='fw-bold pt-4 ps-2'>{otherCourse.title}</h3>

                                    <div style={{ borderTop: '1px solid #ececec', justifyContent: 'space-between' }} className="d-flex">
                                        
                                        <h4 style={{ fontSize: '20px', lineHeight: '28px', color: '#454c7e' }} className='ps-2 pt-2 fw-bold'>৳ 2600</h4>
                                        <Link onClick={() => { window.scrollTo(0, 0); }} to={otherCourse.route} className='text-decoration-none'><p style={{ fontSize: '15px', lineHeight: '24px', color: '#b94a8f' }} className='pe-3 pt-2 fw-bold'>বিস্তারিত দেখুন</p></Link>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div> */}

            {/* Display on smaller devices */}
            <div style={{ boxShadow: '0 3px 10px 3px #0003' }} className="container-fluid d-lg-none fixed-bottom bg-white">
                <div className="my-2">
                    <div style={{ justifyContent: 'space-between' }} className="d-flex my-3">
                        <div className="col-md-6">
                            <h2 onClick={handlePromoCode} style={{ textDecoration: 'underline', cursor: 'pointer', fontSize: '20px', lineHeight: '24px' }} className=''>প্রোমো কোড</h2>
                        </div>
                        <div className="col-md-6">
                            <h2 style={{ fontSize: '20px', lineHeight: '24px' }} className='fw-bold'>&#2547; {course.offer_price_per_month}/মাস</h2>
                        </div>
                    </div>
                    <button className='btn-buy mx-auto d-block p-3'>এখনই ভর্তি হয়ে যান &#8594;</button>
                </div>

            </div>
        </div>
    );
};

export default Course;