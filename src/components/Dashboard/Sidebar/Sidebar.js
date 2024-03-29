import React from 'react';
import './Sidebar.css';
import { NavLink
    // , useNavigate 
} from 'react-router-dom';
import live from '../../../images/dashboard/live.svg';
import course from '../../../images/dashboard/course.svg';
import free from '../../../images/dashboard/free.svg';
import payment from '../../../images/dashboard/payment.svg';
import home from '../../../images/dashboard/home.svg';
import profile from '../../../images/dashboard/profile.svg';
import dashboard from '../../../images/dashboard/dashboard.svg';

const Sidebar = () => {

    // let navigate = useNavigate();

    // const clickHandler = (route) => {
    //     window.scrollTo(0, 0);
    //     navigate(`/dashboard/${route}`);
    // }

    return (
        <section>
            <div className="container-xl dashboard-navbar-container">
                <nav className='dashboard-navbar dashboard-navbar-expand-lg position-fixed'>
                    <div className="container-fluid">

                        {/* <button className='dashboard-navbar-toggler' style={{ display: 'none' }}>
                            <span className="dashboard-navbar-toggler-icon"></span>
                        </button> */}

                        <div className="dashboard-navbar-collapse mt-5 p-3">

                                <NavLink className='dashboard-nav-link' style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? '#b94a8f' : '#ffffff'
                                })} end to='/dashboard'>
                                    <div 
                                    // onClick={() => clickHandler('')} 
                                    className="dashboard-nav-item">
                                        <img src={dashboard} width={35} className='img-fluid' alt="Live Course" />
                                        <span className='dashboard-nav-text'>Dashboard</span>
                                    </div>
                                </NavLink>

                                <NavLink className='dashboard-nav-link' style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? '#b94a8f' : '#ffffff'
                                })} to='/dashboard/live-course'>
                                    <div 
                                    // onClick={() => clickHandler('live-course')} 
                                    className="dashboard-nav-item">
                                        <img src={live} width={35} className='img-fluid' alt="Live Course" />
                                        <span className='dashboard-nav-text'>লাইভ কোর্স</span>
                                    </div>
                                </NavLink>

                                <NavLink className='dashboard-nav-link' style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? '#b94a8f' : '#ffffff'
                                })} to='/dashboard/free-class'>
                                    <div 
                                    // onClick={() => clickHandler('free-class')} 
                                    className="dashboard-nav-item">
                                        <img src={free} width={30} className='img-fluid' alt="Free Class" />
                                        <span className='dashboard-nav-text'>ডেমো ক্লাস</span>
                                    </div>
                                </NavLink>

                                {/* <NavLink className='dashboard-nav-link' style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? '#b94a8f' : '#ffffff'
                                })} to='/dashboard/video-course'>
                                    <div 
                                    // onClick={() => clickHandler('video-course')} 
                                    className="dashboard-nav-item">
                                        <img src={course} width={25} className='img-fluid' alt="Video Course" />
                                        <span className='dashboard-nav-text'>ভিডিও কোর্স</span>
                                    </div>
                                </NavLink> */}

                                <NavLink className='dashboard-nav-link' style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? '#b94a8f' : '#ffffff'
                                })} to='/dashboard/class-recordings'>
                                    <div 
                                    // onClick={() => clickHandler('video-course')} 
                                    className="dashboard-nav-item">
                                        <img src={course} width={25} className='img-fluid' alt="Video Course" />
                                        <span className='dashboard-nav-text'>ক্লাস রেকর্ডিংস</span>
                                    </div>
                                </NavLink>

                                <NavLink className='dashboard-nav-link' style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? '#b94a8f' : '#ffffff'
                                })} to='/dashboard/payment-history'>
                                    <div 
                                    // onClick={() => clickHandler('payment-history')} 
                                    className="dashboard-nav-item">
                                        <img src={payment} width={25} className='img-fluid' alt="Payment History" />
                                        <span className='dashboard-nav-text'>পেমেন্ট ইতিহাস</span>
                                    </div>
                                </NavLink>

                                <NavLink className='dashboard-nav-link' style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? '#b94a8f' : '#ffffff'
                                })} to='/dashboard/profile'>
                                    <div 
                                    // onClick={() => clickHandler('profile')} 
                                    className="dashboard-nav-item">
                                        <img src={profile} width={25} className='img-fluid' alt="Profile" />
                                        <span className='dashboard-nav-text'>প্রোফাইল</span>
                                    </div>
                                </NavLink>

                                <NavLink className='dashboard-nav-link' style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? '#b94a8f' : '#ffffff'
                                })} to='/'>
                                    <div 
                                    // onClick={() => clickHandler('profile')} 
                                    className="dashboard-nav-item">
                                        <img src={home} width={25} className='img-fluid' alt="Profile" />
                                        <span className='dashboard-nav-text'>Homepage</span>
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