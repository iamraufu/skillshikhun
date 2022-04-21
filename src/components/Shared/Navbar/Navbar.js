import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../images/logo.png';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {

    const {user} = useAuth();

    return (
        <div style={{ backgroundColor: 'white' }} className="fixed-top">
            {/* <div className="bg-danger"><h1 className='text-center'>এই সাইট উন্নয়নাধীন আছে</h1></div> */}
            <div style={{ height: '80px' }} className="container-xl">

                <nav className="navbar navbar-expand-lg navbar-light mt-1">
                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <Link onClick={() => { window.scrollTo(0, 0); }} to='/' className='mx-auto d-block'>
                            <img src={logo} className='img-fluid' width={100} alt="Skill শিখুন" loading="lazy" />
                        </Link>

                        {
                            user.email? 
                            <Link className="text-decoration-none text-danger d-lg-none" to="/dashboard"><button className='login-btn-lg btn-dark btn'>ড্যাশবোর্ড</button></Link> :
                            <Link className="text-decoration-none text-black d-lg-none fw-bold" to="/login">লগ-ইন</Link>
                        }

                        <div style={{ width: '10%' }} className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            {
                                user.email?
                                <div style={{ backgroundColor: '#f4f4f8' }} className="navbar-nav mx-auto p-1">
                            <Link onClick={()=>{window.scrollTo(0, 0);}} className="nav-link nav-item" to="/courses">কোর্স সমূহ</Link>
                                <Link onClick={()=>{window.scrollTo(0, 0);}} className="nav-link nav-item" to="/admission">অ্যাডমিশন</Link>
                                <Link onClick={()=>{window.scrollTo(0, 0);}} className="nav-link nav-item" to="/contact">যোগাযোগ</Link>
                            </div>
                                 : 
                                 <div style={{ backgroundColor: '#f4f4f8' }} className="navbar-nav mx-auto p-1">
                                <Link onClick={()=>{window.scrollTo(0, 0);}} className="nav-link nav-item" to="/digital-marketing">ডিজিটাল মার্কেটিং</Link>
                                <Link onClick={()=>{window.scrollTo(0, 0);}} className="nav-link nav-item" to="/video-editing">ভিডিও এডিটিং</Link>
                                <Link onClick={()=>{window.scrollTo(0, 0);}} className="nav-link nav-item" to="/web-development">ওয়েব ডেভেলপমেন্ট</Link>
                                <Link onClick={()=>{window.scrollTo(0, 0);}} className="nav-link nav-item" to="/graphics-design">গ্রাফিক্স ডিজাইন</Link>
                                <Link onClick={()=>{window.scrollTo(0, 0);}} className="nav-link nav-item" to="/admission">অ্যাডমিশন</Link>
                                <Link onClick={()=>{window.scrollTo(0, 0);}} className="nav-link nav-item" to="/contact">যোগাযোগ</Link>
                            </div>
                            }
                        </div>

                        {
                            user.email? <Link onClick={()=>{window.scrollTo(0, 0);}} className="text-decoration-none text-danger d-none d-lg-block" to="/dashboard"><button className='login-btn-lg btn-dark btn'>ড্যাশবোর্ড</button></Link>: <Link className="text-decoration-none text-danger d-none d-lg-block" to="/login"><button className='login-btn-lg btn-dark btn'>লগ ইন/ সাইন আপ</button></Link>
                        }

                    </div>
                </nav>

            </div>
        </div>
    );
};

export default Navbar;