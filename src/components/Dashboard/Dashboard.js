import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {

    const { logOut, user } = useAuth();
    const name = user.displayName;
    const email = user.email;
    const image = user.photoURL;
    return (
        <div>
            <Navbar />
            <div className="" style={{ backgroundColor: '#f3f5f9',height:'100vh' }}>

                <h1 style={{ paddingTop: '16rem',fontSize:'32px',lineHeight:'46px',color:'#343b6d',fontWeight:'700' }} className='text-center'>Welcome <span style={{fontSize:'36px',lineHeight:'52px',color:'#b94a8f',fontWeight:'600'}} className=''>{name}</span>! to Dashboard</h1>
                <h2 className='text-center mt-5'>Your email address is: <span className='text-info'>{email}</span></h2>
                <img style={{ borderRadius: '50%' }} width={100} className='mx-auto d-block mt-5' src={image} alt={name} />
                <button className='btn btn-danger mx-auto d-block mt-5' onClick={logOut}>লগ আউট</button>
            </div>
        </div>
    );
};

export default Dashboard;