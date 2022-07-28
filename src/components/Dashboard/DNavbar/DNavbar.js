import React, { useState } from 'react';
import './DNavbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logo.png';
// import user from '../../../images/dashboard/user.svg';
import web from '../../../images/dashboard/web.svg';
import out from '../../../images/dashboard/out.svg';
import useAuth from '../../../hooks/useAuth';
import { useEffect } from 'react';

const DNavbar = () => {

    const { logOut } = useAuth();

    // const phone = localStorage.getItem('phone');
    const name = JSON.parse(localStorage.getItem('name'));
    const phone = localStorage.getItem('phone');

    // const [userPhoneData, setUserPhoneData] = useState({})

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch(`https://skillshikhun.herokuapp.com/users/phone/${phone}`);
    //         const data = await res.json();
    //         setUserPhoneData(data);
    //     }
    //     fetchData();
    // }, [phone])

    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://skillshikhun.herokuapp.com/users/phone/${phone}`);
            const data = await res.json();
            setUser(data);
        }
        fetchData();
    }, [phone])

    return (
        <div style={{ borderWidth: '1px', boxShadow: '0 5px 15px #c4c4c44d' }} className="bg-white fixed-top">
            <div className="container-xl navbar-container">

                <nav style={{paddingTop:'0', paddingBottom:'0'}} className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid navbar-container">

                        <Link
                            // className='text-decoration-none text-black' 
                            onClick={() => { window.scrollTo(0, 0); }} to='/dashboard'>
                            <img src={logo} className='img-fluid' width={90} alt="Skill শিখুন" loading="lazy" />
                            {/* ড্যাশবোর্ড */}
                        </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span className="navbar-toggler-icon"></span> */}
                            {
                                user?.email ?
                                    <><img style={{ borderRadius: '50%' }} className='img-fluid' width={50} src={user?.photo} alt="" /> <FontAwesomeIcon icon={faAngleDown} /></>
                                    : <FontAwesomeIcon icon={faAngleDown} />
                                    // <span className="navbar-toggler-icon"></span>
                            }
                        </button>

                        <div className="collapse navbar-collapse navbar-menu" id="navbarNavAltMarkup">
                            {/* <div className="accordion accordion-flush ms-auto" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFifty">
                                        <button className="accordion-button accordion-button-customize collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifty" aria-expanded="false" aria-controls="flush-collapseFifty">
                                            <div className="d-flex justify-content-center align-items-center">
                                                    {
                                                        user?.email ? <h2 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='pt-2 text-primary me-2'><img style={{ borderRadius: '50%' }} width={50} src={user?.photo} alt="" /> {user?.name}</h2> : <h2 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='pt-2 text-primary me-2'>{name}</h2>
                                                    }
                                            </div>
                                        </button>
                                    </h2>

                                    <div style={{maxHeight:"100px", borderRadius:'15px', backgroundColor:'#f5f5f5', border:'1px solid grey'}} id="flush-collapseFifty" className="accordion-collapse collapse m-2" aria-labelledby="flush-headingFifty" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <a href="/" className='text-black text-decoration-none'>
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
                            </div> */}

                            {/* <div className="d-flex justify-content-center align-items-center"> */}
                            
                            {/* </div> */}

                            <div className="d-none d-lg-block ms-auto">
                            {
                                user?.email ?
                                    <Link to='/dashboard/profile' className='text-decoration-none'><h2 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center pt-2 me-2'><img style={{ borderRadius: '50%' }} width={50} src={user?.photo} alt="" /> {user?.name}</h2></Link>
                                    :
                                    <Link to='/dashboard/profile' className='text-decoration-none'><h2 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='text-center pt-2 me-2'>{name}</h2></Link>
                            }
                            </div>

                            <div className="d-lg-none">
                            <Link to="/" className='text-black text-decoration-none'>
                                                <div className="d-flex justify-content-center align-items-center">
                                                <img src={web} width={20} className='img-fluid me-2 pb-3' alt="Homepage" />
                                                <p>হোমপেইজে ফিরে যান</p>
                                                </div>
                            </Link>
                            <div style={{cursor: 'pointer'}} onClick = {()=> logOut()} className="d-flex justify-content-center align-items-center">
                                                <img src={out} width={20} className='img-fluid me-2 pb-3' alt="Homepage" />
                                                <p>লগ আউট করুন</p>
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
                            </div> */}
                    </div>


                    {/* <div className="collapse navbar-collapse navbar-menu" id="navbarNavAltMarkup">
                         <div className="d-lg-none me-2">
                            <div className="d-flex justify-content-center align-items-center">
                                {
                                    user?.photo ?
                                        <img src={user.photo} className='img-fluid px-4' width={100} alt={user.name} loading="lazy" />
                                        :
                                        <img src={user} className='img-fluid px-4' width={100} alt="Circular user svg" loading="lazy" />
                                }
                                {
                                    user?.name ?
                                        <h2 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className='pt-2 text-primary'>{user.name}</h2>
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
                    {/* <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
                    </div> 
    */}
                </nav>

            </div>
        </div>
    );
};

export default DNavbar;