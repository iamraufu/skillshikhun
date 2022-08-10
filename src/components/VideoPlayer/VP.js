import React from 'react';
import './VideoPlayer.css'
import VideoPlayerNavbar from './VideoPlayerNavbar';
import courseData from '../../data/course/courseData'
import { useParams } from 'react-router-dom';
import sunImage from '../../images/sun.webp';
import moonImage from '../../images/moon.webp';

const VP = () => {

    const { courseId } = useParams();
    const course = courseData.filter(course => course.id === courseId)

    return (
        <section id='videoPlayer'>
            <VideoPlayerNavbar courseDone={23} />
            <div id='videoPlayerContainer' className="container-fluid">
                <div className="row">
                    <div style={{ padding: '0' }} className="col-lg-8">
                        <div className="freeClass-responsive-embed-youtube">
                            <iframe
                                src={`https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1`}
                                title="Free Class Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                        <div className="d-flex justify-content-around align-items-center pt-2 px-2">
                            <button id='overview' className='fw-bold'>ওভারভিউ</button>
                            <button id='qna' title='Go Watch Course Videos'>প্রশ্ন ও উত্তর</button>
                            <button id='notes' title='Go Watch Course Videos'>নোটস</button>
                            <button id='announcement' title='Go Watch Course Videos'>ঘোষণা</button>
                            <button id='review' title='Go Watch Course Videos'>রিভিউ</button>
                            <button id='tools' title='Go Watch Course Videos'>টুলস</button>
                        </div>
                        <div id='hr' className="px-3"><hr /></div>
                    </div>

                    <div style={{ padding: '0', margin:'0' }} className="col-lg-4">
                        <div className="d-flex justify-content-between align-items-center">
                        
                        <h2 id='course_content' style={{ padding: '5px 0 10px 20px', margin: '0' }} className='fs-5 fw-bold'>কোর্স কনটেন্ট</h2>

                        <button id='sun' onClick={()=>{
                            document.getElementById('sun').style.display = 'none';
                            document.getElementById('moon').style.display = 'block';
                            document.getElementById('videoPlayerContainer').style.backgroundColor ='#1c1d1f';
                            document.getElementById('accordionFlushExample').style.backgroundColor ='#1c1d1f';
                            document.getElementById('course_content').style.color = '#fff';
                            document.getElementById('overview').style.color = '#fff';
                            document.getElementById('qna').style.color = '#fff';
                            document.getElementById('notes').style.color = '#fff';
                            document.getElementById('announcement').style.color = '#fff';
                            document.getElementById('review').style.color = '#fff';
                            document.getElementById('tools').style.color = '#fff';
                            document.getElementById('hr').style.backgroundColor = '#fff';
                        }} className=''><img width={50} src={sunImage} alt="sun" /></button>

                        <button style={{display:'none'}} id='moon' onClick={()=>{
                            document.getElementById('sun').style.display = 'block';
                            document.getElementById('moon').style.display = 'none';
                            document.getElementById('videoPlayerContainer').style.backgroundColor ='#fff';
                            document.getElementById('course_content').style.color = '#000';
                            document.getElementById('overview').style.color = '#000';
                            document.getElementById('qna').style.color = '#000';
                            document.getElementById('notes').style.color = '#000';
                            document.getElementById('announcement').style.color = '#000';
                            document.getElementById('review').style.color = '#000';
                            document.getElementById('tools').style.color = '#000';
                            document.getElementById('hr').style.backgroundColor = '#000';
                        }} className='p-2'><img width={30} src={moonImage} alt="moon" /></button>
                        </div>
                        
                        <div className="accordion accordion-flush customized-course-video-accordion" id="accordionFlushExample">
                            {
                                course[0].outline.map((item, index) =>
                                    <div className="accordion-item custom-accordion-item" key={item.id}>
                                        <h2
                                            // onClick={() => moduleHandler(item)}
                                            className="accordion-header" id={`flush-heading${item.id}`}>
                                            <button
                                                // style={{ backgroundColor: 'white', borderRadius: '15px', fontSize: '13px', fontWeight: '500', textAlign: 'justify'}} 
                                                className="accordion-button collapsed fw-bold course-video-title_hover" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
                                                {/* Module {index + 1}: {item.title}
                                            {
                                                !item.isFree === true ? <img className='img-fluid ms-1 mb-1' width={18} src={lock} alt="Enroll to See the Full Course" /> : null
                                            } */}


                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="">Module {index + 1}: {item.title}</div>

                                                    {/* <div className="">
                                                    {
                                                        !item.isFree === true ? <img className='img-fluid ms-1 mb-1' width={18} src={lock} alt="Enroll to See the Full Course" /> : null
                                                    }
                                                </div> */}
                                                </div>

                                            </button>
                                        </h2>

                                        <div
                                            onClick={() => {
                                                // setVideoDescription(item.description)
                                                // setModuleNumber(index + 1)
                                            }}
                                            id={`flush-collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${item.id}`} data-bs-parent="#accordionFlushExample">

                                            {
                                                item.video.map((item, index) =>
                                                    <div key={index}
                                                        // style={{ backgroundColor: '#f1f1f1', marginTop: '-0.5rem', borderRadius: '15px', cursor: 'pointer', fontSize: '12px', textAlign: 'justify' }} 
                                                        onClick={() => {
                                                            // videoHandler(item);
                                                            // setVideoId(item.videoId)
                                                            // setVideoTitle(item.subtitle)
                                                        }} className="accordion-body">{item.subtitle}

                                                        {/* {
                                                        !item.isFree === true ? <img className='img-fluid ms-2 mb-1' width={18} src={s} alt="Enroll to See the Full Course" /> : null
                                                    } */}

                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VP;