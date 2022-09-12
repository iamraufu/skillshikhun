import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import DNavbar from './DNavbar/DNavbar';
import Sidebar from './Sidebar/Sidebar.js';
// import AwesomeSlider from 'react-awesome-slider';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import free_class from '../../images/dashboard/free_class.svg'
import live from '../../images/dashboard/live.svg'
// import liveClass from '../../images/live.svg'
import video from '../../images/dashboard/video.svg';
import payment from '../../images/dashboard/payment.svg';
// import video_library from '../../images/dashboard/video_library.svg';
import Menu from './Menu/Menu';
import courseData from '../../data/course/courseData';
// import liveClassData from '../../data/course/liveClassData';

// import { ZoomMtg } from '@zoomus/websdk';
// import Countdown from '../Countdown/Countdown';

// ZoomMtg.setZoomJSLib('https://source.zoom.us/2.4.5/lib', '/av');
// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareWebSDK();
// ZoomMtg.i18n.load('en-US');
// ZoomMtg.i18n.reload('en-US');


const Dashboard = () => {

    const navigate = useNavigate();
    const phone = localStorage.getItem('phone');
    const [userPhoneData, setUserPhoneData] = useState({})

    const [demoClasses, setDemoClasses] = useState([]);
    const [freeClasses, setFreeClasses] = useState([]);
    // eslint-disable-next-line
    const [liveCourses, setLiveCourses] = useState([]);
    const [purchasedLiveCourses, setPurchasedLiveCourses] = useState([]);

    // eslint-disable-next-line
    const [videoCourses, setVideoCourses] = useState([]);
    const [purchasedVideoCourses, setPurchasedVideoCourses] = useState([]);

    const [payments, setPayments] = useState([]);

    // get name from localStorage user 
    // const name = JSON.parse(localStorage.getItem('name'));

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api-skillshikhun.herokuapp.com/users/phone/${phone}`);
            const data = await res.json();
            setUserPhoneData(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api-skillshikhun.herokuapp.com/demoClasses/phone/${phone}`);
            const data = await res.json();
            setDemoClasses(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api-skillshikhun.herokuapp.com/api/get-payment/Live/${phone}`);
            const data = await res.json();
            setLiveCourses(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api-skillshikhun.herokuapp.com/api/get-payment/Video/${phone}`);
            const data = await res.json();
            setVideoCourses(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api-skillshikhun.herokuapp.com/api/get-payments/${phone}`);
            const data = await res.json();
            setPayments(data);
        }
        fetchData();
    }, [phone])

    //  hook for setting free classes, purchased courses and meetings
    useEffect(() => {

        // setPurchasedLiveCourses(courseData.filter(course => course?.name === payments[0]?.course || course?.name === payments[1]?.course || course?.name === payments[2]?.course || course?.name === payments[3]?.course))

        const live_courses = payments.map(pm => pm.course).filter(course => courseData.map(cd => cd.name).includes(course))
        setPurchasedLiveCourses(courseData.filter(course => live_courses.includes(course.name)))

        const demo_classes = demoClasses.map(dm => dm.category).filter(category => courseData.map(cd => cd.name).includes(category))
        setFreeClasses(courseData.filter(course => demo_classes.includes(course.name)))

        const video_courses = payments.map(pm => pm.course).filter(course => videoCourses.map(cd => cd.name).includes(course))
        setPurchasedVideoCourses(videoCourses.filter(course => video_courses.includes(course.name)))
    }, [payments, demoClasses, videoCourses])

    // let signatureEndpoint = 'https://api-skillshikhun.herokuapp.com/liveClass'
    // let sdkKey = '87rXfpYIpyQYMZSrjmcYKvF72lEqinAuroje'
    // let meetingNumber = ''
    // let role = 0
    // let userName = userPhoneData.name
    // let userEmail = userPhoneData.email
    // let passWord = ''
    // let leaveUrl = 'https://www.skillshikhun.com/dashboard'
    // let registrantToken = ''

    // // eslint-disable-next-line
    // async function getSignature(meetingNumber, password) {

    //     await fetch(signatureEndpoint, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             meetingNumber: meetingNumber,
    //             role: role
    //         })
    //     }).then(res => res.json())
    //         .then(response => {
    //             startMeeting(response.signature, meetingNumber, password)
    //         })
    // }

    // async function startMeeting(signature, meetingNumber, password) {

    //     document.getElementById('zmmtg-root').style.display = 'block'
    //     document.getElementById('dashboard').style.display = 'none'

    //     await ZoomMtg.init({
    //         leaveUrl: leaveUrl,
    //         success: (success) => {


    //             ZoomMtg.join({
    //                 signature: signature,
    //                 meetingNumber: meetingNumber,
    //                 userName: userName,
    //                 sdkKey: sdkKey,
    //                 userEmail: userEmail,
    //                 passWord: password,
    //                 tk: registrantToken,
    //                 success: (success) => {

    //                 },
    //                 error: (error) => {

    //                 }
    //             })

    //         },
    //         error: (error) => {

    //         }
    //     })
    // }

    return (
        <div>
            <div id='dashboard' className='dashboard'>
                <DNavbar />
                <div className="container-fluid">
                    <div style={{ margin: '5rem 0' }} className="row">

                        {/* left sidebar */}
                        <div className="col-xl-2 col-lg-3 col-md-4 d-none d-lg-block">
                            <Sidebar />
                        </div>

                        {/* right container */}
                        <div style={{ minHeight: '800px', backgroundColor: '#f3f5f9', borderRadius: '15px' }} className="col-xl-9 col-lg-9 col-md-12 pb-5">

                            {/* user info goes here */}
                            <div className="col-sm-6">
                                <div className="user-info mx-5 pt-3">
                                    <h1 style={{ fontSize: '20px', lineHeight: '24px', color: '#343b6d', fontWeight: '700' }} className=''>স্বাগতম, <span style={{ fontSize: '20px', lineHeight: '24px', color: '#b94a8f', fontWeight: '600' }}>{userPhoneData?.name}</span></h1>
                                    {/* {
                                    userPhoneData?.phone ?
                                        <h1 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className=''>স্বাগতম, <span style={{ fontSize: '24px', lineHeight: '36px', color: '#b94a8f', fontWeight: '600' }}>{userPhoneData.name}</span></h1>
                                        :
                                        <h1 style={{ paddingTop: '4rem', fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className=''><div className="spinner-grow" role="status">
                                            <span className="visually-hidden"></span>
                                        </div> লোড হচ্ছে ...<span style={{ fontSize: '24px', lineHeight: '36px', color: '#b94a8f', fontWeight: '600' }}></span></h1>
                                } */}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h2 style={{ fontSize: '18px', lineHeight: '31px', color: '#495082', fontWeight: '500' }} className='mx-5 d-none d-lg-block'>
                                    ক্লাসের বিস্তারিত সব জেনে নিন আপনার <span style={{ color: '#653dae' }} className='fw-bold'>Skill শিখুন</span> এর ড্যাশবোর্ডে</h2>
                            </div>


                            <div className="row justify-content-center">

                                <div style={{ borderRadius: '10px' }} className="col-md-5 bg-white dashboard-content-card">
                                    <div style={{ margin: 'auto' }}>
                                        <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='mt-3'>
                                            <img src={free_class} width={50} className='img-fluid me-2' alt="free class" />
                                            আপনার ডেমো ক্লাস সমূহ</h2>

                                        <div className="row justify-content-center align-items-center mb-5">
                                            {
                                                freeClasses.map(course =>
                                                    <div key={course.id} onClick={() => {
                                                        navigate(`/dashboard/previous/free-class/${course.id}`)
                                                    }} style={{ borderRadius: '10px', border: '1px solid lightgrey' }} className="col-sm-10 bg-white m-2 class-recording-course-items">
                                                        <div className="row justify-content-center align-items-center mt-2">

                                                            <div className="col-md-6">
                                                                <img src={course.image} className='img-fluid' alt={course.name} />
                                                            </div>

                                                            <div className="col-md-6 pt-2">
                                                                <h2 className='fs-6 fw-bold'>{course.title}</h2>
                                                                <h2 className='fs-6'>{course.course_instructor}</h2>
                                                                <h2 style={{ backgroundColor: '#f1f1f1', borderRadius: '15px' }} className='fs-6 float-end p-2'><span className='fw-bold'>{course.free_video_count}</span> টি ভিডিও</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                        </div>
                                        {
                                            demoClasses?.length === 0 &&
                                            <div className="ms-3 justify-content-center">
                                                <p className='mt-2 text-center text-muted'>আপনি কোনো ফ্রি ক্লাস রেজিস্ট্রেশন করেননি | ৩টি ফ্রি ক্লাস পেতে এখানে ক্লিক করুন</p>
                                                <button className='btn btn-info text-white my-3 mx-auto d-block'><Link to='/dashboard/free-class' className='text-white text-decoration-none'>ফ্রি ক্লাস</Link></button>
                                            </div>
                                        }
                                    </div>

                                    {/* <p className='text-center mt-2 text-primary'>অথবা পূর্ববর্তী ফ্রি ক্লাসগুলো দেখুন</p> */}
                                    {/* {
                                        demoClasses?.length > 0 &&
                                    <div className="row justify-content-center p-2">
                                        {
                                            freeClasses.map(freeClass =>
                                                <div onClick={()=> navigate('/dashboard/previous/free-class/' + freeClass.id)} key={freeClass.id} style={{ backgroundColor: '#f1f1f1', borderRadius: '15px', cursor:'pointer', fontSize:'14px', boxShadow: '0 5px 5px #c4c4c44d' }} className="col-sm-5 p-3 text-center m-3"><img src={video_library} width={20} alt={freeClass.title} /> {freeClass.title}</div>
                                            )
                                        }
                                    </div>
                                    } */}
                                </div>

                                <div style={{ borderRadius: '10px' }} className="col-md-5 bg-white dashboard-content-card d-flex justify-content-center align-items-center">
                                    <div style={{ margin: 'auto' }}>
                                        <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='mt-3'>
                                            <img src={live} width={45} className='img-fluid me-2' alt="video course" />
                                            লাইভ কোর্স</h2>
                                        {
                                            purchasedLiveCourses?.length === 1 &&
                                            <div className="row justify-content-center">
                                                {purchasedLiveCourses?.map(course => {
                                                    return (
                                                        <div key={course.id} className='featured-courses col-xl-8 col-md-12 mt-2 mb-5'>
                                                            {/* <a href = {course.live_link} className='text-decoration-none' target='_blank' rel="noreferrer" */}
                                                            {/* onClick={() => getSignature(course.live_number, course.live_password)} */}
                                                            {/* > */}
                                                            <div style={{ border: '1px solid #dde7f3', borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}>
                                                                <img style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} width={600} src={course.image} alt={course.title} className='img-fluid' loading="lazy" />
                                                                <div className="bg-white py-4">
                                                                    <h3 style={{ fontSize: '15px', lineHeight: '24px', fontWeight: '600', color: '#354895' }} className='px-3 text-center'>{course.title}</h3>
                                                                    {/* <h4 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#b94a8f' }} className='text-center px-3 price mt-2'>
                                                                        <span style={{ color: '#354895', fontSize: '14px' }}>সময়: </span>{course.class_time}
                                                                    </h4> */}
                                                                    {/* <Countdown
                                                                        deadline={course.next_batch_eng}
                                                                        text={'কোর্স শুরু হতে সময় বাকি'}
                                                                    /> */}
                                                                </div>

                                                                <div style={{ justifyContent: 'space-between', backgroundColor: 'rgb(236,238,255)' }} className="d-flex p-3">
                                                                    {
                                                                        userPhoneData?.name ? 
                                                                        // <button onClick={() => {
                                                                        //     // getSignature(course.live_number, course.live_password)
                                                                        // }}

                                                                        //     className='see-details'> জয়েন ক্লাস</button> 
                                                                        <a href={course.live_link} target='_blank' rel="noreferrer" className='see-details'
                                                                        // onClick={() => { window.scrollTo(0, 0); }}
                                                                        >জয়েন ক্লাস</a>
                                                                            :
                                                                            <button className='see-details-fade'><div className="spinner-border" style={{ height: '15px', width: '15px' }} role="status">
                                                                            </div> জয়েন ক্লাস</button>
                                                                    }
                                                                    {/* <button onClick={() => getSignature(course.live_number, course.live_password)} className='see-details mx-auto d-block'>জয়েন ক্লাস</button> */}
                                                                    <button onClick={() => {
                                                                        window.scrollTo(0, 0);
                                                                        navigate('/course/live/video/' + course.id)
                                                                    }} className='class-video'>ক্লাস ভিডিও</button>
                                                                </div>
                                                            </div>
                                                            {/* </a> */}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        }

                                        {
                                            purchasedLiveCourses?.length > 1 &&
                                            <div className="row justify-content-center">
                                                {purchasedLiveCourses?.map(course => {
                                                    return (
                                                        <div key={course.id} className='featured-courses col-xl-6 col-md-6 col-md-6 mt-3 mb-5'>
                                                            {/* <a href = {course.live_link} className='text-decoration-none' target='_blank' rel="noreferrer"
                                                            // onClick={() => getSignature(course.live_number, course.live_password)}
                                                            > */}
                                                            <div style={{ border: '1px solid #dde7f3', borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}>
                                                                <img style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} width={600} src={course.image} alt={course.title} className='img-fluid' loading="lazy" />
                                                                <div className="bg-white py-4">
                                                                    <h3 style={{ fontSize: '15px', lineHeight: '24px', fontWeight: '600', color: '#354895' }} className='px-3 text-center'>{course.title}</h3>
                                                                    {/* <h4 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#b94a8f' }} className='text-center px-3 price mt-2'>
                                                                        <span style={{ color: '#354895', fontSize: '14px' }}>সময়: </span>{course.class_time}
                                                                    </h4> */}
                                                                    {/* <Countdown
                                                                        deadline={course.next_batch_eng}
                                                                        text={'কোর্স শুরু হতে সময় বাকি'}
                                                                    /> */}
                                                                </div>

                                                                <div style={{ justifyContent: 'space-between', backgroundColor: 'rgb(236,238,255)' }} className="d-flex p-2">
                                                                    {
                                                                        userPhoneData?.name ?      
                                                                        // <button onClick={() => {
                                                                        //     // getSignature(course.live_number, course.live_password)
                                                                        // }}

                                                                        //     className='see-details'>জয়েন ক্লাস</button> 
                                                                        <a href={course.live_link} target='_blank' rel="noreferrer" className='see-details'
                                                                        // onClick={() => { window.scrollTo(0, 0); }}
                                                                        >জয়েন ক্লাস</a>
                                                                            :
                                                                            <button className='see-details-fade'><div className="spinner-border" style={{ height: '15px', width: '15px' }} role="status">
                                                                            </div> জয়েন ক্লাস</button>
                                                                    }
                                                                    {/* <button onClick={() => { 
                                                                        getSignature(course.live_number, course.live_password)}} className='see-details px-1'>জয়েন ক্লাস</button> */}
                                                                    <button onClick={() => {
                                                                        window.scrollTo(0, 0);
                                                                        navigate('/course/live/video/' + course.id)
                                                                    }} className='class-video px-1'>ক্লাস ভিডিও</button>
                                                                </div>
                                                            </div>
                                                            {/* </a> */}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        }
                                        {
                                            purchasedLiveCourses?.length === 0 &&
                                            <div className="">
                                                <p className='text-danger text-muted'>আপনি কোনো লাইভ কোর্সে ভর্তি হননি</p>
                                                <div className="">
                                                    <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='my-2 text-center'>
                                                        <button className='btn btn-danger ms-2'>
                                                            <Link to='/dashboard/live-course' className='text-white text-decoration-none mx-auto d-block'>লাইভ কোর্সসমূহ</Link>
                                                        </button>
                                                    </h2>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>

                                <div style={{ borderRadius: '10px' }} className="col-md-5 bg-white mt-4 dashboard-content-card d-flex justify-content-center">
                                    <div style={{ margin: 'auto' }}>
                                        <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='mt-3'>
                                            <img src={video} width={35} className='img-fluid me-2 mb-1' alt="video course" />
                                            ভিডিও কোর্স</h2>

                                        {
                                            purchasedVideoCourses?.length === 1 &&
                                            <div className="row justify-content-center">
                                                {purchasedVideoCourses?.map(course => {
                                                    return (
                                                        <div key={course.id} className='featured-courses col-xl-12 col-md-12 col-md-12 my-5'>
                                                            <a className='text-decoration-none' onClick={() => { window.scrollTo(0, 0); }} href={course.zoom_link} target='_blank' rel="noreferrer">
                                                                <div style={{ border: '1px solid #dde7f3', borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}>
                                                                    <img style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} width={600} src={course.image} alt={course.title} className='img-fluid' loading="lazy" />
                                                                    <div className="bg-white py-4">
                                                                        <h3 style={{ fontSize: '15px', lineHeight: '24px', fontWeight: '600', color: '#354895' }} className='px-3 text-center'>{course.title}</h3>
                                                                        {/* <h4 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#b94a8f' }} className='text-center px-3 price mt-2'>
                                                                            <span style={{ color: '#354895', fontSize: '14px' }}>সময়: </span>{course.class_time}
                                                                        </h4> */}
                                                                    </div>

                                                                    <div style={{ justifyContent: 'space-between', backgroundColor: 'rgb(236,238,255)' }} className="d-flex py-3">
                                                                        <button onClick={() => { window.scrollTo(0, 0); }} className='see-details mx-auto d-block'>জয়েন ক্লাস</button>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        }

                                        {
                                            purchasedVideoCourses?.length > 1 &&
                                            <div className="row justify-content-center">
                                                {purchasedVideoCourses?.map(course => {
                                                    return (
                                                        <div key={course.id} className='featured-courses col-xl-6 col-md-6 col-md-6 my-5'>
                                                            <a className='text-decoration-none' onClick={() => { window.scrollTo(0, 0); }} href={course.zoom_link} target='_blank' rel="noreferrer">
                                                                <div style={{ border: '1px solid #dde7f3', borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}>
                                                                    <img style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} width={600} src={course.image} alt={course.title} className='img-fluid' loading="lazy" />
                                                                    <div className="bg-white py-4">
                                                                        <h3 style={{ fontSize: '15px', lineHeight: '24px', fontWeight: '600', color: '#354895' }} className='px-3 text-center'>{course.title}</h3>
                                                                        {/* <h4 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#b94a8f' }} className='text-center px-3 price mt-2'>
                                                                            <span style={{ color: '#354895', fontSize: '14px' }}>সময়: </span>{course.class_time}
                                                                        </h4> */}
                                                                    </div>

                                                                    <div style={{ justifyContent: 'space-between', backgroundColor: 'rgb(236,238,255)' }} className="d-flex py-3">
                                                                        <button onClick={() => { window.scrollTo(0, 0); }} className='see-details mx-auto d-block'>জয়েন ক্লাস</button>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        }
                                        {
                                            purchasedVideoCourses?.length === 0 &&
                                            <div className="">
                                                <p className='text-danger text-muted'>আপনি কোনো ভিডিও কোর্সে ভর্তি হননি</p>
                                                <div className="">
                                                    <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='my-2 text-center'>
                                                        <button className='btn btn-warning ms-2'>
                                                            <Link to='/dashboard/video-course' className='text-black text-decoration-none mx-auto d-block'>ভিডিও কোর্সসমূহ</Link>
                                                        </button>
                                                    </h2>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                </div>

                                <div style={{ borderRadius: '10px', marginBottom: '5rem' }} className="col-md-5 bg-white mt-4 dashboard-content-card d-flex justify-content-center">
                                    <div style={{ margin: 'auto' }}>
                                        <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='mt-3'>
                                            <img src={payment} width={40} className='img-fluid me-2 mb-2' alt="Billing" />
                                            পেমেন্ট</h2>

                                        {
                                            payments?.length === 0 &&

                                            <div className="">
                                                <p className='text-danger text-muted'>আপনার কোনো পেমেন্ট ইতিহাস নেই </p>

                                                <div className="">

                                                    <div className="">
                                                        <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='my-2 text-center'>

                                                            <button className='btn btn-danger'><Link to='/dashboard/video-course' className='text-white text-decoration-none mx-auto d-block'>লাইভ কোর্সসমূহ</Link></button></h2>
                                                    </div>

                                                    <div className="">
                                                        <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='my-2 text-center'>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="col-sm-2"><hr /></div>
                                                                <div className="mx-2"><p className='fs-6'>অথবা</p></div>
                                                                <div className="col-sm-2"><hr /></div>
                                                            </div>

                                                            <button className='btn btn-warning'><Link to='/dashboard/video-course' className='text-black text-decoration-none mx-auto d-block'>ভিডিও কোর্সসমূহ</Link></button></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {
                                            payments?.length > 0 &&
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="">
                                                    <h2 style={{ fontSize: '16px', lineHeight: '22px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }}>Courses <br />{payments.length}</h2>
                                                </div>
                                                <div className="ps-5">
                                                    <h2 style={{ fontSize: '16px', lineHeight: '22px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }}>Total Paid <br />{payments.reduce((a, b) => { return a + parseInt(b.amount); }, 0)}</h2>
                                                    <h2 style={{ fontSize: '16px', lineHeight: '22px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }}>Total Due <br />{payments.reduce((a, b) => { return a + parseInt(b.remaining_course_fee); }, 0)}</h2>
                                                </div>

                                                {/* {
                                                payments.map(pd => {
                                                    return (
                                                        <div style={{border:'1px solid grey', borderRadius:'15px'}} className="d-flex justify-content-center align-items-center my-2 p-2" key={pd._id}>
                                                            <p>Course Name: {pd.course}</p>
                                                            <p>Paid: {pd.amount}</p>
                                                            <p>Remaining Course Fee: {pd.remaining_course_fee}</p>
                                                        </div>
                                                    )
                                                })
                                            } */}
                                            </div>
                                        }
                                    </div>
                                </div>

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

export default Dashboard;