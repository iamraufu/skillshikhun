import React from 'react';
import './FeaturedCourses.css';
import courseData from '../../../data/course/courseData';
// import { Link } from 'react-router-dom';
// import live from '../../../images/live.png';
// import liveClass from '../../../images/liveClass.svg';
import FeaturedSlider from './FeaturedSlider';

const FeaturedCourses = () => {

    return (
        <div
            // style={{minHeight:'100vh'}} 
            className="featured-container pb-5">
            <div className='container'>
                <h2 style={{ fontSize: '32px', lineHeight: '46px', color: '#343b6d', fontWeight: '600' }} className='pt-5 text-center'>ঘরে বসেই ক্যারিয়ার তৈরির সহজ সমাধান এখানেই</h2>
                <h3 style={{ fontSize: '22px', lineHeight: '34px', color: '#343b6d', fontWeight: '600' }} className='text-center'>আমাদের কোর্সগুলো থেকে বাছাই করুন আপনার পছন্দের স্কিল</h3>

                {/* course contents */}
                {/* <div className="row">
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
                                                    <br /> <small>- {course.course_duration} {course.name === 'সবার জন্য ফ্রিল্যান্সিং' ? "দিনের" : "মাসের"}
                                                        <img src={live} width={30} className='img-fluid mx-2 mb-1' alt="live class" loading="lazy" />
                                                        কোর্স</small></h3>
                                            </div>

                                            <div style={{ justifyContent: 'space-between', backgroundColor: 'rgb(236,238,255)' }} className="d-flex py-3">
                                                <h4 style={{ fontSize: '16px', lineHeight: '27px', fontWeight: '600', color: '#069654' }} className='pt-1 ps-3 price'>
                                                    <span style={{ color: '#354895' }}></span> ৳ {course.price_per_month_bn}
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
                </div> */}
                <FeaturedSlider course={courseData} />
            </div>
        </div>
    );
};

export default FeaturedCourses;