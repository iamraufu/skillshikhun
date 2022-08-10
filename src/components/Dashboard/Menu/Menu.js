import React from 'react';
import './Menu.css';
// import video from '../../../images/dashboard/video.webp';
import live from '../../../images/dashboard/live.webp';
import payment from '../../../images/dashboard/payment.webp';
import profile from '../../../images/dashboard/profile.webp';
import video_library from '../../../images/dashboard/video_library.webp';
import free from '../../../images/dashboard/free.webp';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div style={{ borderWidth: '1px', boxShadow: '0 5px 15px #c4c4c44d', backgroundColor: 'rgba(19, 51, 139, 1)' }} className="d-lg-none container-fluid fixed-bottom">

            <div className="d-flex justify-content-around align-items-center">
                <NavLink onClick={() => { window.scrollTo(0, 0); }}
                    style={({ isActive }) => ({
                        color: isActive ? '#f8f9fa' : '#434257',
                        background: isActive ? '#96b4eb' : '#ffffff',
                        borderRadius: '15px'
                    })}
                    className="col-md-2 col-sm-2 menu-item mt-2" to="/dashboard/free-class">
                    <img src={free} className='img-fluid mx-auto d-block menu-image' width={35} alt="menu item" />
                </NavLink>

                {/* <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                    color: isActive ? '#f8f9fa' : '#434257',
                    background: isActive ? '#96b4eb' : '#ffffff',
                    borderRadius: '15px'
                })} className="col-md-2 col-sm-2 menu-item mt-2" to="/dashboard/video-course">
                    <img src={video} className='img-fluid mx-auto d-block menu-image' width={35} alt="menu item" />
                </NavLink> */}

                <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                    color: isActive ? '#f8f9fa' : '#434257',
                    background: isActive ? '#96b4eb' : '#ffffff',
                    borderRadius: '15px'
                })} className="col-md-2 col-sm-2 menu-item mt-2" to="/dashboard/live-course">
                    <img src={live} className='img-fluid mx-auto d-block menu-image' width={35} alt="menu item" />
                </NavLink>

                <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                    color: isActive ? '#f8f9fa' : '#434257',
                    background: isActive ? '#96b4eb' : '#ffffff',
                    borderRadius: '15px'
                })} className="col-md-2 col-sm-2 menu-item mt-2" to="/dashboard/class-recordings">
                    <img src={video_library} className='img-fluid mx-auto d-block menu-image' width={35} alt="menu item" />
                </NavLink>

                <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                    color: isActive ? '#f8f9fa' : '#434257',
                    background: isActive ? '#96b4eb' : '#ffffff',
                    borderRadius: '15px'
                })} className="col-md-2 col-sm-2 menu-item mt-2" to="/dashboard/payment-history">
                    <img src={payment} className='img-fluid mx-auto d-block menu-image' width={35} alt="menu item" />
                </NavLink>

                <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                    color: isActive ? '#f8f9fa' : '#434257',
                    background: isActive ? '#96b4eb' : '#ffffff',
                    borderRadius: '15px'
                })} className="col-md-2 col-sm-2 menu-item mt-2" to="/dashboard/profile">
                    <img src={profile} className='img-fluid mx-auto d-block menu-image' width={35} alt="menu item" />
                </NavLink>
            </div>

            <div className="d-flex justify-content-around align-items-center">
                <div className="col-md-2 col-sm-2">
                    <p className="menu-text text-center ps-1">ডেমো ক্লাস</p>
                </div>
                {/* <div className="col-md-2 col-sm-2">
                    <p className="menu-text text-center ps-2">ভিডিও কোর্স</p>
                </div> */}
                <div className="col-md-2 col-sm-2">
                    <p className="menu-text text-center ps-2">লাইভ কোর্স</p>
                </div>
                <div className="col-md-2 col-sm-2">
                    <p className="menu-text text-center">ক্লাস রেকর্ডিংস</p>
                </div>
                <div className="col-md-2 col-sm-2">
                    <p className="menu-text text-center pe-3">পেমেন্ট</p>
                </div>
                <div className="col-md-2 col-sm-2">
                    <p className="menu-text text-center pe-1">প্রোফাইল</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;