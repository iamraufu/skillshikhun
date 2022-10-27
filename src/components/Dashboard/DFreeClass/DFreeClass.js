import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import HeroDemo from '../../DemoClass/HeroDemo';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';
// import video_library from '../../../images/dashboard/video_library.svg';
import courseData from '../../../data/course/courseData';

// import { ZoomMtg } from '@zoomus/websdk';
import { useNavigate } from 'react-router-dom';
// import Countdown from '../../Countdown/Countdown';

// ZoomMtg.setZoomJSLib('https://source.zoom.us/2.4.5/lib', '/av');
// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareWebSDK();
// ZoomMtg.i18n.load('en-US');
// ZoomMtg.i18n.reload('en-US');

const DFreeClass = () => {

    const navigate = useNavigate();
    const phone = localStorage.getItem('phone');
    const [demoClasses, setDemoClasses] = useState([]);
    const [freeClasses, setFreeClasses] = useState([]);
    const [userPhoneData, setUserPhoneData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://backend-skill-shikhun.herokuapp.com/demoClasses/phone/${phone}`);
            const data = await res.json();
            setDemoClasses(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://backend-skill-shikhun.herokuapp.com/users/userBy/phone/${phone}`);
            const data = await res.json();
            setUserPhoneData(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        const demo_classes = demoClasses.map(dm => dm.category).filter(category => courseData.map(cd => cd.name).includes(category))
        setFreeClasses(courseData.filter(course => demo_classes.includes(course.name)))
    }, [demoClasses])

    // let signatureEndpoint = 'https://backend-skill-shikhun.herokuapp.com/liveClass'
    // let sdkKey = '87rXfpYIpyQYMZSrjmcYKvF72lEqinAuroje'
    // let meetingNumber = ''
    // let role = 0
    // let userName = userPhoneData.name
    // let userEmail = userPhoneData.email
    // let passWord = ''
    // let leaveUrl = 'https://www.skillshikhun.com/dashboard'
    // let registrantToken = ''

    // eslint-disable-next-line
    // async function getSignature(meetingNumber, password) {
    //     // e.preventDefault();

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
    //         }).catch(error => {
    //             console.error('Error:', error)
    //         })
    // }

    // start Meeting
    // async function startMeeting(signature, meetingNumber, password) {

    //     document.getElementById('zmmtg-root').style.display = 'block'
    //     document.getElementById('free_class_container').style.display = 'none'

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

                        <div className="row justify-content-center align-items-center mb-5">
                            <h2 className='fs-5 fw-bold my-2'>ডেমো ক্লাসের রেকর্ডিংসমূহ</h2>
                            {
                                freeClasses.map(course =>
                                    <div key={course.id} onClick={()=>{
                                        navigate(`/dashboard/previous/free-class/${course.id}`)
                                    }} style={{ borderRadius: '10px' }} className="col-sm-5 bg-white m-2 class-recording-course-items">
                                        <div className="row justify-content-center align-items-center mt-2">

                                            <div className="col-md-6">
                                                <img src={course.image} className='img-fluid' alt={course.name} />
                                            </div>

                                            <div className="col-md-6 pt-2">
                                                <h2 className='fs-6 fw-bold'>{course.title}</h2>
                                                <h2 className='fs-6'>{course.course_instructor}</h2>
                                                <h2 style={{backgroundColor:'#f1f1f1', borderRadius: '15px'}} className='fs-6 float-end p-2'><span className='fw-bold'>{course.free_video_count}</span> টি ভিডিও</h2>
                                            </div>
                                        </div>
                                    </div>
                                )}
                        </div>

                            <div style={{ borderRadius: '10px', marginBottom: '5rem' }} className="col-md-5 bg-white mt-5 dashboard-content-card">
                                <div style={{ margin: 'auto' }}>
                                    <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='mt-3'>
                                    ক্লাসের ভিডিও দেখুন    </h2>
                                    {
                                        userPhoneData?.email ?
                                            <div className="row">
                                                <HeroDemo />
                                            </div>
                                            :
                                            <div className="spinner-grow mx-auto d-block my-5" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                    }
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