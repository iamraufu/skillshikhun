import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const Course = (props) => {

    const name = props.name;

    return (
        <div>
            <Navbar />
           <h1 className="mt-5 text-center">{name}</h1>
        </div>
    );
};

export default Course;