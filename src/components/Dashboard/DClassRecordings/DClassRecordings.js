import React, { useEffect, useState } from 'react';
import './DClassRecordings.css';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';
import courseData from '../../../data/course/courseData';
import { useNavigate } from 'react-router-dom';
import live from '../../../images/dashboard/live.svg';
import Swal from 'sweetalert2';

const DClassRecordings = () => {

    const phone = localStorage.getItem('phone');
    const navigate = useNavigate();
    // const [demoClasses, setDemoClasses] = useState([]);
    // const [freeClasses, setFreeClasses] = useState([]);
    const [purchasedLiveCourses, setPurchasedLiveCourses] = useState([]);
    const [payments, setPayments] = useState([]);
    // const course = courseData.find(course => course.id === courseId);
    // const category = course.route.slice(1, course.route.length);

    // fetching user paid info
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api-skillshikhun.herokuapp.com/api/get-payments/${phone}`);
            const data = await res.json();
            setPayments(data);
        }
        fetchData();
    }, [phone])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch(`https://api-skillshikhun.herokuapp.com/demoClasses/phone/${phone}`);
    //         const data = await res.json();
    //         setDemoClasses(data);
    //     }
    //     fetchData();
    // }, [phone])

    // useEffect(() => {
    //     const demo_classes = demoClasses.map(dm => dm.category).filter(category => courseData.map(cd => cd.name).includes(category))
    //     setFreeClasses(courseData.filter(course => demo_classes.includes(course.name)))
    // }, [demoClasses])

    useEffect(() => {
        const live_courses = payments.map(pm => pm.course).filter(course => courseData.map(cd => cd.name).includes(course))
        setPurchasedLiveCourses(courseData.filter(course => live_courses.includes(course.name)))
    }, [payments])

    const [webDevelopment, setWebDevelopment] = useState([])
    const [digitalMarketing, setDigitalMarketing] = useState([]);
    const [videoEditing, setVideoEditing] = useState([]);
    const [graphicsDesign, setGraphicsDesign] = useState([]);
    const [shobarJnnoFreelancing, setShobarJnnoFreelancing] = useState([]);

    // Web Development
    useEffect(() => {
        setWebDevelopment(payments.filter(payment => payment.course === 'Web Development'))
    }, [payments])

    // Digital Marketing
    useEffect(() => {
        setDigitalMarketing(payments.filter(payment => payment.course === 'Digital Marketing'))
    }, [payments])

    // Video Editing
    useEffect(() => {
        setVideoEditing(payments.filter(payment => payment.course === 'Video Editing'))
    }, [payments])

    // Graphics Design
    useEffect(() => {
        setGraphicsDesign(payments.filter(payment => payment.course === 'Graphics Design'))
    }, [payments])

    // Shobar Jnno Freelancing
    useEffect(() => {
        setShobarJnnoFreelancing(payments.filter(payment => payment.course === 'সবার জন্য ফ্রিল্যান্সিং'))
    }, [payments])

    const duePayAlert = () => {
        Swal.fire({
            icon: 'info',
            title: 'অনুগ্রহ করে আপনার বকেয়া ফী পরিশোধ করুন',
            text: `লাইভ ক্লাসে নিরবচ্ছিন্ন যোগদান এবং ক্লাস রেকর্ডিং নিশ্চিত করতে, অনুগ্রহ করে আপনার বকেয়া কোর্স ফি প্রদান করুন`,
            confirmButtonText: 'ফি প্রদান করুন',
            confirmButtonColor: '#198754',
        })
        .then((result) => {
            if (result.isConfirmed) {
                navigate('/dashboard/payment-history')
                window.scrollTo(0,0)
            }
        })
    }

    return (
        <div>
            <DNavbar />
            <div
                style={{ paddingTop: '2rem' }}
                className='container-fluid pt-5 dashboard-class-recordings-container'>
                <div
                    // style={{ marginTop: '5rem' }} 
                    className="row">

                    {/* left sidebar */}
                    <div className="col-xl-2 col-lg-3 col-md-4 d-none d-lg-block position-sticky">
                        <Sidebar />
                    </div>

                    {/* right container */}
                    <div style={{ minHeight: '800px', backgroundColor: '#f3f5f9', borderRadius: '15px' }} className="col-xl-9 col-lg-9 col-md-12 p-5 mb-5">

                        <div className="row justify-content-center align-items-center mb-5">
                            {/* <h2 className='fs-5 fw-bold my-2'>ডেমো ক্লাসের রেকর্ডিংসমূহ</h2>
                            {
                                freeClasses.map(course =>
                                    <div key={course.id} onClick={() => {
                                        navigate(`/dashboard/previous/free-class/${course.id}`)
                                    }} style={{ borderRadius: '10px' }} className="col-sm-5 bg-white m-2 class-recording-course-items">
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
                                )} */}

                            <h2 className='fs-5 fw-bold my-2'><img src={live} width={40} alt="class recordings" />লাইভ ক্লাসের রেকর্ডিং সমূহ</h2>
                            {/* {
                                purchasedLiveCourses.map(course =>
                                    <div className="mt-3">
                                        <button onClick={() => {
                                            window.scrollTo(0, 0);
                                            navigate('/course/live/video/' + course.id)
                                        }} className='class-video'>{course.name}</button>
                                    </div>
                            )} */}
                            {
                                purchasedLiveCourses.length > 0 ?
                                    purchasedLiveCourses.map(course =>
                                        <div key={course.id}
                                            // onClick={() => navigate('/course/live/video/' + course.id)} 
                                            style={{ borderRadius: '10px' }} className="col-sm-5 bg-white m-2 class-recording-course-items">
                                            <div className="row justify-content-center align-items-center mt-2">

                                                <div className="col-md-6">
                                                    <img src={course.image} className='img-fluid' alt={course.name} />
                                                </div>

                                                <div className="col-md-6 pt-2">
                                                    <h2 className='fs-6 fw-bold'>{course.title}</h2>
                                                    <h2 className='fs-6'>{course.course_instructor}</h2>
                                                    {/* <button className='class-video w-100 my-2'>ভিডিও দেখুন</button> */}

                                                    {/* Web Development */}
                                                    {
                                                        course.name === 'Web Development' ?
                                                            webDevelopment[0]?.payment_status === 'PAID' ?
                                                                webDevelopment[0].batch === '1' ?
                                                                    <button onClick={() => {
                                                                        window.scrollTo(0, 0);
                                                                        navigate('/course/live/video/' + course.id)
                                                                    }} className='class-video w-100 my-2'>ভিডিও দেখুন</button>
                                                                    :
                                                                    <button onClick={() => {
                                                                        window.scrollTo(0, 0);
                                                                        navigate('/course/live/video/batch-2/' + course.id)
                                                                    }} className='class-video w-100 my-2'>ভিডিও দেখুন</button>
                                                                :
                                                                <button onClick={() => duePayAlert()} className='class-video w-100 my-2'>ভিডিও দেখুন</button>
                                                            : null
                                                    }

                                                    {/* Digital Marketing */}
                                                    {
                                                        course.name === 'Digital Marketing' ?
                                                            digitalMarketing[0]?.payment_status === 'PAID' ?
                                                                digitalMarketing[0].batch === '1' ?
                                                                    <button onClick={() => {
                                                                        window.scrollTo(0, 0);
                                                                        navigate('/course/live/video/' + course.id)
                                                                    }} className='class-video w-100 my-2'>ভিডিও দেখুন</button>
                                                                    :
                                                                    <button onClick={() => {
                                                                        window.scrollTo(0, 0);
                                                                        navigate('/course/live/video/batch-2/' + course.id)
                                                                    }} className='class-video w-100 my-2'>ভিডিও দেখুন</button>
                                                                :
                                                                <button onClick={() => duePayAlert()} className='class-video w-100 my-2'>ভিডিও দেখুন</button>
                                                            : null
                                                    }

                                                    {/* Video Editing */}
                                                    {
                                                        course.name === 'Video Editing' ?
                                                            videoEditing[0]?.payment_status === 'PAID' ?
                                                                videoEditing[0].batch === '1' ?
                                                                    <button onClick={() => {
                                                                        window.scrollTo(0, 0);
                                                                        navigate('/course/live/video/' + course.id)
                                                                    }} className='class-video w-100 my-2'>ভিডিও দেখুন</button>
                                                                    :
                                                                    <button onClick={() => {
                                                                        window.scrollTo(0, 0);
                                                                        navigate('/course/live/video/batch-2/' + course.id)
                                                                    }} className='class-video w-100 my-2'>ভিডিও দেখুন</button>
                                                                :
                                                                <button onClick={() => duePayAlert()} className='class-video w-100 my-2'>ভিডিও দেখুন</button>
                                                            : null
                                                    }

                                                    {/* Graphics Design */}
                                                    {
                                                        course.name === 'Graphics Design' ?
                                                            graphicsDesign[0]?.payment_status === 'PAID' ?
                                                                graphicsDesign[0].batch === '1' ?
                                                                    <button onClick={() => {
                                                                        window.scrollTo(0, 0);
                                                                        navigate('/course/live/video/' + course.id)
                                                                    }} className='class-video w-100 my-2'>ভিডিও দেখুন</button>
                                                                    :
                                                                    <button onClick={() => {
                                                                        window.scrollTo(0, 0);
                                                                        navigate('/course/live/video/batch-2/' + course.id)
                                                                    }} className='class-video w-100 my-2'>ভিডিও দেখুন</button>
                                                                :
                                                                <button onClick={() => duePayAlert()} className='class-video w-100 my-2'>ভিডিও দেখুন</button>
                                                            : null
                                                    }

                                                    {/* সবার জন্য ফ্রিল্যান্সিং */}
                                                    {
                                                        course.name === 'সবার জন্য ফ্রিল্যান্সিং' ?
                                                            shobarJnnoFreelancing[0]?.payment_status === 'PAID' ?
                                                                shobarJnnoFreelancing[0].batch === '1' ?
                                                                    <button onClick={() => {
                                                                        window.scrollTo(0, 0);
                                                                        navigate('/course/live/video/' + course.id)
                                                                    }} className='class-video w-100 my-2'>ভিডিও দেখুন</button>
                                                                    :
                                                                    <button onClick={() => {
                                                                        window.scrollTo(0, 0);
                                                                        navigate('/course/live/video/batch-2/' + course.id)
                                                                    }} className='class-video w-100 my-2'>ভিডিও দেখুন</button>
                                                                :
                                                                <button onClick={() => duePayAlert()} className='class-video w-100 my-2'>ভিডিও দেখুন</button>
                                                            : null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    :
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="spinner-grow text-dark me-1" role="status"></div>
                                        <p className='mt-3 fw-bold'>Loading...</p>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    );
};

export default DClassRecordings;