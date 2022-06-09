import React from 'react';
import useAuth from '../../../hooks/useAuth';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';

const Profile = () => {

    const { logOut } = useAuth();

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
                    <div style={{ minHeight: '800px', backgroundColor: '#f3f5f9', borderRadius: '15px', marginBottom:'5rem' }} className="col-xl-9 col-lg-9 col-md-12 py-5">
                        <div className="mt-5">
                            <button onClick={() => logOut()} className='btn btn-danger'>Log Out</button>
                        </div>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default Profile;