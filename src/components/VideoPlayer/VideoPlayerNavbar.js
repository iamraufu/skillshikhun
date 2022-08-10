import React, { useState, useEffect } from 'react';
import './VideoPlayerNavbar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logoText.png';
import starImage from '../../images/star.svg';

const VideoPlayerNavbar = (props) => {

    const [courseLeft, setCourseLeft] = useState(100);
    const [courseDone, setCourseDone] = useState(props.courseDone);

    const handleCourseLeft = () => {
        setCourseLeft(courseLeft - courseDone);
    }

    useEffect(() => {
        setCourseDone(props.courseDone);
        var downloadTimer = setInterval(handleCourseLeft, 1000);
        return () => {
            clearInterval(downloadTimer);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <section>
            <nav style={{ backgroundColor: '#653dae' }} className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <Link onClick={() => { window.scrollTo(0, 0); }} to='/' className='pe-4'>
                            <img src={logo} className='img-fluid' width={100} alt="Skill শিখুন" loading="lazy" />
                        </Link>

                        {/* Course Name will be here */}
                        <h1 style={{ borderLeft: '1px solid lightgrey' }} className='fs-6 text-white ps-4 pt-1'>Full Stack Web Development for Beginners</h1>
                    </div>

                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon custom-navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse navbar-menu" id="navbarNavAltMarkup">

                        <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                            color: isActive ? '#f8f9fa' : '#434257'
                        })} className="nav-link text-center ms-auto" to="/courses">কোর্স সমূহ</NavLink>

                        <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                            color: isActive ? '#f8f9fa' : '#434257'
                        })} className="nav-link text-center" to="#"><img width={20} className='img-fluid pb-1' src={starImage} alt="" /> রিভিউ দিন</NavLink>

                        <h2 className='fs-6 text-white pt-2 cursor-pointer text-center'>ভিডিও শেষ হয়েছে <span style={{ border: '2px solid #198754', borderRadius: '15px' }} className='ms-2 px-3 bg-white text-success fw-bold' >0/50</span> </h2>

                        <div className="d-flex justify-content-center align-items-center px-2">
                            <h2 className='fs-6 text-white cursor-pointer text-center pe-2 pt-2'>কোর্স কমপ্লিট হয়েছে {courseDone}%</h2>
                            <progress style={{ width: '100px' }} value={courseDone} max="100" id="progressBar" className=''></progress>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default VideoPlayerNavbar;