import React from 'react';
import './LoginForCheckout.css';
import LoginHandler from '../Login/LoginHandler';
import Navbar from '../Shared/Navbar/Navbar';
import checkbox from '../../images/checkbox.svg';
import checkbox_purple from '../../images/checkbox_purple.svg';
import checkbox_grey from '../../images/checkbox_grey.svg';
import LoginSlider from '../Login/LoginSlider';
import LoginSEO from '../SEO/LoginSEO';
// import Footer from '../Shared/Footer/Footer';

const LoginForCheckout = () => {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'rgb(243, 245, 249)', paddingTop: '1px' }} className="">
            <LoginSEO />
            <Navbar />

            <div className="container">
            <div style={{ minHeight: '600px' }} className="row justify-content-center align-items-center">
                <div className='col-md-8'>

                    <div className="container-fluid progress-container">
                        <div className="col-sm-12">
                            <div className="progress my-5">
                                <div className="progress-bar" role="progressbar" aria-valuenow="33.33" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div style={{ marginTop: '-4rem' }} className="progress-info-container">
                            <div className="d-flex justify-content-center">
                                <div className="col-sm-4 progress-select mx-auto">
                                    <img className='img-fluid progress-info-image' width={30} src={checkbox} alt="course selected" />
                                </div>

                                <div className="col-sm-4 progress-select mx-auto">
                                    <img className='img-fluid progress-info-image' width={30} src={checkbox_purple} alt="your info" />
                                </div>

                                <div className="col-sm-4 progress-select mx-auto">
                                    <img className='img-fluid progress-info-image' width={30} src={checkbox_grey} alt="payment" />
                                </div>

                            </div>

                            <div className="d-flex justify-content-center">
                                <div className="col-sm-4 progress-select">
                                    <h1 className='progress-info-text'>কোর্স সিলেক্ট</h1>
                                </div>

                                <div className="col-sm-4 progress-select">
                                    <h1 className='progress-info-text'>আপনার তথ্য</h1>
                                </div>

                                <div className="col-sm-4 progress-select">
                                    <h1 className='progress-info-text'>পেমেন্ট</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                    <LoginHandler />
                </div>
                <div className="col-md-4 mt-5 mx-auto d-block">
                    <LoginSlider />
                </div>
            </div>
            </div>
        </div>
    );
};

export default LoginForCheckout;