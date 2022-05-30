import React from 'react';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';

const DLiveCourse = () => {
    return (
        <div>
            <DNavbar />
            <div style={{marginTop:'5rem'}} className='container-fluid'>
                <div className="row">

                    {/* left sidebar */}
                    <div className="col-xl-2 col-lg-3 col-md-4 d-none d-lg-block position-sticky">
                        <Sidebar />
                    </div>

                    <div style={{ minHeight: '800px', backgroundColor: '#f3f5f9', borderRadius: '15px' }} className="col-xl-9 col-lg-9 col-md-12 py-5">

                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default DLiveCourse;