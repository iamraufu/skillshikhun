import React from 'react';
import './Course.css';
import Navbar from '../Shared/Navbar/Navbar';
import courseData from '../../data/course/courseData.js';
import courseFee from '../../images/course-fee.png'
import { Link } from 'react-router-dom';

const Course = (props) => {

    const name = props.name;
    const color = props.color;

    const course = courseData.find(course => course.name === name);
    const otherCourses = [courseData.filter(otherCourses => otherCourses.name !== name)];

    return (
        <div style={{ backgroundColor: '#f8f9fa' }}>
            <Navbar />

            <h1 style={{ marginTop: '5rem', backgroundColor: color }} className="text-center py-3 course-title text-white">{course.title}</h1>

            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div style={{ backgroundColor: 'white', top: '120px', borderRadius: '25px' }} className="position-sticky">
                            <h2 className='alt-title text-center py-4'>{course.alt_title}</h2>
                            <iframe className='p-2' width="100%" height="355" src={`${course.source}?controls=0`} title={course.slug} style={{ borderRadius: '20px' }} allowFullScreen srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${course.source}?controls=0><img src=${course.image} alt=${course.alt_title}><span>▶</span></a>`}></iframe>
                            <p style={{ fontSize: '20px', lineHeight: '20px', fontWeight: '600' }} className='pt-3 text-center'>{course.duration}</p>
                            <img src={courseFee} className='img-fluid mx-auto d-block pb-3' width={330} alt="Course Fee" loading="lazy" />
                            <div className="row pb-4">
                                <button className='btn-demo mx-auto d-block'>একটি ফ্রি ক্লাস করে দেখুন &#8594;</button>
                                <button className='btn-buy mx-auto d-block mt-2'>এখনই ভর্তি হয়ে যান &#8594;</button>
                                <ul>
                                    {course.feature_alt.map(item => <li className='feature-list' key={item.key}>✔️ {item.item}</li>)}
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
                                    <div style={{border:'none'}} className="accordion-item mt-2" key={item.id}>
                                        <h2 className="accordion-header" id={`flush-heading${item.id}`}>
                                            <button style={{backgroundColor:'#f1f1f1',borderRadius:'10px'}} className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
                                            <span className='pe-2'>&#43;</span>{item.subtitle}
                                            </button>
                                        </h2>
                                        <div id={`flush-collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${item.id}`} data-bs-parent="#accordionFlushExample">
                                            <div style={{ backgroundColor:'white',border:'none'}} className="accordion-body">{item.brief}
                                            </div>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>

                </div>
            </div>

            <div className="container py-5">
                <h2 style={{ fontSize: '24px', lineHeight: '23px' }} className='fw-bold'>আরো কোর্স</h2>
                <div className="row">
                    {
                        otherCourses[0].map(otherCourse =>
                            <div key={otherCourse.id} className="col-lg-3 col-md-6 my-4">
                                <div style={{ backgroundColor: 'white', borderRadius: '15px',border:'1px solid #ececec',boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)' }}>
                                    <Link onClick={()=>{window.scrollTo(0, 0);}} to={otherCourse.route}><img style={{ borderRadius: '15px' }} className='img-fluid' src={otherCourse.image} alt={otherCourse.title} loading="lazy" /></Link>
                                    <h3 style={{ fontSize: '18px', lineHeight: '28px' }} className='fw-bold pt-4 ps-2'>{otherCourse.title}</h3>
                                    
                                    <div style={{borderTop:'1px solid #ececec',justifyContent:'space-between'}} className="d-flex">
                                    {/* <img className='img-fluid pb-3' width={200} src={courseFee} alt="course fee" loading="lazy" /> */}
                                    <h4 style={{fontSize:'20px',lineHeight:'28px'}} className='ps-2 pt-2 fw-bold'>৳ 2600</h4>
                                    <Link onClick={()=>{window.scrollTo(0, 0);}} to={otherCourse.route} className='text-decoration-none'><p style={{fontSize:'15px',lineHeight:'24px',color:'#b94a8f'}} className='pe-3 pt-2 fw-bold'>বিস্তারিত দেখুন</p></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Course;