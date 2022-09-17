import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import LiveCourses from '../../../data/course/courseData';
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";
import AWS from 'aws-sdk'

const REGION = 'ap-south-1';
const s3Client = new S3Client({
    region: REGION, credentials: {
        accessKeyId: 'AKIAY4R4OIR4SPX73B4O',
        secretAccessKey: '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'
    }
});

AWS.config.update({
    accessKeyId: 'AKIAY4R4OIR4SPX73B4O',
    secretAccessKey: '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'
})

const DLiveCourseVideo = () => {
    const { courseId } = useParams();
    const course = LiveCourses.find(course => course.id === courseId);

    const [videos, setVideos] = useState([]);

    const getVideos = async () => {
        const params = {
            Bucket: 'ss-class-recordings',
            MaxKeys: 100
        }

        const dataList = await s3Client.send(new ListObjectsCommand(params))
        setVideos(dataList.Contents.filter(item => item.Key.includes(`${course.name}/C`)))
    }

    return (
        <div onLoad={getVideos} className='mb-5'>
            <DNavbar />
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <h1 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='text-center mt-4'>{course.title}</h1>

                    {/* <div className="p-5">
                        <div style={{ position: 'relative', 'paddingTop': '56.25%' }}>
                            <iframe src="https://iframe.mediadelivery.net/embed/50373/f78705d2-efb4-4663-a166-78418ce7cf2b?autoplay=true" loading="lazy" style={{ border: 'none', position: 'absolute', top: '0', height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen={true} title='web'></iframe>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className="container mb-5">
                <h2 className="mt-5 fs-4 fw-bold">ক্লাসের ভিডিও সমূহ</h2>

                {
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
                }
            </div>

            <Menu />
        </div>
    );
};

export default DLiveCourseVideo;