import React from 'react';
import DNavbar from '../DNavbar/DNavbar';
import Sidebar from '../Sidebar/Sidebar';

const DLiveCourse = () => {
    return (
        <div className="">
            <DNavbar />
            <div className='container-fluid mt-5'>
                <div className="d-flex">

                    <div className="col-lg-3 d-none d-lg-block">
                        <Sidebar />
                    </div>

                    <div style={{ minHeight: '800px', backgroundColor: '#f3f5f9', borderRadius: '15px' }} className="col-lg-8">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DLiveCourse;