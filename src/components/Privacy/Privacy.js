import React from 'react';
const Navbar = React.lazy(() => import ('../Shared/Navbar/Navbar'));

const Privacy = () => {
    return (
        <div>
            <Navbar />
            Privacy
        </div>
    );
};

export default Privacy;