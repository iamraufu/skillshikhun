import React from 'react';
import './FeaturedCourses.css';
import courseData from '../../../data/course/courseData';
import { Link } from 'react-router-dom';
import live from '../../../images/live.webp';
import liveClass from '../../../images/liveClass.webp';
import AOS from 'aos';
import "aos/dist/aos.css";
import Countdown from '../../Countdown/Countdown';

const FeaturedCourses = () => {

    AOS.init(
        {
        duration : 1000
    }
    )

    return (
        <div className="featured-container py-5">
            <div className='container'>
                <h2 style={{ fontSize: '32px', lineHeight: '46px', color: '#343b6d', fontWeight: '600' }} className='pt-5 text-center'>ঘরে বসেই ক্যারিয়ার তৈরির সহজ সমাধান এখানেই</h2>
                <h3 style={{ fontSize: '22px', lineHeight: '34px', color: '#343b6d', fontWeight: '600' }} className='text-center'>আমাদের কোর্সগুলো থেকে বাছাই করুন আপনার পছন্দের স্কিল</h3>
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
                                                    <br /> <small>- {course.course_duration} মাসের
                                                        <img src={live} width={30} className='img-fluid mx-2 mb-1' alt="live class" loading="lazy" />
                                                        কোর্স</small></h3>
                                                {/* <p style={{textAlign:'justify'}} className='px-3 text-black'>{course.short_description}</p> */}
                                                <Countdown 
                                                deadline = {course.next_batch_eng}
                                                text={'কোর্স শুরু হতে সময় বাকি'}
                                                />
                                            </div>

                                            <div style={{ justifyContent: 'space-between', backgroundColor: 'rgb(236,238,255)' }} className="d-flex py-3">
                                                <h4 style={{ fontSize: '16px', lineHeight: '27px', fontWeight: '600', color: '#069654' }} className='pt-1 ps-3 price'>
                                                    <span style={{ color: '#354895' }}></span> ৳ {course.price_per_month_bn} 
                                                    {/* <strike className='ps-2 text-muted'>{course.regular_price}</strike> */}
                                                    <small style={{ color: '#354895' }}>/মাস</small>
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
        </div>
    );
};

export default FeaturedCourses;