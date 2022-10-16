import React, { useEffect, useState } from 'react';
import './Success.css';
// import Navbar from '../Shared/Navbar/Navbar';
import done from '../../images/done.svg';
import { Link } from 'react-router-dom';

const Success = () => {

    const phone = localStorage.getItem('phone');
    const [userPhoneData, setUserPhoneData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://skillshikhun.herokuapp.com/users/userBy/phone/${phone}`);
            const data = await res.json();
            setUserPhoneData(data);
        }
        fetchData();
    }, [phone])

    return (
        <div className="success-container">
            {/* <Navbar /> */}
            <div style={{ boxShadow: '0 3px 10px 3px #0003' }} className='container bg-white mx-5'>
                <img src={done} width={60} className='ing-fluid mx-auto d-block mt-5' alt="order completed" />
                <h1 style={{fontSize:'18px', lineHeight:'28px', color:'#9e9ea7', textAlign:'center', marginTop:'1.5rem'}}>প্রিয় {userPhoneData.name},</h1>
                <h2 className='text-center fw-bold'>আপনার কোর্স ক্রয় সম্পন্ন হয়েছে!</h2>
                <p className='text-center'>আপনার ইমেইলে একটি ইনভয়েস পাঠিয়ে দেয়া হয়েছে | আপনি চাইলে ড্যাশবোর্ড থেকেও বিস্তারিত দেখে নিতে পারেন |</p>
                <Link className="text-decoration-none" to='/dashboard'>
                <button className='mx-auto d-block my-5 btn-brand-success'>
                ড্যাশবোর্ড
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Success;