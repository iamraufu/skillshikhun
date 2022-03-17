import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import courseData from '../../data/course/courseData.js';

const Course = (props) => {

    const name = props.name;

    const course = courseData.find(course => course.name === name);

    return (
        <div>
            <Navbar />
            <h1 style={{ marginTop: '5rem' }} className="text-center">{name}</h1>
            <div className="container">
                {
                    course.outline.map(course => <div>
                        <li>{course.subtitle}</li>
                        <p>{course.brief}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Course;