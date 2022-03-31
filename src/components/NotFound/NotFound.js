import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar />
            <h1 style={{marginTop:'16rem'}} className='text-center text-danger fw-bold'>404 Not Found</h1>
        </div>
    );
};

export default NotFound;