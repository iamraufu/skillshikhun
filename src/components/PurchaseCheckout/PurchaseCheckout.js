import React from 'react';
import Checkout from '../Checkout/Checkout';
import checkbox from '../../images/checkbox.svg';
import checkbox_purple from '../../images/checkbox_purple.svg';

const PurchaseCheckout = () => {
    return (
        <div className="">
            <div style={{ paddingTop: '4rem', backgroundColor: '#f3f5f9' }}>
                <div className="d-flex flex-wrap container justify-content-center">
                    <div className="">

                        <div style={{ height: '5px' }} className="progress mt-5">
                            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="33.33" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <div className="d-flex">
                            <div
                                // style={{marginLeft:'-1rem', marginTop:'-1.5rem'}} 
                                className="course-select">
                                <img style={{ backgroundColor: 'white', borderRadius: '50%' }} src={checkbox} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                                <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>কোর্সটি সিলেক্ট হয়েছে</h1>
                            </div>

                            <div
                                // style={{marginLeft:'8rem', marginTop:'-1.5rem'}} 
                                className="your-info">
                                <img style={{ backgroundColor: 'white', borderRadius: '50%' }} src={checkbox} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                                <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>আপনার তথ্য</h1>
                            </div>

                            <div
                                // style={{marginLeft:'8rem', marginTop:'-1.5rem'}} 
                                className="payment">
                                <img style={{ backgroundColor: 'white', borderRadius: '50%' }} src={checkbox_purple} className='mx-auto d-block img-fluid' width={30} alt="checkbox" />
                                <h1 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center'>পেমেন্ট</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '-6rem' }}>
                <Checkout />
            </div>
        </div>
    );
};

export default PurchaseCheckout;