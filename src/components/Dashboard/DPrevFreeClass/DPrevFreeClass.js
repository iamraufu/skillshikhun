import React, { useState } from 'react';
import './DPrevFreeClass.css';
import DNavbar from '../DNavbar/DNavbar';
import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../Menu/Menu';
import { useEffect } from 'react';
import courseData from '../../../data/course/courseData';

const DPrevFreeClass = () => {

    const { courseId } = useParams();
    const navigate = useNavigate();
    const course = courseData.filter(course => course.id === courseId)
    const phone = localStorage.getItem('phone');
    // eslint-disable-next-line
    const [freeClasses, setFreeClasses] = useState([]);
    const [videoId, setVideoId] = useState(course[0].outline[0].freeVideoId)

    useEffect(() => {
        fetch('https://skillshikhun.herokuapp.com/demoClasses/phone/' + phone, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(result => {
                setFreeClasses(result.data);
            }).catch(err => {
                console.log(err);
            }
            )
    }, [phone])

    return (
        <div style={{ backgroundColor: '#f3f5f9', minHeight: "100vh" }}>
            <DNavbar />
            <div className="container pb-5">

            <div className="prev_free_live_course_container row">
                    <div className="col-md-8">
                        <h1 className='fs-5 my-3 ps-2'>{course[0]?.title} ফ্রি লাইভ ক্লাস</h1>
                        <div style={{ position: 'relative', paddingTop: '56.25%', borderRadius: '15px' }}>
                            <iframe src={`https://iframe.mediadelivery.net/embed/51319/${videoId}?autoplay=true`}
                                loading="lazy"
                                style={{ border: 'none', position: 'absolute', top: '0', height: '100%', width: '100%', borderRadius: '15px' }}
                                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                allowFullScreen={true}
                                title='Free Class'>
                            </iframe>
                        </div>

                        <div className="d-flex align-items-end justify-content-center mt-3">
                            <div className="col-12">
                                <h3 className='fs-6 text-center'>বাকি লাইভ ক্লাস গুলো সরাসরি ইন্সট্রাক্টর এর সাথে করার জন্য ভর্তি হয়ে যান এখনই</h3>
                                <button onClick={() => { navigate(`/checkout/${course[0].id}`) }} className='btn-buy p-3'>এখনই ভর্তি হয়ে যান</button>
                            </div>
                            {/* <div className="col-lg-9 col-md-8 col-sm-4">
                                <h3 className='fs-6'>বাকি লাইভ ক্লাস গুলো সরাসরি ইন্সট্রাক্টর এর সাথে করার জন্য ভর্তি হয়ে যান এখনই</h3>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-8">
                                <button onClick={()=>{navigate('/checkout/full-stack-web-development')}} className='btn-buy'>এখনই ভর্তি হয়ে যান</button>
                            </div> */}
                        </div>
                    </div>

                    <div className="col-md-4">
                        <h2 className='fs-5 my-3 text-center'>কোর্স মডিউল</h2>

                        <div className="accordion accordion-flush" id="accordionFlushExample">
                                    {
                                        course[0].outline.slice(0, 3).map((item,index) =>
                                            <div style={{ border: 'none', backgroundColor: 'white', maxHeight: '150px', borderRadius: '15px', boxShadow: '0 5px 15px #c4c4c44d' }} className="accordion-item mx-2 mt-3" key={item.id}>
                                                <h2 className="accordion-header p-2" id={`flush-heading${item.id}`}>
                                                    <button style={{ backgroundColor: 'white', borderRadius: '15px' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
                                                        <span className='pe-2'>&#43;</span>Class {index+1}
                                                    </button>
                                                </h2>
                                                <div id={`flush-collapse${item.id}`} className="accordion-collapse collapse p-2" aria-labelledby={`flush-heading${item.id}`} data-bs-parent="#accordionFlushExample">
                                                    <div style={{ backgroundColor: '#f1f1f1', marginTop: '-0.5rem', borderRadius: '15px', cursor: 'pointer', fontSize:'14px' }} onClick={() => setVideoId(item.freeVideoId)}className="accordion-body">{item.subtitle}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    
                                </div>

                    </div>
                </div>
            </div>
            {/* <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                </div>
                            </div> */}

            {/* <div style={{ border: 'none', backgroundColor: 'white', maxHeight: '150px', borderRadius: '15px', boxShadow: '0 5px 15px #c4c4c44d' }} className="accordion-item mx-2 mt-3">
                                <h2 className="accordion-header p-2" id="flush-headingTwo">
                                    <button style={{ backgroundColor: 'white', borderRadius: '15px' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Class 1</button>
                                </h2>

                                <div id="flush-collapseTwo" className="accordion-collapse collapse p-2" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div style={{ backgroundColor: '#f1f1f1', marginTop: '-0.5rem', borderRadius: '15px', cursor: 'pointer', fontSize:'14px' }} onClick={() => setVideoId('60325f7e-8b72-4aa4-ac4d-81f383379f03')} className="accordion-body">Full Stack Web Development Roadmap</div>
                                </div>
                            </div>

                            <div style={{ border: 'none', backgroundColor: 'white', maxHeight: '150px', borderRadius: '15px', boxShadow: '0 5px 15px #c4c4c44d' }} className="accordion-item mx-2 mt-3">
                                <h2 className="accordion-header p-2" id="flush-headingThree">
                                    <button style={{ backgroundColor: 'white', borderRadius: '15px' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Class 2</button>
                                </h2>

                                <div id="flush-collapseThree" className="accordion-collapse collapse p-2" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div style={{ backgroundColor: '#f1f1f1', marginTop: '-0.5rem', borderRadius: '15px', cursor: 'pointer', fontSize:'14px' }} onClick={() => setVideoId('90187f4e-fcec-4163-bd26-d0be20fb12cc')} className="accordion-body">HTML5</div>
                                </div>
                            </div>

                            <div style={{ border: 'none', backgroundColor: 'white', maxHeight: '150px', borderRadius: '15px', boxShadow: '0 5px 15px #c4c4c44d' }} className="accordion-item mx-2 mt-3">
                                <h2 className="accordion-header p-2" id="flush-headingFour">
                                    <button style={{ backgroundColor: 'white', borderRadius: '15px' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">Class 3</button>
                                </h2>

                                <div id="flush-collapseFour" className="accordion-collapse collapse p-2" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div onClick={() => setVideoId('09f91a80-86db-4c3b-93ab-9660a9ea38e9')} style={{ backgroundColor: '#f1f1f1', marginTop: '-0.5rem', borderRadius: '15px', cursor: 'pointer', fontSize:'14px' }} className="accordion-body">HTML5 and CSS3</div>
                                </div>
                            </div> */}

            <Menu />
        </div>
    );
};

export default DPrevFreeClass;