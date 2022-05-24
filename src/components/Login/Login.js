import React from 'react';
import './Login.css';
import LoginHandler from './LoginHandler';
const Navbar = React.lazy(() => import('../Shared/Navbar/Navbar'));

const Login = () => {
    return (
        <div>
            <Navbar />
            <div style={{ minHeight: '100vh', backgroundColor: 'rgb(243, 245, 249)', paddingTop: '7rem' }}>
                <h1 id='login_title' style={{ fontSize: '20px', lineHeight: '28px', color: '#323862', fontWeight: '700' }} className='text-center'>ঘরে বসেই পা বাড়ান ভবিষ্যতের পথে!</h1>
                <LoginHandler />
            </div>
        </div>
    );
};

export default Login;