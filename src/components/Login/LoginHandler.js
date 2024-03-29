import React, { useState } from 'react';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

// import google from '../../images/google.svg';
// import facebook from '../../images/facebook.svg';

const LoginHandler = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const {
        // signInUsingGoogle, 
        registerUser
        , user } = useAuth();

    const [phone, setPhone] = useState(123);
    // eslint-disable-next-line
    const [password, setPassword] = useState("");
    // eslint-disable-next-line
    const [userName, setUserName] = useState("");
    // eslint-disable-next-line
    const [email, setEmail] = useState("");
    const [flag, setFlag] = useState(false);

    if (user.email || localStorage.getItem('token')) {
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
    const { register: register5, handleSubmit: handleSubmit5 } = useForm();
    const { register: register6, handleSubmit: handleSubmit6 } = useForm();

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
        setUserName(data.name);
        setPassword(data.password);
        setEmail(data.email);
        passwordInput(data);
    }

    // submit function for password verification
    const onSubmit4 = data => {
        passwordVerification(data);
    }

    // submit function for otp verification of password reset
    const onSubmit5 = data => {
        forgetPasswordOTPVerify(data);
    }

    // submit function for password reset
    const onSubmit6 = data => {
        passwordReset(data);
    }

    const OTPGenerate = async (data) => {
        const submit_btn = document.querySelector('#submit_btn');
        submit_btn.disabled = true;
        submit_btn.innerHTML = "অপেক্ষা করুন...";
        document.getElementById('submit_btn').style.backgroundColor = 'grey';

        const phone_number = data.phone;

        const OTPDetails = {
            phone: phone_number
        }

        // send otp to user
        await fetch('https://api-skillshikhun.herokuapp.com/api/send-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(OTPDetails)
        })
            .then(res => res.json())
            .then(data => {
                document.getElementById('submit_btn_container').style.display = 'none';
                if (data.message === "User already exists") {
                    document.getElementById('otp_verification_container').style.display = 'none';
                    document.getElementById('password_verification_container').style.display = 'block';
                    document.getElementById('password_verify').focus();
                    document.getElementById('login_title').style.display = 'none';
                }
                else {
                    document.getElementById('otp_verification_container').style.display = 'block';
                    document.getElementById('verify_otp').focus();
                    document.getElementById('login_title').style.display = 'none';
                }
            }
            )
        document.getElementById('number_input').disabled = true;
        document.getElementById('number_change_container').style.display = 'block';
    }


    // function for OTP verification
    const OTPVerification = (otpData) => {
        const otp = otpData.otp;
        fetch('https://api-skillshikhun.herokuapp.com/api/otp-verification', {
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
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please enter an invalid OTP',
                    })
                }
            }
            )
    }


    // function for password input
    const passwordInput = (passwordData) => {
        const inputtedPassword = passwordData.password;
        const name = passwordData.name;
        const email = passwordData.email;

        const day = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();

        const date = formatTime(year) + "-" + formatTime(month) + "-" + formatTime(day)  ;

        function formatTime(time) {
            return time < 10 ? (`0${time}`) : time;
        }

        const time = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

        fetch('https://api-skillshikhun.herokuapp.com/api/password-input', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone: phone,
                name: name,
                password: inputtedPassword,
                email: email
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === true) {
                    document.getElementById('password_input_container').style.display = 'none';
                    document.getElementById('password_verification_container').style.display = 'none';
                    // Swal.fire(
                    //     `ধন্যবাদ ${name}! রেজিস্ট্রেশন সম্পন্ন হয়েছে`,
                    //     'স্কিল শিখুন এ আপনাকে স্বাগতম!',
                    //     'success'
                    // )
                    let phoneUser = { displayName: name, email: email, phoneNumber: phone, photoURL: '', password: inputtedPassword, user_created_date: `${date} at ${time}`, fromDemo: "No", fromLogin: "Yes" };
                    registerUser(phoneUser);
                    localStorage.setItem('token', 'bearer ' + data.status);
                    localStorage.setItem('phone', phone);
                    localStorage.setItem('name', JSON.stringify(name))
                    // window.location.replace('/dashboard');
                    navigate(from, { replace: true })
                    window.location.reload();
                    // navigate('/');
                }
                else {
                    document.getElementById('password_verification_container').style.display = 'none';
                }
            })
    }

    // function for password verification
    const passwordVerification = (passwordData) => {
        const inputtedPassword = passwordData.password;

        fetch('https://api-skillshikhun.herokuapp.com/api/password-input-login', {
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
                    // Swal.fire(
                    //     'লগইন সম্পন্ন হয়েছে!',
                    //     'স্কিল শিখুন এ আপনাকে স্বাগতম!',
                    //     'success'
                    // )
                    localStorage.setItem('token', 'bearer ' + data.status);
                    localStorage.setItem('phone', phone);
                    localStorage.setItem('name', JSON.stringify(data.data.user.name));
                    navigate(from, { replace: true })
                }
                else {
                    Swal.fire(
                        'আপনি ভুল পাসওয়ার্ড দিয়েছেন!',
                        'অনুগ্রহ করে আবার চেষ্টা করুন!',
                        'error'
                    )
                }
                document.getElementById('password_verify').value = ""
            })
    }

    // function for forget password button click
    const forgetPassword = () => {

        Swal.fire({
            title: 'পাসওয়ার্ড ভুলে গেছেন?',
            text: 'আপনি কি পাসওয়ার্ড ভুলে গেছেন?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'হ্যাঁ, ভুলে গেছি!'
        }).then((result) => {
            if (result.value) {
                fetch('https://api-skillshikhun.herokuapp.com/api/forget-password', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        phone: phone
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.status === true) {
                            Swal.fire(
                                'ওটিপি পাঠানো হয়েছে।',
                                'আপনার নির্দিষ্ট মোবাইল নম্বরে ওটিপি পাঠানো হয়েছে।',
                                'success'
                            )
                        }
                    })
                document.getElementById('forget_password_container').style.display = 'none';
                document.getElementById('password_verification_container').style.display = 'none';
                document.getElementById('reset_password_otp_verification_container').style.display = 'block';
                // document.getElementById('password_reset_container').style.display = 'block';
            }
        })
    }

    // function for forget password otp verification
    const forgetPasswordOTPVerify = (data) => {
        const otp = data.otp;

        fetch('https://api-skillshikhun.herokuapp.com/api/otp-verification', {
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
                    document.getElementById('reset_password_otp_verification_container').style.display = 'none'
                    document.getElementById('password_reset_container').style.display = 'block';
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please enter an invalid OTP',
                    })
                }
            })
    }

    // function for password reset
    const passwordReset = (data) => {
        const password = data.password
        fetch('https://api-skillshikhun.herokuapp.com/api/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone: phone,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Password Reset Successfully',
                    text: 'Please login with new password',
                })
                // document.getElementById('password_reset_container').style.display = 'none';
                // document.getElementById('password_verification_container').style.display = 'block';
                localStorage.setItem('phone', phone)
                localStorage.setItem('token', 'bearer ' + data.status);
                navigate(from, { replace: true })
            })
    }

    return (
        <div className="container my-3">
            <div id='otp_login_container' style={{ display: 'block' }} className="mx-auto d-block">

                {/* div for phone number input*/}
                <div className="d-flex mx-auto d-block justify-content-center mt-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex">
                            <span style={{ fontSize: '16px', lineHeight: '24px', color: '#4b5563', fontWeight: '400', backgroundColor: 'white', height: '50px', borderRadius: '5px', paddingTop: '0.8rem' }} className='px-2'>+88</span>
                            <input
                                id='number_input'
                                onChangeCapture={handlePhoneNumberChange}
                                className='form-control form mx-auto d-block' type="tel" aria-describedby='phone' autoComplete='off' maxLength='11' style={{ fontSize: '18px', lineHeight: '27px', color: '#8288b2', fontWeight: '400', backgroundColor: 'white', border: 'none', focus: 'red', maxWidth: '400px', height: '50px', marginLeft: '-0.35rem' }}
                                {...register("phone", { required: true })} placeholder="আপনার মােবাইল নম্বর দিন" />
                        </div>

                        <div id='number_change_container' className="mt-2" style={{ display: 'none' }}>
                            <p onClick={() => navigate('/dashboard')} style={{ textAlign: 'right', fontSize: '13px', lineHeight: '24px', fontWeight: '400', cursor: 'pointer' }}>নাম্বার পরিবর্তন করুন</p>
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
                <form onSubmit={handleSubmit2(onSubmit2)}>
                    <div className="mx-auto d-block">
                        <input id='verify_otp' style={{ width: '285px', border: 'none' }} className='form-control form mx-auto d-block' type="tel" autoComplete="off" maxLength="4" {...register2("otp", { required: true })} onKeyPress={(event, charCode) => { return event.charCode >= 48 && event.charCode <= 57 }} pattern="\d*" />
                        <button style={{ maxWidth: '400px' }} className='otp-submit-btn mt-3 mx-auto d-block text-white'>এগিয়ে যান</button>
                    </div>
                </form>
            </div>

            {/* div for collecting userName, password & email */}
            <div id="password_input_container" style={{ display: 'none' }}>
                <h2 style={{ fontSize: '16px', lineHeight: '24px', color: '#3f3f3f', fontWeight: '700' }} className='text-center mt-3'>আপনার তথ্য দিন</h2>
                <div className="d-flex mx-auto d-block justify-content-center">
                    <form onSubmit={handleSubmit3(onSubmit3)}>
                        <input style={{ width: '285px', border: 'none' }} placeholder='আপনার নাম' className='form-control form mx-auto d-block' type="text" autoComplete="off" {...register3("name", { required: true })} />
                        <input style={{ width: '285px', border: 'none' }} placeholder='আপনার ইমেইল' className='form-control form mx-auto d-block mt-3' type="email" autoComplete="off" {...register3("email", { required: true })} />
                        <input style={{ width: '285px' }} placeholder='পাসওয়ার্ড সেট করুন' className='form-control form mx-auto d-block mt-3' type="password" autoComplete="off" {...register3("password", { required: true })} />
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
                        <input id='password_verify' style={{ width: '285px', border: 'none' }} className='form-control form mx-auto d-block' type="password" autoComplete="off" {...register4("password", { required: true })} />
                        <p id='forget_password_container' onClick={forgetPassword} className='text-center mt-3 text-primary fw-bold' style={{ cursor: 'pointer' }}>পাসওয়ার্ড ভুলে গিয়েছেন?</p>
                        <button style={{ maxWidth: '400px' }} className='password-submit-btn mt-3 mx-auto d-block text-white'>এগিয়ে যান</button>
                    </form>
                </div>
            </div>

            {/* div for verifying reset password OTP */}
            <div id='reset_password_otp_verification_container' style={{ display: 'none' }}>
                <h1 style={{ fontSize: '16px', lineHeight: '24px', color: '#323862', fontWeight: '700' }} className='mt-3 text-center'>আপনার মোবাইল নম্বরে প্রেরিত ওটিপি দিন</h1>
                <form onSubmit={handleSubmit5(onSubmit5)}>
                    <div className="mx-auto d-block">
                        <input id='verify_otp' style={{ width: '285px', border: 'none' }} className='form-control form mx-auto d-block' type="tel" autoComplete="off" maxLength="4" {...register5("otp", { required: true })} onKeyPress={(event, charCode) => { return event.charCode >= 48 && event.charCode <= 57 }} pattern="\d*" />
                        <button style={{ maxWidth: '400px' }} className='otp-submit-btn mt-3 mx-auto d-block text-white'>এগিয়ে যান</button>
                    </div>
                </form>
            </div>

            {/* div for password reset */}
            <div id="password_reset_container" style={{ display: 'none' }}>
                <h2 style={{ fontSize: '16px', lineHeight: '24px', color: '#3f3f3f', fontWeight: '700' }} className='text-center mt-3'>আপনার পাসওয়ার্ড পুনরুদ্ধার করুন</h2>
                <div className="d-flex mx-auto d-block justify-content-center">
                    <form onSubmit={handleSubmit6(onSubmit6)}>
                        <input style={{ width: '285px', border: 'none' }} placeholder='পাসওয়ার্ড সেট করুন' className='form-control form mx-auto d-block' type="password" autoComplete="off" {...register6("password", { required: true })} />
                        <button style={{ maxWidth: '400px' }} className='password-submit-btn mt-3 mx-auto d-block text-white'>এগিয়ে যান</button>
                    </form>
                </div>
            </div>

            {/* <div className="">
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <img src={google} width={40} alt="" />
                    <h2 className='fs-5 text-center'>Login with Google</h2>
                </div>

                <div className="d-flex justify-content-center align-items-center mt-5">
                    <img src={facebook} width={40} alt="" />
                    <h2 className='fs-5 text-center'>Login with Facebook</h2>
                </div>

            </div> */}
        </div>
    );
};

export default LoginHandler;