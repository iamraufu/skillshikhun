import React from 'react';
import './Login.css';
import LoginHandler from './LoginHandler';
import LoginSlider from './LoginSlider';
const Navbar = React.lazy(() => import('../Shared/Navbar/Navbar'));

const Login = () => {
    return (
        <div>
            <div className="fixed-top">
                <Navbar />
            </div>
            <div style={{
                minHeight: '100vh', backgroundColor: 'rgb(243, 245, 249)', paddingTop: '7rem'
            }}>

                <div className="container">
                    <div style={{ minHeight: '600px' }} className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <h1 id='login_title' style={{ fontSize: '20px', lineHeight: '28px', color: '#323862', fontWeight: '700' }} className='text-center'>ঘরে বসেই পা বাড়ান ভবিষ্যতের পথে!</h1>
                            <LoginHandler />
                        </div>
                        <div className="col-md-4">
                            <LoginSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;