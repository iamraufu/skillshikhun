import React from 'react';
import footerData from '../../../data/Footer/footerData';
import groupsData from '../../../data/Footer/groupsData';
import links from '../../../data/Footer/links';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import googlePlay from '../../../images/play_store.png'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#f3f5f9' }}>
            <div className="container-fluid p-5">

                <div className="row">
                    <div className="col-lg-4">
                        <img src={logo} alt="" width={80} className="img-fluid" />
                        <h5 className=" mt-3">Registered Address</h5>
                        <p className="text-muted mt-3">15/1 Lake Circus, Kalabagan, North Dhanmondi, Dhaka - 1205.</p>

                        <p className="mt-3"><a href="mailto:contact@skillshikhun.com" className="text-decoration-none text-muted">contact@skillshikhun.com</a></p>
                        <p className=""><a href="tel:09613-823645" className="text-decoration-none text-muted">09613-823645</a></p>

                    </div>

                    <div className="col-lg-2">
                        <h5 style={{ marginTop: '75px' }} className="">Important Links</h5>
                        <div className="row">
                            {footerData.map((data, index) => <Link key={index + 1} onClick={() => { window.scrollTo(0, 0); }} className='text-muted mt-2 text-decoration-none' to={data.link}>{data.name}</Link>)}
                        </div>
                    </div>

                    <div className="col-lg-3">

                        <h4 className='mt-4 text-center'>Contact Us On Social Media</h4>

                        <h5 className='mt-4'>Skill Shikhun</h5>
                        {links.map((data, index) =>
                            <a key={index + 1} href={data.link} className='text-muted mt-2 text-decoration-none' target="_blank" rel="noreferrer">
                                <img src={data.icon} alt={data.name} className='img-fluid mt-2 px-2' style={{ width: '50px' }} /></a>)}
                        <h5 className=' mt-4'>Groups</h5>
                        <div className="row">{groupsData.map((data, index) => <a key={index + 1} href={data.link} className='text-muted mt-2 text-decoration-none' target="_blank" rel="noreferrer">{data.name}</a>)}</div>
                    </div>

                    <div className="col-lg-3">
                        <h4 className=' mt-4 text-center'>Download Skill Shikhun App</h4>
                        <a href="https://play.google.com/store/apps/details?id=com.skillshikhun.skillshikhun" target="_blank" rel="noreferrer">
                            <img src={googlePlay} alt="Download Official App" className="img-fluid mx-auto d-block my-4" style={{ width: '150px' }} />
                        </a>
                    </div>
                </div>
            </div>
            <p style={{ marginBottom: '0', paddingBottom: '10px' }} className='text-center text-muted'>স্বত্ব &copy; ২০২১ - ২০২২ স্কিল শিখুন কতৃক সর্বস্বত্ব সংরক্ষিত
            </p>
        </div>
    );
};

export default Footer;