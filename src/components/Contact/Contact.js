import React from 'react';
const Navbar = React.lazy(() => import ('../Shared/Navbar/Navbar'));

const Contact = () => {
    return (
        <div>
        <Navbar />
            <h2 style={{marginTop:'5rem'}} className='text-center'>Contact</h2>
        </div>
    );
};

export default Contact;