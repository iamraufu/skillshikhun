import React, { useEffect, useState } from 'react';
import HeroDemo from './HeroDemo';
import RegisterFromDemoClass from './RegisterFromDemoClass';
import checkbox from '../../images/checkbox.svg'
import checkbox_purple from '../../images/checkbox_purple.svg'

const DemoClass = (props) => {

    const phone = localStorage.getItem('phone') || '';
    const [demoClasses, setDemoClasses] = useState([]);
    const [userPhone, setUserPhone] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api-skillshikhun.herokuapp.com/demoClasses/phone/${phone}`);
            const data = await res.json();
            setDemoClasses(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api-skillshikhun.herokuapp.com/users/userBy/phone/${phone}`);
            const data = await res.json();
            console.log(data);
            setUserPhone(data)
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            document.getElementById('register_demo_class').style.display = 'none';
            if (demoClasses.length === 0) {
                document.getElementById('hero_demo').style.display = 'block'
            }
            else {
                <div style={{ position: 'absolute', height: '100px', width: '100px', top: '50%', left: '50%', marginLeft: '-50px', marginTop: '-50px' }} className="spinner-grow" role="status">
                    <span className="sr-only"></span>
                </div>
            }
        }
    })

    return (
        <div style={{
            // backgroundColor: 'rgb(243, 245, 249)', 
            backgroundColor: 'white',
            borderRadius: '15px', border: '1px solid #ececec',
            boxShadow: '0 5px 5px lightgrey'
        }} className='hero-demo-container'>
            <h1 style={{ fontSize: '22px', color: '#343b6d', fontWeight: '600' }} className='mt-4 text-center'>লাইভ কোর্সের কিছু ভিডিও দেখুন ফ্রি !</h1>

            {/* Register Component */}
            <div id='register_demo_class'>
                <div className="container py-3">
                    <RegisterFromDemoClass />
                </div>
            </div>

            <div id='hero_demo' style={{ display: 'none' }}>

                <div>
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
                                    <h1 className='progress-info-text'>ফোন নম্বর</h1>
                                </div>

                                <div className="col-sm-4 progress-select">
                                    <h1 className='progress-info-text'>আপনার তথ্য</h1>
                                </div>

                                <div className="col-sm-4 progress-select">
                                    <h1 className='progress-info-text'>কোর্স ভিডিও</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {
                    userPhone?.email ? <HeroDemo course={props.course} /> :
                        <div className="spinner-grow mx-auto d-block my-5" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                }

            </div>

        </div>
    );
};

export default DemoClass;