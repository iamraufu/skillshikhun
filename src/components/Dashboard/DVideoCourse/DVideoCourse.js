import React from 'react';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';
import coming_soon from '../../../images/dashboard/coming_soon.webp';

const DVideoCourse = () => {
    return (
        <div className="">
            <DNavbar />
            <div className='container-fluid mt-5'>
                <div style={{ marginTop: '5rem' }} className="row">

                    {/* left sidebar */}
                    <div className="col-xl-2 col-lg-3 col-md-4 d-none d-lg-block position-sticky">
                        <Sidebar />
                    </div>

                    {/* right container */}
                    <div style={{ minHeight: '800px', backgroundColor: '#f3f5f9', borderRadius: '15px', marginBottom: '5rem' }} className="col-xl-9 col-lg-9 col-md-12 py-5">

                        <h1 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='text-center'>আপাতত কোনো ভিডিও কোর্স আপলোড করা হয়নি</h1>

                        <img src={coming_soon} width={300} className='img-fluid mx-auto d-block' alt="coming_soon" />

                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default DVideoCourse;