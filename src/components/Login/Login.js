import React from 'react';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import { useForm } from "react-hook-form";
// import OTPVerification from './OTPVerification';
const Navbar = React.lazy(() => import('../Shared/Navbar/Navbar'));

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

    const onSubmit = data => {
        console.log(flag);
        if (flag === true) {
            // document.getElementById('submit_btn').style.backgroundColor  = 'rgb(84, 104, 255)';
            // document.querySelector('#submit_btn').innerHTML = "অপেক্ষা করুন...";
            OTPGenerate(data);
        }
    }

    // submit function for otp verification
    const onSubmit2 = data => {
        OTPVerification(data);
        // OTPInputHandler();
    }

    const OTPGenerate = (data) => {
        const submit_btn = document.querySelector('#submit_btn');
        submit_btn.disabled = true;
        submit_btn.innerHTML = "অপেক্ষা করুন...";
        document.getElementById('submit_btn').style.backgroundColor = 'grey';
        const phone_number = data.phone;
        const otp = Math.floor(Math.random() * 9000 + 1000);
        // OTPSave(phone_number, otp);
        console.log("OTP is " + otp);
        console.log("Your Phone number is: " + phone_number);

        const OTPDetails = {
            phone: phone_number,
            otp: otp
        }

        fetch('http://localhost:5000/registerUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(OTPDetails)
        })
            .then(res => res.json())

        document.getElementById('otp_verification_container').style.display = 'block';
    }

    // function for OTP verification
    const OTPVerification = (data) => {
        console.log(data)
        const otp = data.otp;

        fetch('http://localhost:5000/otp/:phone')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.otp === otp) {
                    fetch('http://localhost:5000/validateUser', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ phone: data.phone })
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.valid) {
                                console.log("User is valid");
                                signInUsingGoogle(data.user);
                            }
                        })
                }
            })
    }

    // function OTPInputHandler() {
    //     var container = document.getElementById("otp_verification_container")[0];
    //     container.onkeyup = function (e) {
    //         var target = e.srcElement;
    //         var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    //         var myLength = target.value.length;
    //         if (myLength >= maxLength) {
    //             var next = target;
    //             while (next = next.nextElementSibling) {
    //                 if (next == null)
    //                     break;
    //                 if (next.tagName.toLowerCase() === "input") {
    //                     next.focus();
    //                     break;
    //                 }
    //             }
    //         }
    //     }
    // }

    // const OTPVerify = (phone, otp) => {
    //     console.log("hit");
    //     const phoneNumber = phone;
    //     const otp_number = otp;

    //     const user = {
    //         phone: phoneNumber
    //     }

    //     fetch(`http://localhost:5000/otp/${phoneNumber}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (otp_number === data.otp) {
    //                 console.log('OTP Verified');
    //                 // registerUser(user);
    //                 fetch('http://localhost:5000/registerUserThroughOTP', {
    //                     method: 'POST',
    //                     headers: {
    //                         'Content-Type': 'application/json'
    //                     },
    //                     body: JSON.stringify(user)
    //                 })
    //                     .then(res => res.json())
    //             }
    //         });
    // }

    return (
        <div>
            <Navbar />
            <div style={{ minHeight: '100vh', backgroundColor: 'rgb(243, 245, 249)' }} className="">
                <div className="container login-container">
                    <div className="mx-auto d-block">
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