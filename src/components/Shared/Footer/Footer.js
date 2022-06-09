import React from 'react';
import logo from '../../../images/logo.png';
import footerData from '../../../data/Footer/footerData';
import groupsData from '../../../data/Footer/groupsData';
import links from '../../../data/Footer/links';
import play from '../../../images/play.png';
import app from '../../../images/app.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#282424' }}>
            <div className="container-fluid p-5">

                <div className="row">
                    <div className="col-lg-4">
                        <img src={logo} alt="" width={80} className="img-fluid" />
                        <h5 className="text-white mt-3">Registered Address</h5>
                        <p className="text-muted mt-3">15/1 Lake Circus, Kalabagan, North Dhanmondi, Dhaka - 1205.</p>

                        <p className="mt-3"><a href="mailto:aacholfoundation@gmail.com" className="text-decoration-none text-muted">contact@skillshikhun.com</a></p>
                        <p className=""><a href="tel:09613-823645" className="text-decoration-none text-muted">09613-823645</a></p>

                    </div>

                    <div className="col-lg-2">
                        <h5 style={{ marginTop: '75px' }} className="text-white">Important Links</h5>
                        <div className="row">
                            {footerData.map(data => <Link className='text-muted mt-2 text-decoration-none' to={data.link}>{data.name}</Link>)}
                        </div>
                    </div>

                    <div className="col-lg-3">

                        <h4 className='text-white mt-4 text-center'>Contact Us On Social Media</h4>

                        <h5 className='text-white mt-4'>Skill Shikhun</h5>
                        {links.map(data =>
                            <a href={data.link} className='text-muted mt-2 text-decoration-none' target="_blank" rel="noreferrer">
                                <img src={data.icon} alt={data.name} className='img-fluid mt-2 px-2' style={{ width: '50px' }} /></a>)}
                        <h5 className='text-white mt-4'>Groups</h5>
                        <div className="row">{groupsData.map(data => <a href={data.link} className='text-muted mt-2 text-decoration-none' target="_blank" rel="noreferrer">{data.name}</a>)}</div>
                    </div>

                    <div className="col-lg-3">
                        <h4 className='text-white mt-4 text-center'>Download Skill Shikhun App</h4>
                        <a href="/" target="_blank" rel="noreferrer">
                            <img src={play} alt="Download Official App" className="img-fluid mx-auto d-block my-4" style={{ width: '150px' }} />
                        </a>

                        <a href="/" target="_blank" rel="noreferrer">
                            <img src={app} alt="Download Official App" className="img-fluid mx-auto d-block my-4" style={{ width: '150px' }} />
                        </a>
                    </div>
                </div>
            </div>
            <p style={{marginBottom:'0', paddingBottom:'10px'}} className='text-center text-white'>Developed by <a href="https://www.google.com/search?q=eftykhar+rahman" className="text-decoration-none text-muted ps-1" target="_blank" rel="noreferrer"> Eftykhar Rahman</a>
            </p>
        </div>
    );
};

export default Footer;