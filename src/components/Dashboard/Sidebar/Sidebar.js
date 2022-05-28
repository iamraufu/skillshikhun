import React from 'react';
import './Sidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import live from '../../../images/dashboard/live.svg';
import course from '../../../images/dashboard/course.svg';
import free from '../../../images/dashboard/free.svg';
import payment from '../../../images/dashboard/payment.svg';
// import home from '../../../images/dashboard/home.svg';
import profile from '../../../images/dashboard/profile.svg';

const Sidebar = () => {

    let navigate = useNavigate();

    const clickHandler = (route) => {
        window.scrollTo(0, 0);
        navigate(`/dashboard/${route}`);
    }

    return (
        <section className=''>
            <div className="container-xl dashboard-navbar-container">
                <nav className='dashboard-navbar dashboard-navbar-expand-lg'>
                    <div className="container-fluid">

                        <button className='dashboard-navbar-toggler' style={{ display: 'none' }}>
                            <span className="dashboard-navbar-toggler-icon"></span>
                        </button>

                        <div className="dashboard-navbar-collapse mt-5 p-3">

                                <NavLink className='dashboard-nav-link' style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? '#653dae' : '#dfdfdf'
                                })} to='/dashboard/live-course'>
                                    <div onClick={() => clickHandler('live-course')} className="dashboard-nav-item">
                                        <img src={live} width={35} className='img-fluid' alt="Live Course" />
                                        <span className='dashboard-nav-text'>লাইভ কোর্স</span>
                                    </div>
                                </NavLink>

                                <NavLink className='dashboard-nav-link' style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? '#653dae' : '#dfdfdf'
                                })} to='/dashboard/free-class'>
                                    <div onClick={() => clickHandler('free-class')} className="dashboard-nav-item">
                                        <img src={free} width={30} className='img-fluid' alt="Free Class" />
                                        <span className='dashboard-nav-text'>ফ্রি ক্লাস</span>
                                    </div>
                                </NavLink>

                                <NavLink className='dashboard-nav-link' style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? '#653dae' : '#dfdfdf'
                                })} to='/dashboard/video-course'>
                                    <div onClick={() => clickHandler('video-course')} className="dashboard-nav-item">
                                        <img src={course} width={25} className='img-fluid' alt="Video Course" />
                                        <span className='dashboard-nav-text'>ভিডিও কোর্স</span>
                                    </div>
                                </NavLink>

                                <NavLink className='dashboard-nav-link' style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? '#653dae' : '#dfdfdf'
                                })} to='/dashboard/payment-history'>
                                    <div onClick={() => clickHandler('payment-history')} className="dashboard-nav-item">
                                        <img src={payment} width={25} className='img-fluid' alt="Payment History" />
                                        <span className='dashboard-nav-text'>পেমেন্ট ইতিহাস</span>
                                    </div>
                                </NavLink>

                                <NavLink className='dashboard-nav-link' style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? '#653dae' : '#dfdfdf'
                                })} to='/dashboard/profile'>
                                    <div onClick={() => clickHandler('profile')} className="dashboard-nav-item">
                                        <img src={profile} width={25} className='img-fluid' alt="Profile" />
                                        <span className='dashboard-nav-text'>প্রোফাইল</span>
                                    </div>
                                </NavLink>

                        </div>

                    </div>

                </nav>

            </div>
        </section>
    );
};

export default Sidebar;