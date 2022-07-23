import React from 'react';
import DemoClass from './DemoClass';

const CourseDemoClass = (props) => {
    
    return (
        <div id='freeClassRegistration' className='course-demo-class' ref={props.refProp}>
            <DemoClass course={props.course} />
        </div>

    );
};

export default CourseDemoClass;