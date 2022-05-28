import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import user from '../../../images/dashboard/user.svg';

const DNavbar = () => {

    const phone = localStorage.getItem('phone');
    const [userPhoneData, setUserPhoneData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://skillshikhun.herokuapp.com/users/phone/${phone}`);
            const data = await res.json();
            setUserPhoneData(data);
        }
        fetchData();
    }, [phone])

    return (
        <div style={{ borderWidth: '1px', boxShadow: '0 5px 15px #c4c4c44d' }} className="bg-white fixed-top">
            <div className="container-xl navbar-container">

                <nav className="navbar navbar-expand-lg navbar-light mt-1">
                    <div className="container-fluid navbar-container">

                        <Link onClick={() => { window.scrollTo(0, 0); }} to='/dashboard'>
                            <img src={logo} className='img-fluid' width={90} alt="Skill শিখুন" loading="lazy" />
                        </Link>

                        <div className="d-lg-none me-2">
                            <Link to='/dashboard' className='text-decoration-none'>
                                <div className="d-flex justify-content-center align-items-center">
                                    {
                                        userPhoneData?.photo ?
                                            <img src={userPhoneData.photo} className='img-fluid px-4' width={100} alt={userPhoneData.name} loading="lazy" />
                                            :
                                            <img src={user} className='img-fluid px-4' width={100} alt="Circular user svg" loading="lazy" />
                                    }
                                    {
                                        userPhoneData?.name ?
                                            <h2 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='pt-2 text-primary'>{userPhoneData.name}</h2>
                                            :
                                            <div className="d-flex">
                                                <div className="spinner-grow text-dark mt-2" role="status">
                                                    <span className="sr-only"></span>
                                                </div>
                                                <h2 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='pt-3 text-black'>লোড হচ্ছে ...</h2>
                                            </div>
                                    }
                                </div>
                            </Link>
                        </div>

                        <div className="d-none d-lg-block me-2">
                            <Link to='/dashboard' className='text-decoration-none'>
                                <div className="d-flex justify-content-center align-items-center">
                                    {
                                        userPhoneData?.photo ?
                                            <img src={userPhoneData.photo} className='img-fluid px-4' width={100} alt={userPhoneData.name} loading="lazy" />
                                            :
                                            <img src={user} className='img-fluid px-4' width={100} alt="Circular user svg" loading="lazy" />
                                    }
                                    {
                                        userPhoneData?.name ?
                                            <h2 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='pt-2 text-primary'>{userPhoneData.name}</h2>
                                            :
                                            <div className="d-flex">
                                                <div className="spinner-grow text-dark mt-2" role="status">
                                                    <span className="sr-only"></span>
                                                </div>
                                                <h2 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='pt-3 text-black'>লোড হচ্ছে ...</h2>
                                            </div>
                                    }
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    );
};

export default DNavbar;