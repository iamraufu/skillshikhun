import React, { useEffect, useState } from 'react';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';
import courseData from '../../../data/course/courseData';
import live from '../../../images/live.png';
import liveClass from '../../../images/liveClass.svg';
import { Link } from 'react-router-dom';

import { ZoomMtg } from '@zoomus/websdk';

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.4.5/lib', '/av');
ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');

const DLiveCourse = () => {

    const phone = localStorage.getItem('phone');
    const [userPhoneData, setUserPhoneData] = useState({})
    // eslint-disable-next-line
    const [liveCourses, setLiveCourses] = useState([]);
    const [purchasedLiveCourses, setPurchasedLiveCourses] = useState([]);
    const [otherLiveCourses, setOtherLiveCourses] = useState([]);

    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://skillshikhun.herokuapp.com/users/phone/${phone}`);
            const data = await res.json();
            setUserPhoneData(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://skillshikhun.herokuapp.com/api/get-payments/${phone}`);
            const data = await res.json();
            setPayments(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://skillshikhun.herokuapp.com/api/get-payment/Live/${phone}`);
            const data = await res.json();
            setLiveCourses(data);
        }
        fetchData();
    }, [phone])

    //  hook for setting purchased courses and meetings
    useEffect(() => {

        const live_courses = payments.map(pm => pm.course).filter(course => courseData.map(cd => cd.name).includes(course))
        setPurchasedLiveCourses(courseData.filter(course => live_courses.includes(course.name)))

        setOtherLiveCourses(courseData?.filter(course => !live_courses.includes(course.name)));

    }, [payments])

    let signatureEndpoint = 'https://skillshikhun.herokuapp.com/liveClass'
    let sdkKey = '87rXfpYIpyQYMZSrjmcYKvF72lEqinAuroje'
    // let meetingNumber = ''
    let role = 0
    let userName = userPhoneData.name
    let userEmail = userPhoneData.email
    // let passWord = ''
    let leaveUrl = 'https://www.skillshikhun.com/dashboard'
    let registrantToken = ''

    async function getSignature(meetingNumber, password) {
        // e.preventDefault();

        await fetch(signatureEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                meetingNumber: meetingNumber,
                role: role
            })
        }).then(res => res.json())
            .then(response => {
                startMeeting(response.signature, meetingNumber, password)
            }).catch(error => {
                
            })
    }

    async function startMeeting(signature, meetingNumber, password) {

        document.getElementById('zmmtg-root').style.display = 'block'
        document.getElementById('d_live').style.display = 'none'

        await ZoomMtg.init({
            leaveUrl: leaveUrl,
            success: (success) => {

                ZoomMtg.join({
                    signature: signature,
                    meetingNumber: meetingNumber,
                    userName: userName,
                    sdkKey: sdkKey,
                    userEmail: userEmail,
                    passWord: password,
                    tk: registrantToken,
                    success: (success) => {
    
                    },
                    error: (error) => {
    
                    }
                })

            },
            error: (error) => {
            }
        })
    }

    return (
        <div>
            <div id="d_live">
                <DNavbar />
                <div style={{ margin: '5rem 0' }} className='container-fluid'>
                    <div className="row">

                        {/* left sidebar */}
                        <div className="col-xl-2 col-lg-3 col-md-4 d-none d-lg-block position-sticky">
                            <Sidebar />
                        </div>

                        <div style={{ minHeight: '800px', backgroundColor: '#f3f5f9', borderRadius: '15px', marginBottom: '5rem' }} className="col-xl-9 col-lg-9 col-md-12 py-5 px-5">
                            <div className="row">
                                <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='mt-3'>
                                    <img src={live} width={45} className='img-fluid me-2' alt="video course" />
                                    লাইভ কোর্স</h2>


                                <div className="">
                                    {
                                        purchasedLiveCourses?.length === 1 &&
                                        <div className="row justify-content-center">
                                            <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='my-3'>আপনি যে কোর্স সমূহে ভর্তি হয়েছেন</h2>
                                            {purchasedLiveCourses?.map(course => {
                                                return (
                                                    <div key={course.id} className='featured-courses col-md-6 mt-2 mb-5'>
                                                        <section onClick={() => getSignature(course.live_number, course.live_password)}>
                                                            <div style={{ border: '1px solid #dde7f3', borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}>
                                                                <img style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} width={600} src={course.image} alt={course.title} className='img-fluid' loading="lazy" />
                                                                <div className="bg-white py-4">
                                                                    <h3 style={{ fontSize: '15px', lineHeight: '24px', fontWeight: '600', color: '#354895' }} className='px-3 text-center'>{course.title}</h3>
                                                                    <h4 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#b94a8f' }} className='text-center px-3 price mt-2'>
                                                                        <span style={{ color: '#354895', fontSize: '14px' }}>সময়: </span>{course.class_time}
                                                                    </h4>
                                                                </div>

                                                                <div style={{ justifyContent: 'space-between', backgroundColor: 'rgb(236,238,255)' }} className="d-flex py-3">
                                                                    <button onClick={() => { window.scrollTo(0, 0); }} className='see-details mx-auto d-block'>জয়েন ক্লাস</button>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }

                                    {
                                        purchasedLiveCourses?.length > 1 &&
                                        <div className="row justify-content-center">
                                            <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='my-3'>আপনি যে কোর্স সমূহে ভর্তি হয়েছেন</h2>
                                            {purchasedLiveCourses?.map(course => {
                                                return (
                                                    <div key={course.id} className='featured-courses col-md-4 mt-3 mb-5'>
                                                        <section onClick={() => getSignature(course.live_number, course.live_password)}>
                                                            <div style={{ border: '1px solid #dde7f3', borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}>
                                                                <img style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} width={600} src={course.image} alt={course.title} className='img-fluid' loading="lazy" />
                                                                <div className="bg-white py-4">
                                                                    <h3 style={{ fontSize: '15px', lineHeight: '24px', fontWeight: '600', color: '#354895' }} className='px-3 text-center'>{course.title}</h3>
                                                                    <h4 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#b94a8f' }} className='text-center px-3 price mt-2'>
                                                                        <span style={{ color: '#354895', fontSize: '14px' }}>সময়: </span>{course.class_time}
                                                                    </h4>
                                                                </div>

                                                                <div style={{ justifyContent: 'space-between', backgroundColor: 'rgb(236,238,255)' }} className="d-flex py-3">
                                                                    <button onClick={() => { window.scrollTo(0, 0); }} className='see-details mx-auto d-block'>জয়েন ক্লাস</button>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }
                                    {
                                        purchasedLiveCourses?.length === 0 &&
                                        <div className="">
                                            <p className='text-danger text-center'>আপনি কোনো লাইভ কোর্সে ভর্তি হননি</p>
                                            {/* <div className="">
                                            <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='my-2 text-center'>
                                                <button className='btn btn-danger ms-2'>
                                                    <Link to='/dashboard/live-course' className='text-white text-decoration-none mx-auto d-block'>লাইভ কোর্সসমূহ</Link>
                                                </button>
                                            </h2>
                                        </div> */}
                                        </div>
                                    }
                                </div>
                                <hr />
                                <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='my-3'>আমাদের অন্যানো কোর্স সমূহ</h2>
                                {
                                    otherLiveCourses.map(course => {
                                        return (
                                            <div key={course.id} className='featured-courses col-xl-3 col-md-6 col-sm-6 my-5'>
                                                <Link className='text-decoration-none' onClick={() => { window.scrollTo(0, 0); }} to={course.route}>
                                                    <div style={{ border: '1px solid #dde7f3', borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}>
                                                        <img style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} width={600} src={course.image} alt={course.title} className='img-fluid' loading="lazy" />
                                                        <div
                                                            style={{ height: '130px' }}
                                                            className="bg-white py-4">
                                                            <h3 style={{ fontSize: '16px', lineHeight: '30px', fontWeight: '600', color: '#354895' }} className='px-3'>{course.title}
                                                                <img src={liveClass} className='img-fluid ps-2' width={40} alt="live class" loading="lazy" />
                                                                <br /> <small>- {course.course_duration} মাসের
                                                                    <img src={live} width={30} className='img-fluid mx-2 mb-1' alt="live class" loading="lazy" />
                                                                    কোর্স</small></h3>
                                                            {/* <p style={{textAlign:'justify'}} className='px-3 text-black'>{course.short_description}</p> */}
                                                        </div>

                                                        <div style={{ justifyContent: 'space-between', backgroundColor: 'rgb(236,238,255)' }} className="d-flex py-3 pe-2">
                                                            <h4 style={{ fontSize: '16px', lineHeight: '27px', fontWeight: '600', color: '#069654' }} className='pt-1 ps-3 price'>
                                                                <span style={{ color: '#354895' }}></span> ৳ {course.price_per_month_bn}
                                                                {/* <strike className='ps-2 text-muted'>{course.regular_price}</strike> */}
                                                                <small style={{ color: '#354895' }}>/মাস</small>
                                                            </h4>
                                                            <button onClick={() => { window.scrollTo(0, 0); }} className='see-details' to={course.route}>বিস্তারিত দেখুন</button>

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
                    <Menu />
                </div>
            </div>
            <div id="meetingSDKElement">

            </div>
        </div>
    );
};

export default DLiveCourse;