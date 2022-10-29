import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'

const Navbar = () => {

  const { user } = useAuth();

  const myRef = useRef(null);

  return (
    <div style={{ backgroundColor: 'white', boxShadow: '0 5px 15px #c4c4c44d', marginTop: '-5px' }} className="sticky-top">
      <div style={{ height: '75px' }} className="container-xl navbar-container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid navbar-container">

            <button onClick={() => myRef.current.scrollIntoView()} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <Link onClick={() => { window.scrollTo(0, 0); }} to='/' className='mx-auto d-block'>
              <img onClick={() => {
                document.addEventListener('contextmenu', event => event.preventDefault());
              }} src={logo} className='img-fluid' width={90} alt="Skill শিখুন" loading="lazy" />
            </Link>

            {
              user.email || localStorage.getItem('token') ?
                <NavLink className="text-decoration-none text-danger d-lg-none" to="/dashboard" onClick={() => { window.scrollTo(0, 0); }}><button className='login-btn-lg btn-dark btn me-2'>ড্যাশবোর্ড</button></NavLink> :
                <NavLink className="text-decoration-none text-black d-lg-none fw-bold me-2" to="/login" onClick={() => { window.scrollTo(0, 0); }}>লগ-ইন</NavLink>
            }

            <div className="collapse navbar-collapse navbar-menu" id="navbarNavAltMarkup">
              {
                user.email || localStorage.getItem('token') ?
                  <div style={{ backgroundColor: '#f4f4f8' }} className="navbar-nav mx-auto p-1">
                    <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                      color: isActive ? '#f8f9fa' : '#434257',
                      background: isActive ? '#666699' : '#f4f4f8'
                    })} className="nav-link nav-item" to="/courses">কোর্স সমূহ</NavLink>

                    <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                      color: isActive ? '#f8f9fa' : '#434257',
                      background: isActive ? '#666699' : '#f4f4f8'
                    })} className="nav-link nav-item" to="/dashboard/live-course">লাইভ কোর্স</NavLink>

                    <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                      color: isActive ? '#f8f9fa' : '#434257',
                      background: isActive ? '#666699' : '#f4f4f8'
                    })} className="nav-link nav-item" to="/dashboard/free-class">ফ্রি ক্লাস</NavLink>

                    <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                      color: isActive ? '#f8f9fa' : '#434257',
                      background: isActive ? '#666699' : '#f4f4f8'
                    })} className="nav-link nav-item" to="/dashboard/class-recordings">ক্লাস রেকর্ডিংস</NavLink>

                    <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                      color: isActive ? '#f8f9fa' : '#434257',
                      background: isActive ? '#666699' : '#f4f4f8'
                    })} className="nav-link nav-item" to="/dashboard/payment-history">পেমেন্ট ইতিহাস</NavLink>

                    <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                      color: isActive ? '#f8f9fa' : '#434257',
                      background: isActive ? '#666699' : '#f4f4f8'
                    })} className="nav-link nav-item" to="/dashboard/profile">প্রোফাইল</NavLink>

                  </div>
                  :
                  <div style={{ backgroundColor: '#f4f4f8' }} className="navbar-nav mx-auto p-1">
                    <NavLink style={({ isActive }) => ({
                      color: isActive ? '#f8f9fa' : '#434257',
                      background: isActive ? '#666699' : '#f4f4f8'
                    })} onClick={() => { window.scrollTo(0, 0); }} className="nav-link nav-item" to="/shobar-jnno-freelancing">ফ্রিল্যান্সিং</NavLink>
                    <NavLink onClick={() => { window.scrollTo(0, 0); }}
                      className="nav-link nav-item" to="/digital-marketing" style={({ isActive }) => ({
                        color: isActive ? '#f8f9fa' : '#434257',
                        background: isActive ? '#666699' : '#f4f4f8'
                      })}>ডিজিটাল মার্কেটিং</NavLink>
                    <NavLink style={({ isActive }) => ({
                      color: isActive ? '#f8f9fa' : '#434257',
                      background: isActive ? '#666699' : '#f4f4f8'
                    })} onClick={() => { window.scrollTo(0, 0); }} className="nav-link nav-item" to="/web-development">ওয়েব ডেভেলপমেন্ট</NavLink>
                    <NavLink style={({ isActive }) => ({
                      color: isActive ? '#f8f9fa' : '#434257',
                      background: isActive ? '#666699' : '#f4f4f8'
                    })} onClick={() => { window.scrollTo(0, 0); }} className="nav-link nav-item" to="/graphics-design">গ্রাফিক্স ডিজাইন</NavLink>
                    <NavLink style={({ isActive }) => ({
                      color: isActive ? '#f8f9fa' : '#434257',
                      background: isActive ? '#666699' : '#f4f4f8'
                    })} onClick={() => { window.scrollTo(0, 0); }} className="nav-link nav-item" to="/video-editing">ভিডিও এডিটিং</NavLink>
                  </div>
              }
            </div>

            {
              user.email || localStorage.getItem('token') ? <Link onClick={() => { window.scrollTo(0, 0); }} className="text-decoration-none text-danger d-none d-lg-block" to="/dashboard"><button className='login-btn-lg btn-dark btn'>ড্যাশবোর্ড</button></Link> : <Link className="text-decoration-none text-danger d-none d-lg-block" to="/login"><button className='login-btn-lg btn-dark btn'>লগ ইন/ সাইন আপ</button></Link>
            }

          </div>
        </nav>

      </div>
    </div>
  );
};

export default Navbar;