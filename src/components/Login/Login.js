import React from 'react';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
const Navbar = React.lazy(() => import('../Shared/Navbar/Navbar'));

let phone = 123;
let password = 'skillshikhun';

const Login = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { signInUsingGoogle, signInUsingFacebook, user } = useAuth();

    if (user.email) {
        navigate(from, { replace: true })
    }

    let flag = false;

    const handlePhoneNumberChange = (e) => {
        const input = document.querySelector('input');

        input.addEventListener('input', (e) => {
            let input = e.target;
            let inputValue = input.value;
            let inputLength = inputValue.length;

            if (inputLength < 11) {
                flag = false;
                console.log(flag)
                const submit_btn = document.querySelector('#submit_btn');
                submit_btn.disabled = true;
                document.getElementById('submit_btn').style.backgroundColor = 'grey';
            }

            if (inputLength === 11) {
                flag = true;
                console.log(flag)
                const submit_btn = document.querySelector('#submit_btn');
                submit_btn.disabled = false;
                document.getElementById('submit_btn').style.backgroundColor = 'rgb(84, 104, 255)';

            }
        });
    }

    const { register, handleSubmit } = useForm();
    const { register: register2, handleSubmit: handleSubmit2 } = useForm();
    const { register: register3, handleSubmit: handleSubmit3 } = useForm();

    // submit function for phone number taking
    const onSubmit = data => {
        phone = data.phone;

        if (flag === true) {
            OTPGenerate(data);
        }
        else {
            // call login function by taking password and match password and login 
            // login(data);
        }
    }

    // submit function for otp verification
    const onSubmit2 = async data => {
        await OTPVerification(data);
    }

    // submit function for password taking
    const onSubmit3 = data => {
        password = data.password;
    }

    const OTPGenerate = (data) => {
        const submit_btn = document.querySelector('#submit_btn');
        submit_btn.disabled = true;
        submit_btn.innerHTML = "অপেক্ষা করুন...";
        document.getElementById('submit_btn').style.backgroundColor = 'grey';
        const phone_number = data.phone;
        const otp = Math.floor(Math.random() * 9000 + 1000);
        console.log("OTP is " + otp);
        console.log("Your Phone number is: " + phone_number);

        const OTPDetails = {
            phone: phone_number,
            otp: otp
        }

        // send otp to user
        fetch('http://localhost:5000/api/send-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(OTPDetails)
        })
            .then(res => res.json())
            .then(data =>
                console.log(data)
            )

        // registerUser(OTPDetails);

        document.getElementById('otp_verification_container').style.display = 'block';
    }


    // function for OTP verification
    const OTPVerification = (otpData) => {
        console.log(otpData)
        const otp = otpData.otp;

        // var requestOptions = {
        //     method: 'GET'
        // };

        // fetch(`http://localhost:5000/otp/${phone}`, requestOptions)
        //     .then(response => response.text())
        //     .then(result => {
        //         const resData = JSON.parse(result);
        //         const tempOtp = resData.otp;
        //         if (otp === tempOtp) {
        //             document.getElementById('otp_verification_container').style.display = 'none';
        //             document.getElementById('password_input_container').style.display = 'block';

        //             // console.log(user) // user is undefined
        //             // if (!user.phone) {
        //             //     registerUser(phone, password);
        //             // }
        //             // else {
        //             //     login();
        //             // }

        //             Swal.fire(
        //                 'OTP ভেরিফিকেশন সফল হয়েছে!',
        //                 'আপনার রেজিস্ট্রেশন প্রক্রিয়া সম্পন্ন হয়েছে!',
        //                 'success'
        //             )

        //             navigate('/dashboard');

        //         } else {
        //             Swal.fire(
        //                 'আপনার OTP টি ভুল!',
        //                 'অনুগ্রহ করে আবার চেষ্টা করুন!',
        //                 'error'
        //             )
        //             navigate('/dashboard');
        //         }
        //     })

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
                console.log(data)
                if (data.status === true) {
                    document.getElementById('otp_verification_container').style.display = 'none';
                    document.getElementById('password_input_container').style.display = 'block';
                    Swal.fire(
                        'OTP ভেরিফিকেশন সফল হয়েছে!',
                        'আপনার রেজিস্ট্রেশন প্রক্রিয়া সম্পন্ন হয়েছে!',
                        'success'
                    )
                    navigate('/dashboard');
                }
                else {
                    Swal.fire(
                        'আপনার OTP টি ভুল!',
                        'অনুগ্রহ করে আবার চেষ্টা করুন!',
                        'error'
                    )
                    navigate('/dashboard');
                }


                // fetch('http://localhost:5000/validateUser', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({
                //         phone: phone,
                //         otp: otp
                //     })
                // })
                //     .then(res => res.json())
                //     .then(result => {
                //         console.log(result)
                // validateUser(phone,otp);

                // .catch(error => console.log('error', error));
                phone = null;
                password = '';

            }
            )
    }


    // register user through otp verification
    // const registerUser = (otpDetailsData) => {

    //     const otpDetails = {
    //         phone: otpDetailsData.phone,
    //         otp: otpDetailsData.otp
    //     }

    //     fetch('http://localhost:5000/registerUser', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(otpDetails)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result)
    //             // if (result.success) {
    //             //     Swal.fire(
    //             //         'আপনার রেজিস্ট্রেশন প্রক্রিয়া সম্পন্ন হয়েছে!',
    //             //         'আপনার রেজিস্ট্রেশন প্রক্রিয়া সম্পন্ন হয়েছে!',
    //             //         'success'
    //             //     )
    //             //     navigate('/dashboard');
    //             // } else {
    //             //     Swal.fire(
    //             //         'আপনার রেজিস্ট্রেশন প্রক্রিয়া সম্পন্ন হয়েছে!',
    //             //         'আপনার রেজিস্ট্রেশন প্রক্রিয়া সম্পন্ন হয়েছে!',
    //             //         'success'
    //             //     )
    //             //     navigate('/dashboard');
    //             // }
    //         })
    // }


    // validate user through OTP verification
    // const validateUser = (phone, otp) => {
    //         fetch('http://localhost:5000/validateUser', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 phone: phone,
    //                 otp: otp
    //             })
    //         })
    //             .then(res => res.json())
    //             .then(result => {
    //                 console.log(result)
    //                 if (result.status === true) {
    //                     if (result.message === 'User already exists') {
    //                         loginUser();
    //                     }
    //                     // Swal.fire(
    //                     //     'আপনার রেজিস্ট্রেশন সফল হয়েছে!',
    //                     //     'আপনার রেজিস্ট্রেশন প্রক্রিয়া সম্পন্ন হয়েছে!',
    //                     //     'success'
    //                     // )
    //                     // navigate('/dashboard');
    //                 } else {
    //                     Swal.fire(
    //                         'আপনার রেজিস্ট্রেশন ব্যর্থ হয়েছে!',
    //                         'অনুগ্রহ করে আবার চেষ্টা করুন!',
    //                         'error'
    //                     )
    //                     navigate('/dashboard');
    //                 }
    //             })
    //     }


    // const registerUser = (data) => {
    //     console.log(data); // data is phone number coming null
    //     const userDetails = {
    //         password: data.password,
    //         phone: phone
    //     }

    //     console.log(userDetails);
    //     fetch('http://localhost:5000/registerUserThroughOTP', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(userDetails)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);

    //         })
    // }

    // login function for verifying phone number and password
    // const loginUser = () => {
    //     fetch('http://localhost:5000/loginUser', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             phone: phone,
    //             password: password
    //         })
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result)
    //             if (result.status === true) {
    //                 Swal.fire(
    //                     'আপনার লগইন সফল হয়েছে!',
    //                     'আপনার রেজিস্ট্রেশন প্রক্রিয়া সম্পন্ন হয়েছে!',
    //                     'success'
    //                 )
    //                 navigate('/dashboard');
    //             } else {
    //                 Swal.fire(
    //                     'আপনার লগইন ব্যর্থ হয়েছে!',
    //                     'অনুগ্রহ করে আবার চেষ্টা করুন!',
    //                     'error'
    //                 )
    //                 navigate('/dashboard');
    //             }
    //         })
    // }



    // const login = (data) => {
    //     console.log(data);
    //     const loginDetails = { phone, password }
    //     console.log(loginDetails);
    //     fetch('http://localhost:5000/loginUser', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(loginDetails)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.status === 'success') {
    //                 Swal.fire(
    //                     'লগিন সফল!',
    //                     'আপনার লগিন প্রক্রিয়া সম্পন্ন হয়েছে!',
    //                     'success'
    //                 )
    //                 navigate('/dashboard');
    //             } else {
    //                 Swal.fire(
    //                     'আপনার ফোন নম্বর বা পাসওয়ার্ড টি ভুল!',
    //                     'অনুগ্রহ করে আবার চেষ্টা করুন!',
    //                     'error'
    //                 )
    //                 navigate('/dashboard');
    //             }
    //         })
    // }

    return (
        <div>
            <Navbar />
            <div style={{ minHeight: '100vh', backgroundColor: 'rgb(243, 245, 249)' }} className="">
                <div className="container login-container">
                    <div id='otp_login_container' style={{ display: 'block' }} className="mx-auto d-block">
                        <h1 style={{ fontSize: '32px', lineHeight: '48px', color: '#323862', fontWeight: '700' }} className='pt-5 text-center'>ফ্রি রেজিস্ট্রেশন অথবা সাইন ইন করতে <br /> আপনার ব্যবহৃত মোবাইল নম্বরটি দিন</h1>
                        <div className="d-flex mt-5 mx-auto d-block justify-content-center">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="d-flex">
                                    <span style={{ fontSize: '20px', lineHeight: '30px', color: '#4b5563', fontWeight: '400', backgroundColor: 'white', height: '50px', borderRadius: '5px' }} className='pt-2 px-2'>+88</span>

                                    <input
                                        onChangeCapture={handlePhoneNumberChange}
                                        className='form-control form mx-auto d-block' type="tel" aria-describedby='phone' autoComplete='off' maxLength='11' style={{ fontSize: '18px', lineHeight: '27px', color: '#8288b2', fontWeight: '400', backgroundColor: 'white', border: 'none', focus: 'red', maxWidth: '400px', height: '50px', marginLeft: '-0.3rem' }}
                                        {...register("phone", { required: true })} placeholder="আপনার মােবাইল নম্বর দিন" />

                                </div>
                                {/* {errors.phone && <span className='text-danger mt-5 pt-5'>This field is required</span>} */}
                                <button style={{ maxWidth: '400px' }} id='submit_btn' className='submit-btn mt-5 mx-auto d-block text-white'
                                >এগিয়ে যান</button>
                                <br />
                            </form>
                        </div>
                    </div>

                    {/* input field for collecting password */}
                    <div id="password_input_container" style={{ display: 'none' }}>
                        <h1 style={{ fontSize: '32px', lineHeight: '48px', color: '#323862', fontWeight: '700' }} className='pt-5 text-center'>আপনার পাসওয়ার্ড দিন</h1>
                        <div className="d-flex mt-5 mx-auto d-block justify-content-center">

                            <form onSubmit={handleSubmit3(onSubmit3)}>

                                <input style={{ maxWidth: '400px' }} className='form-control form mx-auto d-block' type="password" autoComplete="off" {...register3("password", { required: true })} />

                                <button style={{ maxWidth: '400px' }} className='otp-submit-btn mt-5 mx-auto d-block text-white'
                                >এগিয়ে যান</button>
                            </form>
                        </div>
                    </div>

                    {/* div for verifying OTP */}
                    <div id='otp_verification_container' style={{ display: 'none' }}>
                        <h1 style={{ fontSize: '32px', lineHeight: '48px', color: '#323862', fontWeight: '700' }} className='pt-5 text-center'>অনুগ্রহ করে আপনার মোবাইল নম্বরে প্রেরিত ওটিপি দিন</h1>
                        <div className="mx-auto d-block">
                            <form onSubmit={handleSubmit2(onSubmit2)}>
                                {/* <input type="tel" autoComplete="off" maxLength="1" {...register2("otp0", { required: true })} onKeyPress={(event, charCode) => { return event.charCode >= 48 && event.charCode <= 57 }} pattern="\d*" />
                                        <input type="tel" autoComplete="off" maxLength="1" {...register2("otp1", { required: true })} onKeyPress={(event, charCode) => { return event.charCode >= 48 && event.charCode <= 57 }} pattern="\d*" />
                                        <input type="tel" autoComplete="off" maxLength="1" {...register2("otp2", { required: true })} onKeyPress={(event, charCode) => { return event.charCode >= 48 && event.charCode <= 57 }} pattern="\d*" />
                                        <input type="tel" autoComplete="off" maxLength="1" {...register2("otp3", { required: true })} onKeyPress={(event, charCode) => { return event.charCode >= 48 && event.charCode <= 57 }} pattern="\d*" /> */}

                                <input style={{ maxWidth: '400px' }} className='form-control form mx-auto d-block' type="tel" autoComplete="off" maxLength="4" {...register2("otp", { required: true })} onKeyPress={(event, charCode) => { return event.charCode >= 48 && event.charCode <= 57 }} pattern="\d*" />

                                <button style={{ maxWidth: '400px' }} className='otp-submit-btn mt-5 mx-auto d-block text-white'
                                >এগিয়ে যান</button>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex mt-5">
                        <div className="mx-auto d-block">
                            <button style={{ backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '10px', border: '1px solid rgb(236,236,236)' }} className='btn mt-5' onClick={signInUsingGoogle}>
                                <img width={60} src={google} alt="login with google" className='my-1 me-4' loading="lazy" />
                                <span className='pe-2'>গুগল দিয়ে লগইন করুন</span>
                            </button>
                            <br />
                            <button style={{ backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '10px', border: '1px solid rgb(236,236,236)' }} className='btn mt-2' onClick={signInUsingFacebook}>
                                <img width={50} src={facebook} alt="login with facebook" className='my-2 me-4 ms-1' loading="lazy" />
                                <span className='pe-1'>ফেসবুক দিয়ে লগইন করুন</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;