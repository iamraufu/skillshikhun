import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import DNavbar from './DNavbar/DNavbar';
import Sidebar from './Sidebar/Sidebar.js';
// import AwesomeSlider from 'react-awesome-slider';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import free_class from '../../images/dashboard/free_class.svg'
import live from '../../images/dashboard/live.svg'
import video from '../../images/dashboard/video.svg';
import payment from '../../images/dashboard/payment.svg';
import Menu from './Menu/Menu';

const Dashboard = () => {

    const phone = localStorage.getItem('phone');
    const [userPhoneData, setUserPhoneData] = useState({})
    const [demoClasses, setDemoClasses] = useState([]);
    const [liveCourses, setLiveCourses] = useState([]);
    const [videoCourses, setVideoCourses] = useState([]);
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
            const res = await fetch(`https://skillshikhun.herokuapp.com/demoClasses/phone/${phone}`);
            const data = await res.json();
            setDemoClasses(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://skillshikhun.herokuapp.com/orders/user/phone/${phone}`);
            const data = await res.json();
            setLiveCourses(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://skillshikhun.herokuapp.com/videoCourses/phone/${phone}`);
            const data = await res.json();
            setVideoCourses(data);
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

    // const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div>
            <DNavbar />
            <div className="container-fluid">
                <div style={{ marginTop: '4rem' }} className="row my-5">

                    {/* left sidebar */}
                    <div style={{ top: '0px' }} className="col-xl-2 col-lg-3 col-md-4 d-none d-lg-block position-sticky">
                        <Sidebar />
                    </div>

                    {/* right container */}
                    <div style={{ minHeight: '800px', backgroundColor: '#f3f5f9', borderRadius: '15px' }} className="col-xl-9 col-lg-9 col-md-12 py-5">

                        {/* user info goes here */}
                        <div className="col-sm-6">
                            <div className="user-info mx-5 pt-3">
                                {
                                    userPhoneData?.phone ?
                                        <h1 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className=''>স্বাগতম, <span style={{ fontSize: '24px', lineHeight: '36px', color: '#b94a8f', fontWeight: '600' }}>{userPhoneData.name}</span></h1>
                                        :
                                        <h1 style={{ paddingTop: '4rem', fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className=''><div className="spinner-grow" role="status">
                                            <span className="visually-hidden"></span>
                                        </div> লোড হচ্ছে ...<span style={{ fontSize: '24px', lineHeight: '36px', color: '#b94a8f', fontWeight: '600' }}></span></h1>
                                }
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h2 style={{ fontSize: '18px', lineHeight: '31px', color: '#495082', fontWeight: '500' }} className='mx-5'>
                                ক্লাসের বিস্তারিত সব জেনে নিন আপনার <span style={{ color: '#653dae' }} className='fw-bold'>Skill শিখুন</span> এর ড্যাশবোর্ডে</h2>
                        </div>


                        <div className="row justify-content-center">

                            <div style={{ borderRadius: '10px' }} className="col-md-5 bg-white mt-5 dashboard-content-card d-flex justify-content-center">
                                <div style={{ margin: 'auto' }}>
                                    <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='mt-3'>
                                        <img src={free_class} width={50} className='img-fluid me-2' alt="free class" />
                                        আপনার ফ্রি ক্লাস সমূহ</h2>

                                    <div className="">
                                        {demoClasses?.length > 0 ?
                                            <div className="row justify-content-center">
                                                {demoClasses?.map(course => {
                                                    return (
                                                        <div key={course._id} className='col-md-5 my-3'>
                                                            <Link className='text-decoration-none' to='/'>
                                                                <div style={{ border: '1px solid #dde7f3' }}>

                                                                    <div style={{ minHeight: '180px' }} className="bg-white py-3">
                                                                        <h3 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#354895' }} className='px-3'><span style={{ color: '#b94a8f' }}>{course.category}</span>
                                                                            <br />তারিখ - <small>{course.class_date}</small></h3>
                                                                        <h4 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#069654' }} className=' px-3 price mt-2'>
                                                                            <span style={{ color: '#354895' }}>সময়: </span>{course.class_time}<small style={{ color: '#354895' }}></small>
                                                                        </h4>
                                                                    </div>

                                                                    <div style={{ justifyContent: 'center', backgroundColor: 'rgb(236,238,255)' }} className="d-flex py-3">
                                                                        <button className='see-details w-100 mx-1' to=''>জয়েন ক্লাস</button>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            :
                                            <div className="ms-3 justify-content-center">
                                                <p className='mt-2 text-center text-muted'>আপনি কোনো ফ্রি ক্লাস রেজিস্ট্রেশন করেননি | ৩টি ফ্রি ক্লাস পেতে এখানে ক্লিক করুন</p>
                                                <button className='btn btn-info text-white my-3 mx-auto d-block'><Link to='/dashboard/free-class' className='text-white text-decoration-none'>ফ্রি ক্লাস</Link></button>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div style={{ borderRadius: '10px' }} className="col-md-5 bg-white mt-5 dashboard-content-card d-flex justify-content-center">
                                <div style={{ margin: 'auto' }}>
                                    <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='mt-3'>
                                        <img src={live} width={45} className='img-fluid me-2' alt="video course" />
                                        লাইভ কোর্স</h2>

                                    {
                                        liveCourses?.length > 0 ?
                                            <div className="">
                                                {liveCourses.map((course, index) =>
                                                    <div key={index}>
                                                        <h2>{course.name}</h2>
                                                    </div>
                                                )}
                                            </div> :
                                            <div className="ms-3">
                                                <p className='ms-3 text-danger text-muted'>আপনি কোনো লাইভ কোর্সে ভর্তি হননি</p>
                                                <div className="">
                                                    <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='my-2 text-center'>
                                                        <button className='btn btn-danger ms-2'>
                                                            <Link to='/dashboard/live-course' className='text-white text-decoration-none'>লাইভ কোর্সসমূহ</Link>
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
                                        videoCourses?.length > 0 ?
                                            <div className="">
                                                {videoCourses.map((course, index) =>
                                                    <div key={index}>
                                                        <h2>{course.name}</h2>
                                                    </div>
                                                )}
                                            </div> :
                                            <div className="ms-3">
                                                <p className='ms-3 text-danger text-muted'>আপনি কোনো ভিডিও কোর্সে ভর্তি হননি</p>

                                                <div className="">
                                                    <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='my-2 text-center'>
                                                        <button className='btn btn-warning ms-2'><Link to='/dashboard/video-course' className='text-black text-decoration-none'>ভিডিও কোর্সসমূহ</Link>
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
                                        <img src={payment} width={40} className='img-fluid me-2 mb-2' alt="Billing" />
                                        পেমেন্ট</h2>

                                    {
                                        payments?.length > 0 ?
                                            <div className="">
                                                {payments.map((payment, index) =>
                                                    <div key={index}>
                                                        <h2>{payment.details}</h2>
                                                    </div>
                                                )}
                                            </div> :
                                            <div className="ms-3">
                                                <p className='ms-3 text-danger text-muted'>আপনার কোনো পেমেন্ট ইতিহাস নেই </p>

                                                <div className="ms-3">

                                                    <div className="">
                                                        <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='my-2 text-center'>

                                                            <button className='btn btn-danger ms-2'><Link to='/dashboard/live-course' className='text-white text-decoration-none'>লাইভ কোর্সসমূহ</Link></button></h2>
                                                    </div>

                                                    <div className="">
                                                        <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='my-2 text-center'>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="col-sm-2"><hr /></div>
                                                                <div className="mx-2"><p className='fs-6'>অথবা</p></div>
                                                                <div className="col-sm-2"><hr /></div>
                                                            </div>

                                                            <button className='btn btn-warning ms-2'><Link to='/dashboard/video-course' className='text-black text-decoration-none'>ভিডিও কোর্সসমূহ</Link></button></h2>
                                                    </div>

                                                </div>

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
    );
};

export default Dashboard;