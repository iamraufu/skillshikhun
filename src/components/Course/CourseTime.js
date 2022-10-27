import React from 'react';

const CourseTime = ({ course }) => {
    return (
        <div style={{ backgroundColor: '#fff', borderLeft: '2px solid #12348d' }} className='mt-3'>
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-sm-2 mt-2">
                    <p style={{ fontSize: '12px', backgroundColor: '#c63b5e', borderRadius: '5px' }} className="text-white me-1 text-center py-1">Batch {
                        course?.name === 'সবার জন্য ফ্রিল্যান্সিং' ? 1 : 2}</p>
                </div>

                <div style={{ borderLeft: '1px solid lightgrey' }} className="col-sm-3 px-1">
                    <p style={{ fontSize: '12px' }} className="text-muted text-center">Starting Date <br /><span style={{ fontSize: '14px' }} className='fw-bold text-black'>Sun, 6 November</span></p>
                </div>

                <div style={{ borderLeft: '1px solid lightgrey' }} className="col-sm-4">
                    <p style={{ fontSize: '12px' }} className="text-muted text-center">Class Days <br /><span style={{ fontSize: '14px' }} className='fw-bold text-black'>Sun, Tues, Thurs</span></p>
                </div>

                <div style={{ borderLeft: '1px solid lightgrey' }} className="col-sm-3">
                    <p style={{ fontSize: '12px' }} className="text-muted text-center">Class Time <br /><span style={{ fontSize: '14px' }} className='fw-bold text-black'>{course.class_time}</span></p>
                </div>
            </div>
        </div>
    );
};

export default CourseTime;