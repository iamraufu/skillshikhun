import React from 'react';
import './LoginForCheckout.css';
import LoginHandler from '../Login/LoginHandler';
import Navbar from '../Shared/Navbar/Navbar';
import checkbox from '../../images/checkbox.svg';
import checkbox_purple from '../../images/checkbox_purple.svg';
import checkbox_grey from '../../images/checkbox_grey.svg';

const LoginForCheckout = () => {
    return (
        <div className="">
            <Navbar />
            <div style={{ minHeight: '100vh', backgroundColor: 'rgb(243, 245, 249)', paddingTop: '5rem' }}>
                
                <div className="d-flex flex-wrap container justify-content-center">
                    <div className="">

                        <div style={{height:'5px'}} className="progress mt-5">
                            <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="33.33" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <div className="d-flex">
                            <div className="course-select">
                                <img style={{backgroundColor:'white', borderRadius: '50%'}} src={checkbox} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                                <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>কোর্সটি সিলেক্ট হয়েছে</h1>
                            </div>

                            <div className="your-info">
                                <img style={{backgroundColor:'white', borderRadius: '50%'}} src={checkbox_purple} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                                <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>আপনার তথ্য</h1>
                            </div>

                            <div className="payment">
                                <img style={{backgroundColor:'white', borderRadius: '50%'}} src={checkbox_grey} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                                <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>পেমেন্ট</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div _ngcontent-serverapp-c117="" className="steps container" style={{ maxWidth: '600px' }} bis_skin_checked="1"><div _ngcontent-serverapp-c117="" className="step-item is-success is-completed" bis_skin_checked="1"><div _ngcontent-serverapp-c117="" className="step-marker" bis_skin_checked="1"><span _ngcontent-serverapp-c117="" className="kromik">1</span><span _ngcontent-serverapp-c117="" className="check-kromik"><i _ngcontent-serverapp-c117=""><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="svg-font fa-check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></i></span></div><div _ngcontent-serverapp-c117="" className="step-details" bis_skin_checked="1"><p _ngcontent-serverapp-c117="" className="step-name">Select Course</p></div></div><div _ngcontent-serverapp-c117="" className="step-item is-success is-active" bis_skin_checked="1"><div _ngcontent-serverapp-c117="" className="step-marker" bis_skin_checked="1"><span _ngcontent-serverapp-c117="" className="kromik">2</span><span _ngcontent-serverapp-c117="" className="check-kromik"><i _ngcontent-serverapp-c117=""><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="svg-font fa-check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></i></span></div><div _ngcontent-serverapp-c117="" className="step-details" bis_skin_checked="1"><p _ngcontent-serverapp-c117="" className="step-name">Your Info</p></div></div><div _ngcontent-serverapp-c117="" className="step-item" bis_skin_checked="1"><div _ngcontent-serverapp-c117="" className="step-marker" bis_skin_checked="1"><span _ngcontent-serverapp-c117="" className="kromik">3</span><span _ngcontent-serverapp-c117="" className="check-kromik"><i _ngcontent-serverapp-c117=""><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="svg-font fa-check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></i></span></div><div _ngcontent-serverapp-c117="" className="step-details" bis_skin_checked="1"><p _ngcontent-serverapp-c117="" className="step-name">Payment</p></div></div></div> */}
                
                {/* 
                    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    --swiper-theme-color: #007aff;
    --swiper-navigation-size: 44px;
    line-height: inherit;
    font-family: Inter,Noto Sans Bengali,sans-serif;
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e5e5;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / .5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
    flex-grow: 1;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
    min-height: 2rem;
    margin-bottom: 1.5rem;
    max-width: 600px;
                */}
                <LoginHandler />

            </div>
        </div>
    );
};

export default LoginForCheckout;