import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import courseData from '../../data/course/courseData.js';

const Course = (props) => {

    const name = props.name;

    const course = courseData.find(course => course.name === name);

    return (
        <div style={{backgroundColor:'#f8f9fa'}}>
            <Navbar />
            <h1 style={{ marginTop: '5rem' }} className="text-center py-3">{course.title}</h1>
            
            <div className="container">
                {
                    course.outline.map(course => <div>
                        <li className='fw-bold'>{course.subtitle}</li>
                        <p>{course.brief}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Course;