import React from 'react';
import DNavbar from '../DNavbar/DNavbar';
import Sidebar from '../Sidebar/Sidebar';

const DPaymentHistory = () => {
    return (
        <div className="">
            <DNavbar />
            <div className='container-fluid mt-5'>
                <div className="d-flex">

                    <div className="col-lg-3 d-none d-lg-block">
                        <Sidebar />
                    </div>

                    <div className="col-lg-9">

                        Content Goes Here
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DPaymentHistory;