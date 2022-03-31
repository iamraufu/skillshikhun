import React from 'react';
const Navbar = React.lazy(() => import ('../Shared/Navbar/Navbar'));

const Refund = () => {
    return (
        <div>
            <Navbar />
           Refund 
        </div>
    );
};

export default Refund;