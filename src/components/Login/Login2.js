import React from 'react';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
// import flag from '../../images/bdFlag.png';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import { useForm } from "react-hook-form";
const Navbar = React.lazy(() => import('../Shared/Navbar/Navbar'));

const Login2 = () => {

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";


    const { signInUsingGoogle, signInUsingFacebook, user } = useAuth();

    if (user.email) {
        navigate(from, { replace: true })
    }
    const { register, handleSubmit } = useForm();

    const onSubmit = data => OTPGenerate(data);

    const OTPGenerate = (data) => {
        // console.log(data);
        const phone_number = data.phone;
        const otp = Math.floor(Math.random() * 9000 + 1000);
        // console.log("OTP is " + otp);
        // console.log("Your Phone number is: " + phone_number);
    }

    
    const handleNumberInput = ()=>{
        const input = document.querySelector('input');
        input.addEventListener('change', (e) => {
            let input = e.target;
            let inputValue = input.value.replace(/[^\d]/g, '').slice(0, 11);
            let inputLength = inputValue.length;

            // if (inputLength > 0) {
            //     inputValue = '+880' + inputValue;
            //     console.log(inputValue);
            // }
            
            if (inputLength < 11) {
                // console.log("Fake")
                const submit_btn = document.querySelector('#submit_btn');
                submit_btn.disabled = true;
            }
            if (inputLength === 11) {
                // console.log("Real")
                const submit_btn = document.querySelector('#submit_btn');
                submit_btn.disabled = true;
                submit_btn.innerHTML = "Please wait...";
                onSubmit(OTPGenerate(parseInt(inputValue)));
                // console.log(typeof(inputValue));

            }
            // console.log(input.value)
        });
        // console.log(e.target.value);
    }

    return (
        <div>
            <Navbar />
            <div style={{ height: '100vh', backgroundColor: 'rgb(243, 245, 249)' }} className="">
                <div className="container login-container">
                    <div className="mx-auto d-block">
                        <h1 style={{ fontSize: '32px', lineHeight: '48px', color: '#323862', fontWeight: '700' }} className='pt-5 text-center'>ফ্রি রেজিস্ট্রেশন অথবা সাইন ইন করতে <br /> আপনার ব্যবহৃত মোবাইল নম্বরটি দিন</h1>
                        <div style={{ height: '4.8vh' }} className="d-flex mt-5 mx-auto d-block justify-content-center">
                            
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="d-flex">
                                    <span style={{ fontSize: '20px', lineHeight: '30px', color: '#4b5563', fontWeight: '400', backgroundColor: 'white', height: '50px', borderRadius: '5px' }} className='pt-2 px-2'>+88</span>

                                    <input className='form-control form' type="tel" aria-describedby='phone' autoComplete='off' maxLength='11' 
                                    onChangeCapture={handleNumberInput} 
                                    style={{ fontSize: '18px', lineHeight: '27px', color: '#8288b2', fontWeight: '400', backgroundColor: 'white', border: 'none', focus: 'red', maxWidth: '400px', height: '50px', marginLeft: '-0.3rem' }}
                                        {...register("phone", { required: true })} placeholder="আপনার মােবাইল নম্বর দিন" />

                                </div>
                        
                                <button style={{ maxWidth: '400px' }} id='submit_btn' className='submit-btn mt-5 mx-auto d-block text-white'
                                // value='এগিয়ে যান' 
                                >এগিয়ে যান</button>
                                
                            </form>
                        </div>
                    </div>
                    <div className="d-flex mt-5">
                        <div className="mx-auto d-block mt-5">
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

export default Login2;