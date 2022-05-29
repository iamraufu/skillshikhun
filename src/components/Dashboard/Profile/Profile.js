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
                <div className="d-flex">

                    <div className="col-lg-3 d-none d-lg-block">
                        <Sidebar />
                    </div>

                    <div className="col-lg-9">
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