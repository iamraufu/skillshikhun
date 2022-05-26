import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Sidebar from '../Sidebar/Sidebar';

const Profile = () => {

    const {logOut} = useAuth();

    return (
        <div className='container-fluid'>
            <div className="d-flex">

                <div className="col-sm-2">
                    <Sidebar />
                </div>

                <div className="col-sm-10">

                    <div className="mt-5">
                        <button onClick={()=>logOut()} className='btn btn-danger'>Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;