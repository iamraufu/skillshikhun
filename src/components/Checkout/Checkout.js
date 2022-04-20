import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Checkout = () => {

    const {courseId} = useParams();

    

    return (
        <div style={{marginTop:'5rem'}}>
            <Navbar />
           <h1>Checkout {courseId}</h1> 
        </div>
    );
};

export default Checkout;