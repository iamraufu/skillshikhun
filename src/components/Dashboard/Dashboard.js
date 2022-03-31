import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {

    const {logOut,user} = useAuth();
    const name = user.displayName;
    const email = user.email;
    const image = user.photoURL;
    return (
        <div>
            <Navbar />
            <h1 style={{marginTop:'16rem'}} className='text-center fw-bold'>Welcome <span className='text-primary'>{name}</span> to Dashboard</h1>
            <h2 className='text-center mt-5'>Your email address is: <span className='text-info'>{email}</span></h2>
            <img style={{borderRadius:'50%'}} width={100} className='mx-auto d-block mt-5' src={image} alt={name} />
            <button className='btn btn-danger mx-auto d-block mt-5' onClick={logOut}>লগ আউট</button>
        </div>
    );
};

export default Dashboard;