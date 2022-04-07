import React from 'react';
import './DemoClass.css';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";

const DemoClass = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => bookDemoClass(data);

    const bookDemoClass = (classDetails) => {
        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1;
        const day = new Date().getDate();

        const time = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

        const details = { 
            name:classDetails.name,
            email:classDetails.email,
            phone:classDetails.phone,
            category:classDetails.category, 
            date:`${day}-${month}-${year} at ${time}` 
        };

        fetch('http://localhost:5000/registerForDemoClass', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
    }

    return (
        <section className='demo-class-container'>
            <Navbar />
            <div className="container pt-5">
                {/* <h1 style={{ fontSize: '32px', lineHeight: '46px', color: '#343b6d', fontWeight: '600' }} className='mt-5 pt-5 text-center'>ডেমো ক্লাস রেজিস্ট্রেশন</h1> */}

                <h1 style={{ fontSize: '32px', lineHeight: '46px', color: '#343b6d', fontWeight: '600' }} className='mt-5 pt-5 text-center'>একটি ফ্রি ক্লাস করে দেখুন</h1>

                <div style={{ margin: 'auto', width: '50%' }} className="col-lg-12 col-md-12 col-sm-12 py-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='form-input' {...register("name", { required: true })} placeholder="আপনার নাম" />

                        <input className='form-input' {...register("email", { required: true })} placeholder="আপনার ইমেইল" />

                        <select className='p-2 form-select-input' {...register("category")}>
                            <option value="Digital Marketing" className='p-2'>ডিজিটাল মার্কেটিং</option>
                            <option value="Video Editing" className='p-2'>ভিডিও এডিটিং</option>
                            <option value="Web Development" className='p-2'>ওয়েব ডেভেলপমেন্ট</option>
                            <option value="Graphics Design" className='p-2'>গ্রাফিক্স ডিজাইন</option>
                        </select>

                        {/* <div className="py-2">
                            <input {...register("radio")} id='dm' type="radio" value="Digital Marketing" />
                            <label htmlFor="dm">Digital Marketing</label>
                        </div>
                        <div className="py-2">
                            <input {...register("radio")} id='ve' type="radio" value="Video Editing" />
                            <label htmlFor="ve">Video Editing</label>
                        </div>
                        <div className="py-2">
                            <input {...register("radio")} id='wd' type="radio" value="Web Development" />
                            <label htmlFor="wd">Web Development</label>
                        </div>
                        <div className="py-2">
                            <input {...register("radio")} id='gd' type="radio" value="Graphics Design" />
                            <label htmlFor="gd">Graphics Design</label>
                        </div> */}

                        <input className='form-input' {...register("phone", { required: true })} placeholder="ফোন নম্বর" />
                        <input className='form-input-submit my-4' type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default DemoClass;