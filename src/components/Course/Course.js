import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import courseData from '../../data/course/courseData.js';

const Course = (props) => {

    const name = props.name;

    const course = courseData.find(course => course.name === name);

    return (
        <div style={{ backgroundColor: '#f8f9fa' }}>
            <Navbar />
            <h1 style={{ marginTop: '5rem' }} className="text-center py-3">{course.title}</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <h1>{course.alt_title}</h1>
                            <iframe width="100%" height="355" src={course.source} title={course.slug} style={{ borderRadius: '15px' }} allowFullScreen></iframe>
                            <p>২ মাস এর কোর্স - ২৪ টি লাইভ ক্লাস</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className='fw-bold'>এই কোর্সটি কাদের জন্য?</h2>
                        <p>{course.description}</p>
                        <h2 className='fw-bold'>এই কোর্সে আপনি কি শিখবেন?</h2>
                        {
                            course.features.map(item => <li>{item.item}</li>)
                        }
                        <p className='fw-bold'>{course.featuresDescription}</p>
                        <p>এছাড়াও থাকছে</p>
                        {
                            course.featureBonus.map(item => <li>{item.item}</li>)
                        }
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            {
                                course.outline.map(item =>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-heading">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapse">
                                                {item.subtitle}
                                            </button>
                                        </h2>
                                        <div id="flush-collapse" class="accordion-collapse collapse" aria-labelledby="flush-heading" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">{item.brief}
                                            </div>
                                        </div>
                                    </div>
                                )}

                        </div>
                    </div>

                </div>
            </div>

            {/* <div className="container">
                {
                    course.outline.map(course => <div>
                        <li className='fw-bold'>{course.subtitle}</li>
                        <p>{course.brief}</p>
                    </div>)
                }
            </div> */}
        </div>
    );
};

export default Course;