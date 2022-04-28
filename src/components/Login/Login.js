import React, { useState } from 'react';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../images/google.png';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
const Navbar = React.lazy(() => import('../Shared/Navbar/Navbar'));

const Login = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { signInUsingGoogle, user } = useAuth();

    const [phone, setPhone] = useState(123);
    // eslint-disable-next-line
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);

    if (user.email) {
        navigate(from, { replace: true })
    }

    const handlePhoneNumberChange = (e) => {
        const input = document.querySelector('input');

        input.addEventListener('input', (e) => {
            let input = e.target;
            let inputValue = input.value;
            let inputLength = inputValue.length;

            if (inputLength < 11) {
                setFlag(false);
                const submit_btn = document.querySelector('#submit_btn');
                submit_btn.disabled = true;
                document.getElementById('submit_btn').style.backgroundColor = 'grey';
            }

            if (inputLength === 11) {
                setFlag(true);
                const submit_btn = document.querySelector('#submit_btn');
                submit_btn.disabled = false;
                document.getElementById('submit_btn').style.backgroundColor = 'rgb(84, 104, 255)';
            }
        });
    }

    const { register, handleSubmit } = useForm();
    const { register: register2, handleSubmit: handleSubmit2 } = useForm();
    const { register: register3, handleSubmit: handleSubmit3 } = useForm();
    const { register: register4, handleSubmit: handleSubmit4 } = useForm();

    // submit function for phone number taking
    const onSubmit = data => {
        setPhone(data.phone);

        if (flag === true) {
            OTPGenerate(data);
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a valid phone number',
            })
        }
    }

    // submit function for otp verification
    const onSubmit2 = async data => {
        await OTPVerification(data);
    }

    // submit function for password taking
    const onSubmit3 = data => {
        setPassword(data.password);
        passwordInput(data);
    }

    // submit function for password verification
    const onSubmit4 = data => {
        passwordVerification(data);
    }

    const OTPGenerate = async (data) => {
        const submit_btn = document.querySelector('#submit_btn');
        submit_btn.disabled = true;
        submit_btn.innerHTML = "অপেক্ষা করুন...";
        document.getElementById('submit_btn').style.backgroundColor = 'grey';
        
        const phone_number = data.phone;
        const otp = Math.floor(Math.random() * 9000 + 1000);

        const OTPDetails = {
            phone: phone_number,
            otp: otp
        }

        // send otp to user
       await fetch('http://localhost:5000/api/send-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(OTPDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.message === "User already exists") {
                    document.getElementById('otp_verification_container').style.display = 'none';
                    document.getElementById('password_verification_container').style.display = 'block';
                    document.getElementById('login_title').style.display = 'none';
                }
                else {
                    document.getElementById('otp_verification_container').style.display = 'block';
                    document.getElementById('login_title').style.display = 'none';
                }
            }
            )
            document.getElementById('submit_btn_container').style.display = 'none';
            document.getElementById('number_input').disabled = true;
            document.getElementById('number_change_container').style.display = 'block';
    }


    // function for OTP verification
    const OTPVerification = (otpData) => {

        const otp = otpData.otp;

        fetch('http://localhost:5000/api/otp-verification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone: phone,
                otp: otp
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === true) {
                    document.getElementById('otp_verification_container').style.display = 'none';
                    document.getElementById('password_input_container').style.display = 'block';
                }
                else {
                }
            }
            )
    }


    // function for password input
    const passwordInput = (passwordData) => {
        const inputtedPassword = passwordData.password;

        fetch('http://localhost:5000/api/password-input', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone: phone,
                password: inputtedPassword
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === true) {
                    document.getElementById('password_input_container').style.display = 'none';
                    document.getElementById('password_verification_container').style.display = 'none';
                    navigate('/');
                }
                else {
                    document.getElementById('password_verification_container').style.display = 'none';
                }
            })
    }

    // function for password verification
    const passwordVerification = (passwordData) => {
        const inputtedPassword = passwordData.password;

        fetch('http://localhost:5000/api/password-input-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone: phone,
                password: inputtedPassword
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === true) {
                    Swal.fire(
                        'লগইন সম্পন্ন হয়েছে!',
                        'স্কিল শিখুন এ আপনাকে স্বাগতম!',
                        'success'
                        )
                    navigate('/');
                }
                else {
                    Swal.fire(
                        'আপনি ভুল পাসওয়ার্ড দিয়েছেন!',
                        'অনুগ্রহ করে আবার চেষ্টা করুন!',
                        'error'
                    )
                }
            })
    }

    // function for forget password
    const forgetPassword = () => {
        console.log(phone);
    }

    return (
        <div>
            <Navbar />
            <div style={{ minHeight: '100vh', backgroundColor: 'rgb(243, 245, 249)' }} className="">
                <div className="container login-container">
                    <div id='otp_login_container' style={{ display: 'block' }} className="mx-auto d-block">
                        <h1 id='login_title' style={{ fontSize: '20px', lineHeight: '28px', color: '#323862', fontWeight: '700' }} className='text-center'>ঘরে বসেই পা বাড়ান ভবিষ্যতের পথে!</h1>

                        {/* div for phone number input*/}
                        <div className="d-flex mx-auto d-block justify-content-center mt-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="d-flex">
                                    <span style={{ fontSize: '20px', lineHeight: '30px', color: '#4b5563', fontWeight: '400', backgroundColor: 'white', height: '50px', borderRadius: '5px' }} className='pt-2 px-2'>+88</span>
                                    <input
                                    id = 'number_input'
                                        onChangeCapture={handlePhoneNumberChange}
                                        className='form-control form mx-auto d-block' type="tel" aria-describedby='phone' autoComplete='off' maxLength='11' style={{ fontSize: '18px', lineHeight: '27px', color: '#8288b2', fontWeight: '400', backgroundColor: 'white', border: 'none', focus: 'red', maxWidth: '400px', height: '50px', marginLeft: '-0.3rem' }}
                                        {...register("phone", { required: true })} placeholder="আপনার মােবাইল নম্বর দিন" />
                                </div>

                                <div id='number_change_container' className="mt-2" style={{display:'none'}}>
                                    <p onClick={()=> navigate('/dashboard')} style={{textAlign: 'right', fontSize: '13px',lineHeight:'24px', fontWeight: '400',cursor: 'pointer'}}>নাম্বার পরিবর্তন করুন</p>
                                </div>

                                <div id='submit_btn_container' className="">
                                    <button type='submit' style={{ maxWidth: '400px' }} id='submit_btn' className='number-submit-btn mt-3 mx-auto d-block text-white'>এগিয়ে যান</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* div for verifying OTP */}
                    <div id='otp_verification_container' style={{ display: 'none' }}>
                        <h1 style={{ fontSize: '16px', lineHeight: '24px', color: '#323862', fontWeight: '700' }} className='mt-3 text-center'>আপনার মোবাইল নম্বরে প্রেরিত ওটিপি দিন</h1>
                        <div className="mx-auto d-block">
                            <form onSubmit={handleSubmit2(onSubmit2)}>
                                <input style={{ width: '285px', border:'none' }} className='form-control form mx-auto d-block' type="tel" autoComplete="off" maxLength="4" {...register2("otp", { required: true })} onKeyPress={(event, charCode) => { return event.charCode >= 48 && event.charCode <= 57 }} pattern="\d*" />
                                <button style={{ maxWidth: '400px' }} className='otp-submit-btn mt-3 mx-auto d-block text-white'
                                >এগিয়ে যান</button>
                            </form>
                        </div>
                    </div>

                    {/* div for collecting password */}
                    <div id="password_input_container" style={{ display: 'none' }}>
                        <h2 style={{ fontSize: '16px', lineHeight: '24px', color: '#3f3f3f', fontWeight: '700' }} className='text-center mt-3'>পাসওয়ার্ড</h2>
                        <div className="d-flex mx-auto d-block justify-content-center">
                            <form onSubmit={handleSubmit3(onSubmit3)}>
                                <input style={{ width: '285px' }} className='form-control form mx-auto d-block' type="password" autoComplete="off" {...register3("password", { required: true })} />
                                <button style={{ maxWidth: '400px' }} className='password-submit-btn mt-3 mx-auto d-block'
                                >এগিয়ে যান</button>
                            </form>
                        </div>
                    </div>

                    {/* div for password verification */}
                    <div id="password_verification_container" style={{ display: 'none' }}>
                        <h2 style={{ fontSize: '16px', lineHeight: '24px', color: '#3f3f3f', fontWeight: '700' }} className='text-center mt-3'>আপনার পাসওয়ার্ড দিন</h2>
                        <div className="d-flex mx-auto d-block justify-content-center">
                            <form onSubmit={handleSubmit4(onSubmit4)}>
                                <input style={{ width: '285px', border: 'none' }} className='form-control form mx-auto d-block' type="password" autoComplete="off" {...register4("password", { required: true })} />
                                <p onClick={forgetPassword} className='text-center mt-3 text-primary fw-bold' style={{cursor: 'pointer' }}>পাসওয়ার্ড ভুলে গিয়েছেন?</p>
                                <button style={{ maxWidth: '400px' }} className='password-submit-btn mt-3 mx-auto d-block text-white'>এগিয়ে যান</button>
                            </form>
                        </div>
                    </div>
                    
                    <div className="d-flex justify-content-center mt-5">
                        <div className="col-md-3"><hr /></div>
                        <p style={{}} className='fs-5 mx-2 fw-bold'>অথবা</p>
                        <div className="col-md-3"><hr /></div>
                    </div>

                    <div className="d-flex">
                        <div className="mx-auto d-block">
                            <button style={{ backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '10px', border: '1px solid rgb(236,236,236)' }} className='btn mt-5' onClick={signInUsingGoogle}>
                                <img width={60} src={google} alt="login with google" className='my-1 me-4' loading="lazy" />
                                <span className='pe-2'>গুগল দিয়ে লগইন করুন</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;