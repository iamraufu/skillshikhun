import React, { useState } from 'react';
import './DPrevFreeClass.css';
import DNavbar from '../DNavbar/DNavbar';
import { useNavigate, useParams } from 'react-router-dom';
// import Menu from '../Menu/Menu';
import { useEffect } from 'react';
import courseData from '../../../data/course/courseData';
import TextSkeleton from '../../../components/Skeleton/TextSkeleton';
import lock from '../../../images/dashboard/lock.svg';
import play from '../../../images/dashboard/play.svg';
import rounded_play from '../../../images/dashboard/rounded_play.svg';

const DPrevFreeClass = () => {

    const { courseId } = useParams();
    const navigate = useNavigate();
    const course = courseData.filter(course => course.id === courseId)
    const phone = localStorage.getItem('phone');
    // eslint-disable-next-line
    const [freeClasses, setFreeClasses] = useState([]);
    const [moduleNumber, setModuleNumber] = useState(1);
    const [videoTitle, setVideoTitle] = useState(course[0].outline[0].video[0].subtitle)
    const [videoDescription, setVideoDescription] = useState(course[0].outline[0].description)
    const [videoId, setVideoId] = useState(course[0].outline[0].video[0].videoId)

    useEffect(() => {
        fetch('https://api-skillshikhun.herokuapp.com/demoClasses/phone/' + phone, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(result => {
                setFreeClasses(result.data);
            })
    }, [phone])

    const moduleHandler = item => {
        item.isFree === false && hide(item.id);
    }

    const videoHandler = item => {
        item.isFree === false && shakeButton();
    }

    const hide = id => {
        document.getElementById(`flush-collapse${id}`).style.display = 'none';
        shakeButton();
    }

    const shakeButton = () => {
        document.getElementById('free-class-video_btn').classList.contains('shake') ?
            document.getElementById('free-class-video_btn').classList.remove('shake') :
            document.getElementById('free-class-video_btn').classList.add("shake");
    }

    useEffect(() => {
        window.MC_PIXEL.fireLogConversionEvent(`course_${course[0]?.id}`)
    },)

    return (
        <div style={{ backgroundColor: '#f3f5f9', minHeight: "100vh" }}>
            <DNavbar />
            <div className="container pb-5">

                <div className="prev_free_live_course_container row">
                    <div style={{ position: 'absolute', zIndex: '4', top: '55px', backgroundColor: '#f3f5f9' }} className="col-md-8 position-sticky">
                        <h1
                            style={{ fontSize: '18px' }}
                            className='pt-3 mb-3 ps-2 fw-bold'>{course[0]?.title} ফ্রি লাইভ ক্লাস</h1>
                        <div className="freeClass-responsive-embed-youtube">
                            {
                                videoId === '' ?
                                    <div style={{ height: '', width: '100%' }} className="bg-white text-danger">
                                        বাকি লাইভ ক্লাস গুলো সরাসরি ইন্সট্রাক্টর এর সাথে করার জন্য ভর্তি হয়ে যান এখনই
                                    </div> :
                                    <iframe
                                        style={{ borderRadius: '15px' }}
                                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                        title="Free Class Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                            }
                        </div>

                        {/* <div className="d-flex justify-content-between p-2 mt-2">
                            <button onClick={() => {

                            }} 
                            className='prev-lesson-btn'>← আগের লেসন</button>
                            <button className='next-lesson-btn'>পরের লেসন →</button>
                        </div> */}

                        {/* Larger Screen */}
                        <div className="d-flex align-items-end justify-content-center mt-3 d-none d-lg-block">
                            <div className="col-12">
                                <h3 className='fs-6 text-center'>বাকি লাইভ ক্লাস গুলো সরাসরি ইন্সট্রাক্টর এর সাথে করার জন্য ভর্তি হয়ে যান এখনই</h3>
                                <button id='free-class-video_btn' onClick={() => { 
                                    navigate(`/checkout/${course[0].id}`) 
                                    window.MC_PIXEL.fireLogConversionEvent(`demo_page_bhorti_button_${course[0]?.id}`)
                                    }} className='btn-buy p-3'>এখনই ভর্তি হয়ে যান</button>
                            </div>
                        </div>

                        {/* Smaller Screen */}
                        <div style={{
                            // backgroundColor: '#f3f5f9', 
                            boxShadow: '0 3px 10px 3px #0003', borderTop: '1px solid lightgrey'
                        }} className="bg-white d-flex align-items-end justify-content-center d-lg-none fixed-bottom p-2">
                            <div className="col-12">
                                <h3 className='fs-6 text-center'>বাকি ক্লাসগুলো ইন্সট্রাক্টর এর সাথে লাইভ এ হবে </h3>
                                <button style={{ boxShadow: '0 3px 10px 3px #0003' }} id='free-class-video_btn' onClick={() => { 
                                    navigate(`/checkout/${course[0].id}`) 
                                    window.MC_PIXEL.fireLogConversionEvent(`demo_page_bhorti_button_${course[0]?.id}`)
                                    }} className='btn-buy p-3'>এখনই ভর্তি হয়ে যান</button>
                            </div>
                        </div>

                        {
                            videoTitle ? <h2 className='fs-6 my-3 px-2 fw-bold'>Module {moduleNumber}: <span className='ms-2'>{videoTitle}</span></h2> : <div className="mt-2"><TextSkeleton /></div>
                        }
                        {
                            videoDescription ? <p style={{ textAlign: 'justify' }} className='fs-6 mt-3 px-2 d-none d-lg-block'>{videoDescription}</p> : <div className="mt-2"><TextSkeleton /></div>
                        }
                    </div>

                    <div
                        // style={{ height: '699px', backgroundColor: '#f1f1f1', borderRadius: '15px', border: '1px solid lightgrey' }} 
                        className="col-md-4 mb-5 course-video-module-container">
                        <h2 className='fs-5 my-3 text-center fw-bold'>কোর্স মডিউল</h2>
                        <hr />

                        <div
                            // style={{ height: '600px', overflowY: 'scroll' }} 
                            className="accordion accordion-flush customized-course-video-accordion" id="accordionFlushExample">
                            {
                                // course[0].outline.slice(0, 3).map((item, index) =>
                                course[0].outline.map((item, index) =>
                                    <div style={{
                                        border: 'none', backgroundColor: 'white',
                                        // maxHeight: '550px', 
                                        borderRadius: '15px', boxShadow: '0 5px 15px #c4c4c44d'
                                    }} className="accordion-item mx-2 my-3" key={item.id}>
                                        <h2
                                            onClick={() => moduleHandler(item)}
                                            className="accordion-header" id={`flush-heading${item.id}`}>
                                            <button style={{ backgroundColor: 'white', borderRadius: '15px', fontSize: '13px', fontWeight: '500', textAlign: 'justify' }} className="accordion-button collapsed course-video-title_hover" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
                                                {/* Module {index + 1}: {item.title}
                                                {
                                                    !item.isFree === true ? <img className='img-fluid ms-1 mb-1' width={18} src={lock} alt="Enroll to See the Full Course" /> : null
                                                } */}


                                                <div className="d-flex justify-content-between align-items-center">

                                                    <div className=" me-2">
                                                        {
                                                            !item.isFree === true ? <img className='img-fluid mb-1' width={18} src={lock} alt="Enroll to See the Full Course" /> : <img className='img-fluid mb-1' width={18} src={play} alt="Play" />
                                                        }
                                                    </div>
                                                    <div className="">Module {index + 1}: {item.title}</div>
                                                </div>

                                            </button>
                                        </h2>

                                        <div
                                            onClick={() => {
                                                setVideoDescription(item.description)
                                                setModuleNumber(index + 1)
                                            }}
                                            id={`flush-collapse${item.id}`} className="accordion-collapse collapse p-2" aria-labelledby={`flush-heading${item.id}`} data-bs-parent="#accordionFlushExample">

                                            {
                                                item.video.map((item, index) =>
                                                    <div key={index} style={{ backgroundColor: '#f1f1f1', marginTop: '-0.5rem', borderRadius: '15px', cursor: 'pointer', fontSize: '12px', textAlign: 'justify' }} onClick={() => {
                                                        videoHandler(item);
                                                        setVideoId(item.videoId)
                                                        setVideoTitle(item.subtitle)
                                                    }} className="accordion-body course-video-item_hover mt-2">
                                                        {
                                                            !item.isFree === true ? <img className='img-fluid' width={18} src={lock} alt="Enroll to See the Full Course" /> : <img className='img-fluid me-2' width={18} src={rounded_play} alt="Play" />
                                                        }
                                                        {item.subtitle}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                )}

                        </div>
                    </div>
                </div>
            </div>

            {/* <Menu /> */}
        </div>
    );
};

export default DPrevFreeClass;