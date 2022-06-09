import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroDemo from '../../DemoClass/HeroDemo';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';

const DFreeClass = () => {

    const phone = localStorage.getItem('phone');
    const [demoClasses, setDemoClasses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:5000/demoClasses/phone/${phone}`);
            const data = await res.json();
            setDemoClasses(data);
        }
        fetchData();
    }, [phone])

    return (
        <div className="">
            <DNavbar />
            <div style={{ marginTop: '5rem' }} className='container-fluid mt-5'>
                <div style={{ marginTop: '5rem' }} className="row">

                    {/* left sidebar */}
                    <div className="col-xl-2 col-lg-3 col-md-4 d-none d-lg-block position-sticky">
                        <Sidebar />
                    </div>

                    {/* right container */}
                    <div style={{ minHeight: '800px', backgroundColor: '#f3f5f9', borderRadius: '15px' }} className="col-xl-9 col-lg-9 col-md-12 py-5 px-5">
                        <div className="row justify-content-center align-items-center">

                            <div style={{ borderRadius: '10px' }} className="col-md-5 bg-white mt-5 dashboard-content-card">
                                <div style={{ margin: 'auto' }}>

                                    {
                                        demoClasses?.length === 1 &&
                                        <div className="row justify-content-center">
                                            <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='mt-3'>আপনার ফ্রি ক্লাস সমূহ</h2>
                                            {demoClasses?.map(course => {
                                                return (
                                                    <div key={course._id} className='col-xl-8 col-md-12 my-3'>
                                                        <Link className='text-decoration-none' to='/'>
                                                            <div style={{ border: '1px solid #dde7f3' }}>

                                                                <div style={{ minHeight: '180px' }} className="bg-white py-3">
                                                                    <h3 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#354895' }} className='px-3'><span style={{ color: '#b94a8f' }}>{course.category}</span>
                                                                        <br />তারিখ - <small>{course.class_date}</small></h3>
                                                                    <h4 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#069654' }} className=' px-3 price mt-2'>
                                                                        <span style={{ color: '#354895', fontSize: '14px' }}>সময়: </span>{course.class_time}<small style={{ color: '#354895' }}></small>
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
                                    }

                                    {demoClasses?.length > 1 &&
                                        <div className="row justify-content-center">
                                            <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='mt-3'>আপনার ফ্রি ক্লাস সমূহ</h2>
                                            {demoClasses?.map(course => {
                                                return (
                                                    <div key={course._id} className='featured-courses col-md-6 my-3'>
                                                        <Link className='text-decoration-none' to='/'>
                                                            <div style={{ border: '1px solid #dde7f3' }}>

                                                                <div style={{ minHeight: '180px' }} className="bg-white py-3">
                                                                    <h3 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#354895' }} className='px-3'><span style={{ color: '#b94a8f' }}>{course.category}</span>
                                                                        <br />তারিখ - <small>{course.class_date}</small></h3>
                                                                    <h4 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#069654' }} className=' px-3 price mt-2'>
                                                                        <span style={{ color: '#354895', fontSize: '14px' }}>সময়: </span>{course.class_time}<small style={{ color: '#354895' }}></small>
                                                                    </h4>
                                                                </div>

                                                                <div style={{ justifyContent: 'center', backgroundColor: 'rgb(236,238,255)' }} className="d-flex py-3">
                                                                    <button className='see-details w-100 mx-1'>জয়েন ক্লাস</button>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }

                                    {
                                        demoClasses?.length === 0 && 
                                            <p className='mt-3 text-center text-danger'>আপনি কোনো ফ্রি ক্লাস রেজিস্ট্রেশন করেননি </p>
                                    }
                                </div>
                            </div>

                            <div style={{ borderRadius: '10px', marginBottom:'5rem' }} className="col-md-5 bg-white mt-5 dashboard-content-card">
                                <div style={{ margin: 'auto' }}>
                                    <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='mt-3'>
                                    ৩টি ফ্রি ক্লাস করে দেখুন</h2>
                                    <div className="row">
                                        <HeroDemo />
                                        </div>
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

export default DFreeClass;