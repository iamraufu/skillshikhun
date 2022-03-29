import React from 'react';
import './Login.css';
import Navbar from '../Shared/Navbar/Navbar';
import flag from '../../images/bdFlag.png';
import logo from '../../images/logo.png';

const Login = () => {
    return (
        <div>
            <Navbar />
            <div style={{ height: '100vh', backgroundColor: 'rgb(243, 245, 249)' }} className="">
                <div className="container login-container">
                    <div className="row">
                        <div className="col-md-5 mx-auto d-block">
                            <h1 style={{ fontSize: '32px', lineHeight: '48px', color: '#323862', fontWeight: '700' }} className='pt-5 text-center'>ফ্রি রেজিস্ট্রেশন অথবা সাইন ইন করতে <br /> আপনার ব্যবহৃত মোবাইল নম্বরটি দেন</h1>
                            <div className="d-flex mt-5 mx-auto d-block justify-content-center">
                                <img src={flag} width={50} className='img-fluid' alt="flag" loading="lazy" />
                                <span style={{ fontSize: '20px', lineHeight: '30px', color: '#4b5563', fontWeight: '400', backgroundColor: 'white' }} className='pt-1 px-2'>+88</span>
                                <input className='form w-50' type="tel" name='phone' id='phone' aria-describedby='phone' autocomplete='off' maxLength='11' style={{ fontSize: '18px', lineHeight: '27px', color: '#8288b2', fontWeight: '400', backgroundColor: 'white', border: 'none', focus: 'red' }} placeholder='আপনার মােবাইল নম্বর দেন' />
                            </div>
                            <button className='submit-btn mt-5'>এগিয়ে যান</button>
                        </div>

                        <div className="col-md-6 mt-5 d-none d-md-block">
                            <img src={logo} width={250} className='img-fluid mx-auto d-block' alt="flag" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;