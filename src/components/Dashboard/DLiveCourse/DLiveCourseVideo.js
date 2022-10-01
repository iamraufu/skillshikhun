import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import LiveCourses from '../../../data/course/courseData';
import rounded_play from '../../../images/dashboard/rounded_play.svg';

// import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";
// import AWS from 'aws-sdk'

// const REGION = 'ap-south-1';
// const s3Client = new S3Client({
//     region: REGION, credentials: {
//         accessKeyId: 'AKIAY4R4OIR4SPX73B4O',
//         secretAccessKey: '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'
//     }
// });

// AWS.config.update({
//     accessKeyId: 'AKIAY4R4OIR4SPX73B4O',
//     secretAccessKey: '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'
// })

const DLiveCourseVideo = () => {
    const { courseId } = useParams();
    const course = LiveCourses.find(course => course.id === courseId);
    const category = course.route.slice(1, course.route.length);

    const [videos, setVideos] = useState([]);
    const [videoTitle, setVideoTitle] = useState("");
    const [videoId, setVideoId] = useState("");

    useEffect(() => {
        fetch(`https://skillshikhun.herokuapp.com/${category}-live-class`)
            .then(response => response.json())
            .then(data => {
                setVideos(data)
                setVideoTitle(data[0]?.title)
                setVideoId(data[0]?.videoId)
            })
    }, [category])

    const clickHandler = (item) => {
        setVideoTitle(item?.title)
        setVideoId(item?.videoId)
    }

    // const getVideos = async () => {
    //     const params = {
    //         Bucket: 'ss-class-recordings',
    //         MaxKeys: 100
    //     }

    //     const dataList = await s3Client.send(new ListObjectsCommand(params))
    //     setVideos(dataList.Contents.filter(item => item.Key.includes(`${course.name}/C`)))
    // }

    return (
        // <div onLoad={getVideos} className='mb-5'>
        <div className='mb-5'>
            <DNavbar />
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <h1 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='text-center mt-5'>{course?.title}</h1>

                    {
                        course?.name === 'সবার জন্য ফ্রিল্যান্সিং' &&
                        videos.length === 0 && <p className="text-center text-danger fw-bold">আপনার ব্যাচ এখনো শুরু হয় নি</p>
                    }

                    {/* <div className="p-5">
                        <div style={{ position: 'relative', 'paddingTop': '56.25%' }}>
                            <iframe src="https://iframe.mediadelivery.net/embed/50373/f78705d2-efb4-4663-a166-78418ce7cf2b?autoplay=true" loading="lazy" style={{ border: 'none', position: 'absolute', top: '0', height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen={true} title='web'></iframe>
                        </div>
                    </div> */}
                </div>
            </div>

            <div style={{ paddingBottom: '2rem' }} className="container mb-5">
                {/* <h2 className="mt-5 fs-4 fw-bold">ক্লাসের ভিডিও সমূহ</h2> */}

                {/* {
                    videos.length > 0 ?
                        videos.map((item, index) =>
                            <div key={item.Key} className="ratio ratio-16x9 mt-5 p-5">
                                <h4 className='fw-bold'>ক্লাস {index+1}</h4>
                                <video src={`https://cdn.skillshikhun.com/${item.Key}`} controls controlsList="nodownload" className='mx-auto d-block mt-3'></video>
                            </div>
                        )
                        :
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            <div className="spinner-grow me-2" role="status"></div>
                            <p className='mt-3 fw-bold'>শুধুমাত্র আপনার জন্য সেরা ভিডিও লোড করা হচ্ছে</p>
                        </div>
                } */}

                <div className="row my-5">
                    {
                        videos.length > 0 ?
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
                                <h2 style={{backgroundColor:'#ffffff'}} className='fs-4 mt-3 fw-bold ps-1'>{videoTitle}</h2>
                            </div>
                            :
                            <div className="spinner-grow" role="status"></div>
                    }

                    {
                        videos.length > 0 ?
                            <div className="col-md-4 pt-2">
                                {videos.map(item =>
                                    <h2 key={item._id} onClick={() => clickHandler(item)} style={{ cursor: 'pointer' }} className="fs-6 fw-bold">
                                        <img width={25} src={rounded_play} alt={item.title} /> {item.title}
                                    </h2>
                                )}
                            </div>
                            :
                            <h2 className='mt-5 text-center fs-5 fw-bold'>Loading...</h2>
                    }
                </div>
            </div>

            <Menu />
        </div>
    );
};

export default DLiveCourseVideo;