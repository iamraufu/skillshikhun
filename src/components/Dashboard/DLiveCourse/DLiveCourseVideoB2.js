import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import LiveCourses from '../../../data/course/courseData';
import rounded_play from '../../../images/dashboard/rounded_play.svg';

const DLiveCourseVideo = () => {
    const { courseId } = useParams();
    const course = LiveCourses.find(course => course.id === courseId);
    const category = course.route.slice(1, course.route.length);

    const [videos, setVideos] = useState([]);
    const [videoTitle, setVideoTitle] = useState("");
    const [videoId, setVideoId] = useState("");

    useEffect(() => {
        fetch(`https://api-skillshikhun.herokuapp.com/batch-2-${category}-live-class`)
            .then(response => response.json())
            .then(data => {
                setVideos(data)
                setVideoTitle(data[0].title)
                setVideoId(data[0].videoId)
            })
    }, [category])

    const clickHandler = (item) => {
        setVideoTitle(item.title)
        setVideoId(item.videoId)
    }    

    return (
        <div className='mb-5'>
            <DNavbar />
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <h1 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='text-center mt-5'>{course.title}</h1>
                </div>
            </div>

            <div style={{ paddingBottom: '2rem' }} className="container mb-5">

                <div className="row my-5">

                    {
                        videos.length === 0 && <p className="text-center text-danger fw-bold">আপনার ব্যাচ এর রেকর্ডিং এখনো আপলোড করা হয়নি</p>
                    }

                    {
                        videos.length > 0 &&
                            <div style={{ position: 'absolute', zIndex: '4', top: '55px' }} className="col-md-8 position-sticky">
                                <div className="freeClass-responsive-embed-youtube">
                                    <iframe
                                        style={{ borderRadius: '15px' }}
                                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                        title="Free Class Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                                <h2 style={{ backgroundColor: '#ffffff' }} className='fs-4 mt-3 fw-bold ps-1'>{videoTitle}</h2>
                            </div>
                    }

                    {
                        videos.length > 0 &&
                            <div className="col-md-4 pt-2">
                                {videos.map(item =>
                                    <h2 onClick={() => clickHandler(item)} style={{ cursor: 'pointer' }} className="fs-6 fw-bold">
                                        <img width={25} src={rounded_play} alt={item.title} /> {item.title}
                                    </h2>
                                )}
                            </div>
                    }
                </div>
            </div>

            <Menu />
        </div>
    );
};

export default DLiveCourseVideo;