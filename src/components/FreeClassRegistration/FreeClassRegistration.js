import React, { useState } from 'react';
import './FreeClassRegistration.css';
import { useForm } from "react-hook-form";

const FreeClassRegistration = () => {

    const [flag, setFlag] = useState(false);
    const [phone, setPhone] = useState(123);

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

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { register: register2, handleSubmit: handleSubmit2 } = useForm();

    // function for phone number handling
    const onSubmit = data => {
        setPhone(data.phone);

        if (flag === true) {
            OTPGenerate(data);
        }
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
        await fetch('https://backend-skill-shikhun.herokuapp.com/api/send-otp-demo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(OTPDetails)
        })
            .then(res => res.json())
            .then(data => {
                document.getElementById('otp_verification_container').style.display = 'block';
            }
            )
        document.getElementById('submit_btn_container').style.display = 'none';
        document.getElementById('number_input').disabled = true;
    }

    // submit function for otp verification
    const onSubmit2 = async data => {
        await OTPVerification(data);
    }

    // function for OTP verification
    const OTPVerification = (otpData) => {

        const otp = otpData.otp;

        fetch('https://backend-skill-shikhun.herokuapp.com/api/otp-verification-demo', {
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
                }
                else {
                }
            }
            )
    }

    return (
        <div>
            <h1 style={{ fontSize: '22px', color: '#343b6d', fontWeight: '600' }} className='mt-5 text-center'>একটি ফ্রি ক্লাস করে দেখুন</h1>

            {/* div for phone number input*/}
            <div id='otp_login_container' style={{ display: 'block' }} className="mx-auto d-block">
                <div className="d-flex mx-auto d-block justify-content-center mt-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex">
                            <span style={{ fontSize: '16px', lineHeight: '24px', color: '#4b5563', fontWeight: '400', backgroundColor: 'white', height: '50px', borderRadius: '5px', paddingTop: '0.8rem' }} className='px-2'>+88</span>
                            <input
                                id='number_input'
                                onChangeCapture={handlePhoneNumberChange}
                                className='form-control form mx-auto d-block' type="tel" aria-describedby='phone' autoComplete='off' maxLength='11' style={{ fontSize: '18px', lineHeight: '27px', color: '#8288b2', fontWeight: '400', backgroundColor: 'white', border: 'none', focus: 'red', maxWidth: '400px', height: '50px', marginLeft: '-0.3rem' }}
                                {...register("phone", { required: true })} placeholder="আপনার মােবাইল নম্বর দিন" />
                        </div>
                        {errors.phone && <p className='text-danger ms-2'>আপনার মোবাইল নম্বর ভেরিফাই করুন</p>}
                        <div id='submit_btn_container' className="">
                            <button type='submit' style={{ maxWidth: '400px' }} id='submit_btn' className='number-submit-btn mt-3 mx-auto d-block'>এগিয়ে যান</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* div for verifying OTP */}
            <div id='otp_verification_container' 
            style={{ display: 'none' }}
            >
                <h1 style={{ fontSize: '16px', lineHeight: '24px', color: '#323862', fontWeight: '700' }} className='mt-3 text-center'>আপনার মোবাইল নম্বরে প্রেরিত ওটিপি দিন</h1>
                <div className="mx-auto d-block">
                    <form onSubmit={handleSubmit2(onSubmit2)}>
                        <input style={{ width: '285px', border: 'none' }} className='form-control form mx-auto d-block' type="tel" autoComplete="off" maxLength="4" {...register2("otp", { required: true })} onKeyPress={(event, charCode) => { return event.charCode >= 48 && event.charCode <= 57 }} pattern="\d*" />
                        <button style={{ maxWidth: '400px' }} className='otp-submit-btn mt-3 mx-auto d-block text-white'
                        >এগিয়ে যান</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default FreeClassRegistration;