import React, { useEffect, useState } from 'react';
import './DNavbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import user from '../../../images/dashboard/user.svg';
import web from '../../../images/dashboard/web.svg';
import out from '../../../images/dashboard/out.svg';
import useAuth from '../../../hooks/useAuth';

const DNavbar = () => {

    const {logOut} = useAuth();

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

                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid navbar-container">

                        <Link onClick={() => { window.scrollTo(0, 0); }} to='/dashboard'>
                            <img src={logo} className='img-fluid' width={90} alt="Skill শিখুন" loading="lazy" />
                        </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse navbar-menu" id="navbarNavAltMarkup">
                            <div className="accordion accordion-flush ms-auto" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button accordion-button-customize collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <div className="d-flex justify-content-center align-items-center">
                                                {
                                                    userPhoneData?.photo ?
                                                        <img src={userPhoneData.photo} className='img-fluid px-4' width={100} alt={userPhoneData.name} loading="lazy" />
                                                        :
                                                        <img src={user} className='img-fluid px-4' width={100} alt="Circular user svg" loading="lazy" />
                                                }
                                                {
                                                    userPhoneData?.name ?
                                                        <h2 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='pt-2 text-primary me-2'>{userPhoneData.name}</h2>
                                                        :
                                                        <div className="d-flex">
                                                            <div className="spinner-grow text-dark mt-2" role="status">
                                                                <span className="sr-only"></span>
                                                            </div>
                                                            <h2 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='pt-3 text-black'>লোড হচ্ছে ...</h2>
                                                        </div>
                                                }
                                            </div>
                                        </button>
                                    </h2>

                                    <div style={{maxHeight:"100px", borderRadius:'15px', backgroundColor:'#f5f5f5', border:'1px solid grey'}} id="flush-collapseOne" className="accordion-collapse collapse m-2" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <a href="/" className='text-black text-decoration-none' target="_blank">
                                                <div className="d-flex justify-content-center align-items-center accordion-body-item">
                                                <img src={web} width={20} className='img-fluid me-2 pb-3' alt="Homepage" />
                                                <p>হোমপেইজে ফিরে যান</p>
                                                </div>
                                            </a>
                                            
                                            <div style={{cursor: 'pointer'}} onClick = {()=> logOut()} className="d-flex justify-content-center align-items-center accordion-body-item">
                                                <img src={out} width={20} className='img-fluid me-2 pb-3' alt="Homepage" />
                                                <p>লগ আউট করুন</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* <div className="d-lg-none me-2">
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
                        </div>

                        <div className="d-none d-lg-block me-2">

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
                        </div> */}


                    </div>
                </nav>

            </div>
        </div>
    );
};

export default DNavbar;