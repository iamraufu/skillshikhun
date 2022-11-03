import React from 'react';
import live from '../../images/liveClass.svg';
import calendar from '../../images/calendar.svg';
import calendar2 from '../../images/calendar2.svg';
import clock from '../../images/clock.svg';
import clock2 from '../../images/clock2.svg';

const CourseTime = ({ course }) => {
    return (
        <>
            <div 
            // style={{ backgroundColor: 'rgba(13, 39, 122, 0.1)', borderLeft: '2px solid #12348d', paddingLeft: '0', paddingRight:'0', borderTopRightRadius:'10px', borderBottomRightRadius:'10px' }}
            className=''>
                <div className="row justify-content-between align-items-center">
                    {/* <div className="col-sm-2 mt-2">
                        <p style={{ fontSize: '12px', backgroundColor: '#12348d', borderRadius: '5px' }} className="text-white mx-1 text-center p-1">ব্যাচ {course?.name === 'সবার জন্য ফ্রিল্যান্সিং' ? "১" : "২"}</p>
                    </div> */}

                    <div 
                    // style={{ borderLeft: '1px solid lightgrey' }}
                    style={{ backgroundColor: 'rgba(13, 39, 122, 0.1)', paddingLeft: '0', paddingRight:'0', borderRadius:'10px' }}
                    className="col-sm-3 px-1 pt-2 mt-3">
                        <p style={{ fontSize: '12px' }} className="text-muted text-center"><img src={calendar} width={20} className='img-fluid' alt="" /> ক্লাস শুরু তারিখ<br /><span style={{ fontSize: '13px' }} className='fw-bold text-black'>১৪ {course.next_batch}, সোমবার</span></p>
                    </div>

                    <div 
                    // style={{ borderLeft: '1px solid lightgrey' }}
                    style={{ backgroundColor: 'rgba(13, 39, 122, 0.1)', paddingLeft: '0', paddingRight:'0', borderRadius:'10px' }}
                    className="col-sm-4 pt-2 mt-3">
                        <p style={{ fontSize: '12px' }} className="text-muted text-center"><img src={calendar2} width={15} className='img-fluid' alt="" /> ক্লাসের দিন<br /><span style={{ fontSize: '13px' }} className='fw-bold text-black'>শনি, সোম, বুধ</span></p>
                    </div>

                    <div 
                    // style={{ borderLeft: '1px solid lightgrey' }} 
                    style={{ backgroundColor: 'rgba(13, 39, 122, 0.1)', paddingLeft: '0', paddingRight:'0', borderRadius:'10px' }}
                    className="col-sm-3 pt-2 mt-3">
                        <p style={{ fontSize: '12px' }} className="text-muted text-center"><img src={clock2} width={20} className='img-fluid' alt="" /> ক্লাসের সময়<br /><span style={{ fontSize: '13px' }} className='fw-bold text-black'>{course.class_time}</span></p>
                    </div>
                </div>
            </div>

            <div style={{margin:'0', padding:'0'}} className="row justify-content-around align-items-center">
                <div style={{ backgroundColor: 'rgba(13, 39, 122, 0.1)', borderRadius:'10px', paddingLeft: '0', paddingRight:'0' }} className="col-sm-4 pt-3 mt-3">
                    <p style={{ fontSize: '12px' }} className="text-muted text-center"><img src={clock} width={20} className='img-fluid' alt="" /> কোর্স সময়কাল<br /><span style={{ fontSize: '13px' }} className='fw-bold text-black'>{course.course_duration} {course?.name === 'সবার জন্য ফ্রিল্যান্সিং' ? "দিন" : "মাস"}</span></p>
                </div>

                <div style={{ backgroundColor: 'rgba(13, 39, 122, 0.1)', borderRadius:'10px',paddingLeft: '0', paddingRight:'0' }} className="col-sm-4 mt-3 pt-2">
                    <p style={{ fontSize: '12px' }} className="text-muted text-center"><img src={live} width={30} className='img-fluid' alt="" /> লাইভ ক্লাসের সংখ্যা<br /><span style={{ fontSize: '13px' }} className='fw-bold text-black'>{course.total_classes} টি</span></p>
                </div>
            </div>
        </>
    );
};

export default CourseTime;