import React from 'react';
import './LoginForCheckout.css';
import LoginHandler from '../Login/LoginHandler';
import Navbar from '../Shared/Navbar/Navbar';
import checkbox from '../../images/checkbox.svg';
import checkbox_muted from '../../images/checkbox_muted.svg';
// import line from '../../images/line.svg';

const LoginForCheckout = () => {
    return (
        <div className="">
            <Navbar />
            <div style={{ minHeight: '100vh', backgroundColor: 'rgb(243, 245, 249)', paddingTop: '5rem' }}>

                {/* <div className="d-flex container justify-content-center col-sm-4">

                    <div className="p-3 col-sm-4">
                        <img src={checkbox} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                        <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>কোর্সটি সিলেক্ট হয়েছে</h1>
                    </div>
                    
                    <div className="p-3 col-sm-4">
                        <img src={checkbox_muted} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                        <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>আপনার তথ্য</h1>
                    </div>

                    <div className="p-3 col-sm-4">
                        <img src={checkbox_muted} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                        <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>পেমেন্ট</h1>
                    </div>

                </div> */}

                {/* <div className="d-flex container justify-content-center col-sm-4">

                    <div className="p-3 col-sm-4">
                        <img src={checkbox} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                        <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>কোর্সটি সিলেক্ট হয়েছে</h1>
                    </div>
                    
                    <div className="p-3 col-sm-4">
                        <img src={checkbox} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                        <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>আপনার তথ্য</h1>
                    </div>

                    <div className="p-3 col-sm-4">
                        <img src={checkbox_muted} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                        <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>পেমেন্ট</h1>
                    </div>

                </div> */}

                {/* <div className="d-flex container justify-content-center col-sm-4">

                    <div className="p-3 col-sm-4">
                        <img src={checkbox} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                        <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>কোর্সটি সিলেক্ট হয়েছে</h1>
                    </div>
                    
                    <div className="p-3 col-sm-4">
                        <img src={checkbox} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                        <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>আপনার তথ্য</h1>
                    </div>

                    <div className="p-3 col-sm-4">
                        <img src={checkbox} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                        <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>পেমেন্ট</h1>
                    </div>

                </div> */}

                {/* working on this */}
                {/* <div className="d-flex flex-wrap container justify-content-center">
                    <div className="col-md-4">
                        <div className="progress mt-5">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="33.33" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <div className="d-flex">
                            <div style={{marginLeft:'-4rem', marginTop:'-1.5rem'}} className="">
                                <img style={{backgroundColor:'white', borderRadius: '50%'}} src={checkbox} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                                <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>কোর্সটি সিলেক্ট হয়েছে</h1>
                            </div>

                            <div style={{marginLeft:'7rem', marginTop:'-1.5rem'}} className="">
                                <img style={{backgroundColor:'white', borderRadius: '50%'}} src={checkbox_muted} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                                <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>আপনার তথ্য</h1>
                            </div>

                            <div style={{marginLeft:'8rem', marginTop:'-1.5rem'}} className="">
                                <img style={{backgroundColor:'white', borderRadius: '50%'}} src={checkbox_muted} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                                <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>পেমেন্ট</h1>
                            </div>
                        </div>
                    </div>
                </div> */}

                <LoginHandler />

            </div>
        </div>
    );
};

export default LoginForCheckout;