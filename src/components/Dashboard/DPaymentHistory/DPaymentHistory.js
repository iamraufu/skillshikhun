import React from 'react';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';

const DPaymentHistory = () => {
    return (
        <div className="">
            <DNavbar />
            <div className='container-fluid mt-5'>
                <div style={{ marginTop: '5rem' }}className="row">

                    {/* left sidebar */}
                    <div className="col-xl-2 col-lg-3 col-md-4 d-none d-lg-block position-sticky">
                        <Sidebar />
                    </div>

                     {/* right container */}
                     <div style={{ minHeight: '800px', backgroundColor: '#f3f5f9', borderRadius: '15px' }} className="col-xl-9 col-lg-9 col-md-12 py-5">

                        Content Goes Here
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default DPaymentHistory;