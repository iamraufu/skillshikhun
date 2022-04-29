import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import courseData from '../../data/course/courseData.js';

const Checkout = () => {

    const {courseId} = useParams();
    const course = courseData.filter(course => course.id === courseId); 
    // console.log(course);
    

    return (
        <div style={{marginTop:'5rem'}}>
            <Navbar />
           <h1>Checkout {courseId}</h1> 
        </div>
    );
};

export default Checkout;