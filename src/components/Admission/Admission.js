import React from 'react';
const Navbar = React.lazy(() => import ('../Shared/Navbar/Navbar'));

const Admission = () => {
    return (
        <div>
            <Navbar />
            <h2 style={{marginTop:'5rem'}} className='text-center'>Admission</h2>
            
        </div>
    );
};

export default Admission;