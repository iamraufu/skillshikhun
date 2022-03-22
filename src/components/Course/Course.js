import React from 'react';
import './Course.css';
import Navbar from '../Shared/Navbar/Navbar';
import courseData from '../../data/course/courseData.js';
import courseFee from '../../images/course-fee.png'

const Course = (props) => {

    const name = props.name;
    const color = props.color;

    const course = courseData.find(course => course.name === name);

    return (
        <div style={{ backgroundColor: '#f8f9fa' }}>
            <Navbar />

            <h1 style={{ marginTop: '5rem', backgroundColor: color }} className="text-center py-3 course-title text-white">{course.title}</h1>

            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div style={{ backgroundColor: 'white', top: '120px' }} className="position-sticky">
                            <h2 className='alt-title text-center py-4'>{course.alt_title}</h2>
                            <iframe className='p-2' width="100%" height="355" src={`${course.source}?controls=0`} title={course.slug} style={{ borderRadius: '20px' }} allowFullScreen></iframe>
                            <p style={{ fontSize: '20px', lineHeight: '20px', fontWeight: '600' }} className='py-3 text-center'>{course.duration}</p>
                            <img src={courseFee} className='img-fluid mx-auto d-block pb-5' width={330} alt="Course Fee" />
                            <div className="row pb-4">
                                <button className='btn-demo mx-auto d-block'>একটি ফ্রি ক্লাস করে দেখুন</button>
                                <button className='btn-buy mx-auto d-block'>এখনই ভর্তি হয়ে যান</button>
                                <ul>
                                    {course.feature_alt.map(item => <li className='feature-list' key={item.key}>✅{item.item}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2 className='fw-bold'>এই কোর্সটি কাদের জন্য?</h2>
                        <p>{course.description}</p>
                        <h2 className='fw-bold'>এই কোর্সে আপনি কি শিখবেন?</h2>
                        <ul>
                            {
                                course.features.map(item => <li key={item.id}>{item.item}</li>)
                            }
                        </ul>
                        <p className='fw-bold'>{course.featuresDescription}</p>
                        <p>এছাড়াও থাকছে</p>
                        <ul>
                            {
                                course.featureBonus.map(item => <li key={item.id}>{item.item}</li>)
                            }
                        </ul>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            {
                                course.outline.map(item =>
                                    <div className="accordion-item mt-2" key={item.id}>
                                        <h2 className="accordion-header" id={`flush-heading${item.id}`}>
                                            <button className="accordion-button collapsed fw-bold bg-muted" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
                                                {item.subtitle}
                                            </button>
                                        </h2>
                                        <div id={`flush-collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${item.id}`} data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">{item.brief}
                                            </div>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Course;