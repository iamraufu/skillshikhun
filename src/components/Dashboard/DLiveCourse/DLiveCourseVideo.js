import React from 'react';
import { useParams } from 'react-router-dom';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
// import Sidebar from '../Sidebar/Sidebar';
import LiveCourses from '../../../data/course/courseData';

const DLiveCourseVideo = () => {
    const { courseId } = useParams();
    const course = LiveCourses.find(course => course.id === courseId);

    return (
        <div>
            <DNavbar />
            <div className='container-fluid mt-5'>
                {/* <div style={{ marginTop: '5rem' }} className="row">
                    <div className="col-xl-2 col-lg-3 col-md-4 d-none d-lg-block position-sticky">
                        <Sidebar />
                    </div>
                    <div style={{ minHeight: '800px', backgroundColor: '#f3f5f9', borderRadius: '15px', marginBottom: '5rem' }} className="col-xl-9 col-lg-9 col-md-12 py-5">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <h1 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='text-center'>{course.title}</h1>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='row'>
                    <h1 style={{ marginTop: "5rem", fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='text-center'>{course.title}</h1>
                    <div className="p-5">
                        <div style={{ position: 'relative', 'paddingTop': '56.25%' }}>
                            <iframe src="https://iframe.mediadelivery.net/embed/50373/f78705d2-efb4-4663-a166-78418ce7cf2b?autoplay=true" loading="lazy" style={{ border: 'none', position: 'absolute', top: '0', height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen={true} title='web'></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    );
};

export default DLiveCourseVideo;