import React from 'react';
import DemoClass from './DemoClass';

const CourseDemoClass = (props) => {
    
    return (
        <div ref={props.refProp}>
            <DemoClass />
        </div>

    );
};

export default CourseDemoClass;