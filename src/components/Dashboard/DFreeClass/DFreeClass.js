import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import HeroDemo from '../../DemoClass/HeroDemo';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';
import video_library from '../../../images/dashboard/video_library.svg';
import courseData from '../../../data/course/courseData';

import { ZoomMtg } from '@zoomus/websdk';
import { useNavigate } from 'react-router-dom';

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.4.5/lib', '/av');
ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');

const DFreeClass = () => {

    const navigate = useNavigate();
    const phone = localStorage.getItem('phone');
    const [demoClasses, setDemoClasses] = useState([]);
    const [freeClasses, setFreeClasses] = useState([]);
    const [userPhoneData, setUserPhoneData] = useState({})

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
            const res = await fetch(`https://skillshikhun.herokuapp.com/users/phone/${phone}`);
            const data = await res.json();
            setUserPhoneData(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        const demo_classes = demoClasses.map(dm => dm.category).filter(category => courseData.map(cd => cd.name).includes(category))
        setFreeClasses(courseData.filter(course => demo_classes.includes(course.name)))
    }, [demoClasses])

    let signatureEndpoint = 'https://skillshikhun.herokuapp.com/liveClass'
    let sdkKey = '87rXfpYIpyQYMZSrjmcYKvF72lEqinAuroje'
    // let meetingNumber = ''
    let role = 0
    let userName = userPhoneData.name
    let userEmail = userPhoneData.email
    // let passWord = ''
    let leaveUrl = 'https://www.skillshikhun.com/dashboard'
    let registrantToken = ''

    // eslint-disable-next-line
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
                console.error('Error:', error)
            })
    }

    async function startMeeting(signature, meetingNumber, password ) {

        document.getElementById('zmmtg-root').style.display = 'block'
        document.getElementById('free_class_container').style.display = 'none'

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
        <div id='free_class_container' className="">
            <DNavbar />
            <div 
            style={{ paddingTop: '2rem' }} 
            className='container-fluid mt-5'>
                <div 
                // style={{ marginTop: '5rem' }} 
                className="row">

                    {/* left sidebar */}
                    <div className="col-xl-2 col-lg-3 col-md-4 d-none d-lg-block position-sticky">
                        <Sidebar />
                    </div>

                    {/* right container */}
                    <div style={{ minHeight: '800px', backgroundColor: '#f3f5f9', borderRadius: '15px' }} className="col-xl-9 col-lg-9 col-md-12 py-5 px-5">
                        <div className="row justify-content-center align-items-center">

                            <div style={{ borderRadius: '10px' }} className="col-md-5 bg-white dashboard-content-card">
                                <div style={{ margin: 'auto' }}>

                                    {
                                        demoClasses?.length === 1 &&
                                        <div className="row justify-content-center">
                                            <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='mt-3'>আপনার ফ্রি ক্লাস সমূহ</h2>
                                            {demoClasses?.map(course => {
                                                return (
                                                    <div key={course._id} className='col-xl-8 col-md-12 my-3'>
                                                        {/* <Link className='text-decoration-none' to='/'> */}
                                                            <div style={{ border: '1px solid #dde7f3' }}>

                                                                <div 
                                                                // style={{ minHeight: '120px' }} 
                                                                className="bg-white py-3">
                                                                    <h3 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#354895' }} className='px-3'><span style={{ color: '#b94a8f' }}>{course.category}</span>
                                                                        <br />তারিখ - <small>{course.class_date}</small></h3>
                                                                    <h4 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#069654' }} className=' px-3 price mt-2'>
                                                                        <span style={{ color: '#354895', fontSize: '14px' }}>সময়: </span>{course.class_time}<small style={{ color: '#354895' }}></small>
                                                                    </h4>
                                                                </div>

                                                                {/* <div style={{ justifyContent: 'center', backgroundColor: 'rgb(236,238,255)' }} className="d-flex py-3">
                                                                {
                                                                        userPhoneData?.name ? <button onClick={() => getSignature(course.free_number, course.free_password)} className='see-details w-100 mx-1'>জয়েন ক্লাস</button> : 
                                                                            <button className='see-details-fade w-100'><div className="spinner-border" style={{height:'15px', width:'15px'}} role="status">
                                                                          </div> জয়েন ক্লাস</button>
                                                                    }
                                                                </div> */}
                                                            </div>
                                                        {/* </Link> */}
                                                        {/* <p className='text-center mt-2 text-primary'>অথবা ভিডিও দেখুন</p>
                                                            <div onClick={()=> navigate('/dashboard/previous/free-class/' + course.id)} style={{ backgroundColor: '#f1f1f1', borderRadius: '15px', cursor:'pointer', fontSize:'14px', boxShadow: '0 5px 5px #c4c4c44d' }} className="p-3 text-center m-3"><img src={video_library} width={20} alt={course.title} /> {course.title}</div> */}
                                                    </div>
                                                )
                                            })}

{
                                                freeClasses.map(course=> 
                                                    <div key={course.id} style={{ justifyContent: 'center',minHeight:'150px'
                                                    // , backgroundColor: 'rgb(236,238,255)' 
                                                }} 
                                                    // className="d-flex py-3"
                                                    className='col-xl-8 py-3'
                                                    >
                                                    {
                                                            userPhoneData?.name ? 
                                                            <button onClick={() => getSignature(course.free_number, course.free_password)} 
                                                            className='see-details w-100 mx-1' 
                                                            >{course.title} জয়েন ক্লাস</button> 
                                                            : 
                                                            <button className='see-details-fade w-100'><div className="spinner-border" style={{height:'15px', width:'15px'}} role="status">
                                                              </div> {course.title} জয়েন ক্লাস</button>
                                                        }
                                                        <p className='text-center mt-2 text-primary'>অথবা ভিডিও দেখুন</p>
                                                        <div onClick={()=> navigate('/dashboard/previous/free-class/' + course.id)} style={{ backgroundColor: '#f1f1f1', borderRadius: '15px', cursor:'pointer', fontSize:'14px', boxShadow: '0 5px 5px #c4c4c44d', border:'1px solid lightgrey' }} className="p-3 text-center w-100"><img src={video_library} width={20} alt={course.title} /> {course.title}</div>
                                                    </div>    
                                                )
                                            }

                                        </div>
                                    }

                                    {demoClasses?.length > 1 &&
                                        <div className="row justify-content-center">
                                            <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='mt-3'>আপনার ফ্রি ক্লাস সমূহ</h2>

                                            {
                                                freeClasses.map(course=> 
                                                    <div key={course.id} style={{ justifyContent: 'center',minHeight:'150px'
                                                    , backgroundColor: 'rgb(236,238,255)' 
                                                }} 
                                                    // className="d-flex py-3"
                                                    className='col-md-6 py-3'
                                                    >
                                                    {
                                                            userPhoneData?.name ? 
                                                            <button style={{height:'80px'}} onClick={() => getSignature(course.free_number, course.free_password)} 
                                                            className='see-details w-100 mx-1' 
                                                            ><span style={{fontSize:'14px'}} className='fw-bold pe-2'>{course.title}</span> <span>জয়েন ক্লাস</span></button> 
                                                            : 
                                                            <button className='see-details-fade w-100'><div className="spinner-border" style={{height:'15px', width:'15px'}} role="status">
                                                              </div> {course.title} জয়েন ক্লাস</button>
                                                        }
                                                        <p className='text-center mt-2 text-primary'>অথবা ভিডিও দেখুন</p>
                                                        <div onClick={()=> navigate('/dashboard/previous/free-class/' + course.id)} style={{ backgroundColor: '#f1f1f1', borderRadius: '15px', cursor:'pointer', fontSize:'14px', boxShadow: '0 5px 5px #c4c4c44d', height:'100px', border:'1px solid lightgrey' }} className="p-3 text-center d-flex justify-content-center align-items-center w-100"><img src={video_library} width={20} alt={course.title} /> {course.title}</div>
                                                    </div>    
                                                )
                                            }
                                            <br />
                                            <hr />
                                            <br />
                                            {demoClasses?.map(course => {
                                                return (
                                                    <div key={course._id} className='featured-courses col-md-6 my-3'>
                                                        {/* <Link className='text-decoration-none' to='/'> */}
                                                            <div style={{ border: '1px solid #dde7f3' }}>

                                                                <div style={{ minHeight: '180px' }} className="bg-white py-3">
                                                                    <h3 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#354895' }} className='px-3'><span style={{ color: '#b94a8f' }}>{course.category}</span>
                                                                        <br />তারিখ - <small>{course.class_date}</small></h3>
                                                                    <h4 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#069654' }} className=' px-3 price mt-2'>
                                                                        <span style={{ color: '#354895', fontSize: '14px' }}>সময়: </span>{course.class_time}<small style={{ color: '#354895' }}></small>
                                                                    </h4>
                                                                </div>

                                                                {/* <div style={{ justifyContent: 'center', backgroundColor: 'rgb(236,238,255)' }} className="d-flex py-3">
                                                                {
                                                                        userPhoneData?.name ? <button onClick={() => getSignature(course.free_number, course.free_password)} className='see-details w-100 mx-1' to=''>{course.category} জয়েন ক্লাস</button> : 
                                                                            <button className='see-details-fade w-100'><div className="spinner-border" style={{height:'15px', width:'15px'}} role="status">
                                                                          </div> জয়েন ক্লাস</button>
                                                                    }
                                                                </div> */}
                                                            </div>
                                                        {/* </Link> */}
                                                        {/* <p className='text-center mt-2 text-primary'>অথবা ভিডিও দেখুন</p> */}
                                                            {/* <div onClick={()=> navigate('/dashboard/previous/free-class/' + course.id)} style={{ backgroundColor: '#f1f1f1', borderRadius: '15px', cursor:'pointer', fontSize:'14px', boxShadow: '0 5px 5px #c4c4c44d' }} className="p-3 text-center m-3"><img src={video_library} width={20} alt={course.title} /> {course.title}</div> */}
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
            <div id="meetingSDKElement">

            </div>
        </div>
    );
};

export default DFreeClass;