import React, { useEffect, useState } from 'react';
import './DClassRecordings.css';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';
import courseData from '../../../data/course/courseData';
import { useNavigate } from 'react-router-dom';
import live from '../../../images/dashboard/live.svg';

const DClassRecordings = () => {

    const phone = localStorage.getItem('phone');
    const navigate = useNavigate();
    const [demoClasses, setDemoClasses] = useState([]);
    const [freeClasses, setFreeClasses] = useState([]);
    const [purchasedLiveCourses, setPurchasedLiveCourses] = useState([]);
    const [payments, setPayments] = useState([]);

    // fetching user paid info
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
            const res = await fetch(`https://skillshikhun.herokuapp.com/demoClasses/phone/${phone}`);
            const data = await res.json();
            setDemoClasses(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        const demo_classes = demoClasses.map(dm => dm.category).filter(category => courseData.map(cd => cd.name).includes(category))
        setFreeClasses(courseData.filter(course => demo_classes.includes(course.name)))
    }, [demoClasses])

    useEffect(() => {

        const live_courses = payments.map(pm => pm.course).filter(course => courseData.map(cd => cd.name).includes(course))
        setPurchasedLiveCourses(courseData.filter(course => live_courses.includes(course.name)))

    }, [payments])

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
                            <h2 className='fs-5 fw-bold my-2'>ডেমো ক্লাসের রেকর্ডিংসমূহ</h2>
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
                                )}
                            <h2 className='fs-5 fw-bold my-2'><img src={live} width={40} alt="class recordings" /> ক্লাস রেকর্ডিংস</h2>

                            {
                                purchasedLiveCourses.map(course =>
                                    <div className="mt-3">
                                        <button onClick={() => {
                                            window.scrollTo(0, 0);
                                            navigate('/course/live/video/' + course.id)
                                            // window.location.replace(course.recording_link)
                                        }} className='class-video'>{course.name}</button>
                                        {/* <a href={course.recording_link} target="_blank" rel="noreferrer" className='class-video my-2 text-decoration-none text-center fs-6 text-white m-3'><span className="me-2 fw-bold">{course.title}</span> ক্লাস রেকর্ডিংস</a> */}
                                    </div>)
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