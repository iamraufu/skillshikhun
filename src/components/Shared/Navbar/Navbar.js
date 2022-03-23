import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../images/logo.png';

const Navbar = () => {
    return (
        <div style={{ backgroundColor: 'white' }} className="fixed-top">
            <div style={{ height: '80px' }} className="container-xl">

                <nav className="navbar navbar-expand-lg navbar-light mt-1">
                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <Link to='/' className='mx-auto d-block'>
                            <img src={logo} className='img-fluid' width={100} alt="Skill শিখুন" />
                        </Link>

                        <Link className="text-decoration-none text-warning d-lg-none" to="/login">Login</Link>

                        <div style={{ width: '10%' }} className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div style={{ backgroundColor: '#f4f4f8' }} className="navbar-nav mx-auto p-1">
                                <Link onClick={()=>{window.scrollTo(0, 0);}} className="nav-link nav-item" to="/digital-marketing">ডিজিটাল মার্কেটিং</Link>
                                <Link onClick={()=>{window.scrollTo(0, 0);}} className="nav-link nav-item" to="/video-editing">ভিডিও এডিটিং</Link>
                                <Link onClick={()=>{window.scrollTo(0, 0);}} className="nav-link nav-item" to="/web-development">ওয়েব ডেভেলপমেন্ট</Link>
                                <Link onClick={()=>{window.scrollTo(0, 0);}} className="nav-link nav-item" to="/graphics-design">গ্রাফিক্স ডিজাইন</Link>
                                <Link onClick={()=>{window.scrollTo(0, 0);}} className="nav-link nav-item" to="/course-fee">কোর্স ফী</Link>
                                <Link onClick={()=>{window.scrollTo(0, 0);}} className="nav-link nav-item" to="/admission">অ্যাডমিশন</Link>
                                <Link onClick={()=>{window.scrollTo(0, 0);}} className="nav-link nav-item" to="/contact">যোগাযোগ</Link>
                            </div>
                        </div>

                        <Link className="text-decoration-none text-danger d-none d-lg-block " to="/login"><button className='login-btn-lg'>🚀 Login</button></Link>

                    </div>
                </nav>


                {/* <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">

        <Link to='/' className='mx-auto d-block'>
            <img src={logo} className='img-fluid' width={100} alt="Skill শিখুন" />
        </Link>

        <div className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            <svg _ngcontent-serverApp-c40="" width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-font"><path _ngcontent-serverApp-c40="" d="M0.731112 7.3335H13.2689C13.6727 7.3335 14 7.75435 14 8.2735V8.3935C14 8.91264 13.6727 9.3335 13.2689 9.3335H0.731112C0.32733 9.3335 0 8.91264 0 8.3935V8.2735C0 7.75435 0.32733 7.3335 0.731112 7.3335Z" fill="#231F20"></path><path _ngcontent-serverApp-c40="" d="M1.09667 14.3335H19.9033C20.509 14.3335 21 14.8245 21 15.4302V15.5702C21 16.1758 20.509 16.6668 19.9033 16.6668H1.09667C0.490995 16.6668 0 16.1758 0 15.5702V15.4302C0 14.8245 0.490995 14.3335 1.09667 14.3335Z" fill="#231F20"></path><path _ngcontent-serverApp-c40="" d="M1.09667 0H19.9033C20.509 0 21 0.490995 21 1.09667V1.23667C21 1.84234 20.509 2.33333 19.9033 2.33333H1.09667C0.490995 2.33333 0 1.84234 0 1.23667V1.09667C0 0.490995 0.490995 0 1.09667 0Z" fill="#231F20"></path></svg>
        </div>


        <div className="custom-navbar collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className=" navbar-nav mx-auto d-block d-flex">

                <div class="accordion">
                    <section class="accordion-item">
                        <span>কোর্স সমূহ</span>
                        <div class="accordion-item-content">
                            <Link className="nav-link" to="/">ডিজিটাল মার্কেটিং</Link>
                            <Link className="nav-link" to="/">ভিডিও এডিটিং</Link>
                            <Link className="nav-link" to="/">গ্রাফিক্স ডিজাইন</Link>
                        </div>
                    </section>
                </div>

                    <Link className="nav-link" to="/">কোর্স ফী</Link>
                    <Link className="nav-link" to="/">অ্যাডমিশন</Link>
                    <Link className="nav-link" to="/">যোগাযোগ</Link>
            </div>
        </div>
    </div>
</nav> */}

            </div>
        </div>
    );
};

export default Navbar;