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
                    <h1 style={{ marginTop:"5rem" ,fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='text-center'>{course.title}</h1>
                </div>
            </div>
                <Menu />
        </div>
    );
};

export default DLiveCourseVideo;