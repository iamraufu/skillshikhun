import React from 'react';
import Checkout from '../Checkout/Checkout';
import checkbox from '../../images/checkbox.svg';
import checkbox_purple from '../../images/checkbox_purple.svg';

const PurchaseCheckout = () => {
    return (
        <div style={{ paddingTop: '4rem', backgroundColor: '#f3f5f9' }} className="">
            <div style={{display:'none'}}>
                <div className="container-fluid progress-container">
                    <div className="col-sm-12">
                        <div className="progress my-5">
                            <div className="progress-bar" role="progressbar" aria-valuenow="33.33" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div className="progress-info-container">
                        <div className="d-flex justify-content-center">
                            <div className="col-sm-4 progress-select mx-auto">
                                <img className='img-fluid progress-info-image' width={30} src={checkbox} alt="course selected" />
                            </div>

                            <div className="col-sm-4 progress-select mx-auto">
                                <img className='img-fluid progress-info-image' width={30} src={checkbox} alt="your info" />
                            </div>

                            <div className="col-sm-4 progress-select mx-auto">
                                <img className='img-fluid progress-info-image' width={30} src={checkbox_purple} alt="payment" />
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
            </div>
            <div style={{ marginTop: '-4rem' }}>
                <Checkout />
            </div>
        </div>
    );
};

export default PurchaseCheckout;