import React, { useRef, useState } from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClock, faCalendarDays, faPhone, faCheck, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import courseData from '../../data/course/courseData.js';
import live from '../../images/liveClass.svg';
import { Link } from 'react-router-dom';
import DemoClass from '../DemoClass/DemoClass';
import CourseReview from './CourseReview';
// import play from '../../images/play.png';
const HowToPayment = React.lazy(() => import('./HowToPayment'));
const Navbar = React.lazy(() => import('../Shared/Navbar/Navbar'));

const Course = (props) => {

    const name = props.name;

    const course = courseData.find(course => course.name === name);
    const otherCourses = [courseData.filter(otherCourses => otherCourses.name !== name)];

    const [showMore, setShowMore] = useState(false);
    // eslint-disable-next-line
    // const [promoCode, setPromoCode] = useState(false);

    const myRef = useRef(null);

    const seeMore = () => {
        setShowMore(false);
        window.scrollTo(0, 0);
    }

    // const handlePromoCode = () => {
    //     setPromoCode(true);
    // }

    return (
        <div style={{ backgroundColor: '#f8f9fa' }}>
            <Navbar />

            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 style={{ fontSize: '22px' }} className='text-center course-alt-title fw-bold'>{course.alt_title}</h1>
                        <div style={{ 
                            // top: '100px', 
                            borderTopRightRadius: '25px',
                            borderTopLeftRadius: '25px' }} 
                            // className="position-sticky"
                            >
                            <div className="responsive-embed-youtube">
                                <iframe className='' width="100%" height='auto' src={`${course.source}?controls=0`} title={course.slug} style={{ borderTopRightRadius: '22px', borderTopLeftRadius:'22px'  }} allowFullScreen srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${course.source}?controls=0><img src=${course.image} alt=${course.alt_title} loading="lazy"><span>▶</span></a>`}
                                ></iframe>
                                {/* <img src={play} style={{position:'relative', zIndex:1, top:'50%', left:'50%', transform:'translate(-50%, -50%'}} className='img-fluid' width={45} alt={course.slug} /> */}
                            </div>
                            
                        </div>
                        <div style={{backgroundColor: 'white', 
                        // borderBottomLeftRadius: '15px', borderBottomRightRadius:'15px', 
                        border: '1px solid #ececec', top:'90px' }} className="container position-sticky">
                                <div className="row py-3">
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
                                                    <p style={{ fontSize: '14px', lineHeight: '22px' }} className='text-center'> কোর্সটি করেছেন<br /><span style={{ borderRadius: '15px', border: '1px solid #12348d', fontSize: '16px', lineHeight: '24px' }} className='fw-bold px-3'>{course.course_done} জন</span></p>
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
                                    {/* <h2 style={{ textDecoration: 'underline', cursor: 'pointer' }} className='fs-4 ms-2 text-center my-3'>প্রোমো কোড</h2> */}

                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6 mt-1">
                                                <Link to='' className='text-decoration-none'><button className='btn-demo mx-auto d-block p-3' onClick={() => myRef.current.scrollIntoView()}>৩টি ফ্রি ক্লাস বুঝে নিন &#8594;</button></Link>
                                            </div>
                                            {
                                                localStorage.getItem('token') ? <div className="col-md-6 mt-1">
                                                <Link to={`/checkout/${course.id}`} className='text-decoration-none'><button className='btn-buy mx-auto d-block p-3' onClick={() => { window.scrollTo(0, 0); }}>এখনই ভর্তি হয়ে যান &#8594;</button></Link>
                                            </div> : <div className="col-md-6 mt-1">
                                                <Link to={`/purchase/checkout/${course.id}`} className='text-decoration-none'><button className='btn-buy mx-auto d-block p-3' onClick={() => { window.scrollTo(0, 0); }}>এখনই ভর্তি হয়ে যান &#8594;</button></Link>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                    <p className='text-center mt-3'>কোর্সটি সম্পর্কে বিস্তারিত জানতে <span style={{ textDecoration: 'underline' }}><a href="tel:09613823645" className='text-success'><FontAwesomeIcon style={{ textDecoration: 'none' }} className='mx-1' icon={faPhone} />কল করুন: 09613823645</a></span></p>
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

                        {/* ▶ Instructor Profile */}
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

                        {/* How to payment */}
                        <HowToPayment course={course} />

                        {/* Demo Class Registration Form */}
                        <DemoClass course={course} refProp={myRef} />

                        {/* Course Review */}
                        <CourseReview course={course} />

                    </div>

                </div>
            </div>


            {/* Other Course Container  */}
            <div className="container py-5 d-none d-lg-block">
                <h2 style={{ fontSize: '24px', lineHeight: '23px', color: '#343b6d' }} className='fw-bold text-center'>আরো কোর্স</h2>
                <div className="row justify-content-center">
                    {
                        otherCourses[0].map(otherCourse =>
                            <div key={otherCourse.id} className="other-courses col-lg-3 col-md-6 my-4">
                                <Link className='text-decoration-none' onClick={() => { window.scrollTo(0, 0); }} to={otherCourse.route}>
                                    <div
                                        style={{ border: '1px solid #dde7f3', borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}
                                        // style={{ backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ececec', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)' }} 
                                        className='bg-white'>
                                        <img style={{ borderRadius: '15px' }} className='img-fluid' src={otherCourse.image} alt={otherCourse.title} loading="lazy" />
                                        <h3 style={{ fontSize: '18px', lineHeight: '28px', color: '#343b6d' }} className='fw-bold pt-4 ps-2'>{otherCourse.title}</h3>

                                        <div
                                            style={{ justifyContent: 'space-between', backgroundColor: 'rgb(236,238,255)' }} className="d-flex py-3"
                                        // style={{ borderTop: '1px solid #ececec', justifyContent: 'space-between' }} 
                                        // className="d-flex"
                                        >

                                            {/* <h4 style={{ fontSize: '20px', lineHeight: '28px', color: '#454c7e' }} className='ps-2 pt-2 fw-bold'>৳ 2600</h4>
                                        <Link onClick={() => { window.scrollTo(0, 0); }} to={otherCourse.route} className='text-decoration-none'><p style={{ fontSize: '15px', lineHeight: '24px', color: '#b94a8f' }} className='pe-3 pt-2 fw-bold'>বিস্তারিত দেখুন</p></Link> */}
                                            <h4 style={{ fontSize: '16px', lineHeight: '27px', fontWeight: '600', color: '#069654' }} className='pt-1 ps-3 price'><span style={{ color: '#354895' }}>মাত্র</span> ৳ {course.offer_price_per_month}<small style={{ color: '#354895' }}>/মাস</small>
                                                {/* <strike className='ps-2 text-muted'>{course.regular_price}</strike> */}
                                            </h4>
                                            <button onClick={() => { window.scrollTo(0, 0); }} className='see-details me-3' to={course.route}>বিস্তারিত দেখুন</button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}
                </div>
            </div>

            {/* Display on smaller devices */}
            <div style={{ boxShadow: '0 3px 10px 3px #0003' }} className="container-fluid d-lg-none fixed-bottom bg-white">
                <div className="my-2">
                    <div style={{ justifyContent: 'right' }} className="d-flex my-3">
                        {/* <div className="col-md-6">
                            <h2 onClick={handlePromoCode} style={{ textDecoration: 'underline', cursor: 'pointer', fontSize: '20px', lineHeight: '24px' }} className=''>প্রোমো কোড</h2>
                        </div> */}
                        {/* <div className="col-md-6"> */}
                            <h2 style={{ fontSize: '20px', lineHeight: '24px' }} className='fw-bold'>&#2547; {course.offer_price_per_month}/মাস</h2>
                        {/* </div> */}
                    </div>
                    <div className=" justify-content-center">
                            <Link to='' className='text-decoration-none'><button className='btn-demo mx-auto d-block' onClick={() => myRef.current.scrollIntoView()}>৩টি ফ্রি ক্লাস বুঝে নিন &#8594;</button></Link>
                            <Link to={`/checkout/${course.id}`} className='text-decoration-none'><button className='btn-buy mx-auto d-block mt-2' onClick={() => { window.scrollTo(0, 0); }}>এখনই ভর্তি হয়ে যান &#8594;</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Course;