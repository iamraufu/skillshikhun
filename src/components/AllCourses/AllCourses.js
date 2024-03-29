import React from 'react';
import './AllCourses.css';
import courseData from '../../data/course/courseData';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import liveClass from '../../images/liveClass.svg';
import live from '../../images/live.png';
import PromoMessage from '../PromoMessage/PromoMessage';
// import Countdown from '../Countdown/Countdown';
import Footer from '../Shared/Footer/Footer';

const AllCourses = () => {
    return (
        <>
            <PromoMessage />
            <div className="courses-container py-5">
                <div
                    style={{ marginTop: '-3.5rem' }}
                // className="fixed-top"
                className="sticky-top"
                >
                    <Navbar />
                </div>
                <div className='container'>
                    <h1 style={{ fontSize: '32px', lineHeight: '46px', color: '#343b6d', fontWeight: '600' }} className='pt-5 mt-5 ps-2'>আমাদের লাইভ কোর্সসমূহ</h1>
                    <div className="row">
                        {
                            courseData.map(course => {
                                return (
                                    <div key={course.id} className='featured-courses col-xl-3 col-md-6 col-md-3 my-5'>
                                        <Link className='text-decoration-none' onClick={() => { window.scrollTo(0, 0); }} to={course.route}>
                                            <div style={{ border: '1px solid #dde7f3', borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}>
                                                <img style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} width={600} src={course.image} alt={course.title} className='img-fluid' loading="lazy" />
                                                <div
                                                    // style={{height:'200px'}} 
                                                    className="bg-white py-4">
                                                    <h3 style={{ fontSize: '15px', lineHeight: '24px', fontWeight: '600', color: '#354895' }} className='px-3'>{course.title}
                                                        <img src={liveClass} className='img-fluid ps-2' width={40} alt="live class" loading="lazy" />
                                                        <br /> <small>- {course.course_duration} {course.name ==='সবার জন্য ফ্রিল্যান্সিং' ? "দিনের" : "মাসের"}
                                                            <img src={live} width={30} className='img-fluid mx-2 mb-1' alt="live class" loading="lazy" />
                                                            কোর্স</small></h3>
                                                    {/* <p style={{textAlign:'justify'}} className='px-3 text-black'>{course.short_description}</p> */}
                                                    {/* <Countdown 
                                                deadline = {course.next_batch_eng}
                                                text={'কোর্স শুরু হতে সময় বাকি'}
                                                /> */}
                                                </div>

                                                <div style={{ justifyContent: 'space-between', backgroundColor: 'rgb(236,238,255)' }} className="d-flex py-3">
                                                    <h4 style={{ fontSize: '16px', lineHeight: '27px', fontWeight: '600', color: '#069654' }} className='pt-1 ps-3 price'>
                                                        <span style={{ color: '#354895' }}></span> ৳ {course.price_per_month_bn}
                                                        {/* <strike className='ps-2 text-muted'>{course.regular_price}</strike> */}
                                                        {
                                                        course?.name === 'সবার জন্য ফ্রিল্যান্সিং' ? null :
                                                        <small style={{ color: '#354895' }}> প্রতি মাস</small>
                                                    }
                                                    </h4>
                                                    <button onClick={() => { window.scrollTo(0, 0); }} className='see-details me-3' to={course.route}>বিস্তারিত দেখুন</button>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            }
                            )}
                    </div>
                </div>
                <div style={{ borderTop: '1px solid lightgrey' }} className="">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default AllCourses;