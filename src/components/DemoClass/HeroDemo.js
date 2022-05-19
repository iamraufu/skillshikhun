import React, { useState, useEffect } from 'react';
import './DemoClass.css';
import { useForm } from "react-hook-form";
import courseData from '../../data/course/courseData.js';
import Swal from 'sweetalert2';

const HeroDemo = () => {

    const phone = localStorage.getItem('phone');
    const [userPhoneData, setUserPhoneData] = useState({})
    const [category, setCategory] = useState("Web Development");

    const courseCategory = courseData.filter(course => course.name === category)

    useEffect(() => {
        fetch(`http://skillshikhun.herokuapp.com/users/phone/${phone}`)
            .then(res => res.json())
            .then(data => setUserPhoneData(data))
    }, [phone])

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const demoClassDetails = {...data , phone:userPhoneData.phone};
        bookDemoClass(demoClassDetails);
    }

    const bookDemoClass = (classDetails) => {
        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1;
        const day = new Date().getDate();

        const time = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

        const details = {
            phone: userPhoneData.phone,
            name: userPhoneData.name,
            email: userPhoneData.email,
            category: classDetails.category,
            class_time: classDetails.classTime,
            class_date: classDetails.classDate,
            date: `${day}-${month}-${year} at ${time}`
        };

        fetch('http://skillshikhun.herokuapp.com/registerForDemoClass', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            Swal.fire(
                'আপনার ফ্রি ক্লাস রেজিস্ট্রেশন সম্পন্ন হয়েছে!',
                'আপনি ড্যাশবোর্ড থেকে ফ্রি ক্লাস টি করতে পারবেন!',
                'success'
                )
                sendSMS(details);
                scheduleSMS(details);
                setTimeout(() => {
                    window.location.href = '/dashboard';
                }, 2000);   // redirect to home page after 2 seconds
    }

    // function for send sms after class free class registration
    const sendSMS = (details) => {
        const api_key = 'H8w2sI5oD8vDoZ153ET6FCP05X7pEYU7ydMZapzu';
        const name = details.name;
        const date = details.class_date;
        const time = details.class_time;
        const course = details.category;
        const zoom_link = category.zoom_link;
        const message = `প্রিয় ${name}, আপনার ${course} এর ফ্রি ক্লাস রেজিস্ট্রেশন সম্পন্ন হয়েছে | ক্লাসের তারিখ ${date} এবং ক্লাসের সময় ${time} | ক্লাস লিংক ${zoom_link}`
        const sender_id = "S.Shikhun"
        const phone = details.phone;
        fetch(`https://api.sms.net.bd/sendsms?api_key=${api_key}&sender_id=${sender_id}&msg=${message}&to=88${phone}`)
            .then(res => res.json())
    }

    // function for scheduleSMS
    const scheduleSMS = (details) => {
        const api_key = 'H8w2sI5oD8vDoZ153ET6FCP05X7pEYU7ydMZapzu';
        const name = details.name;
        const date = details.class_date;
        const time = details.class_time;
        const courseName = details.category;
        const zoom_link = category.zoom_link;
        const message = `প্রিয় ${name}, আপনার ${courseName} এর ফ্রি ক্লাস রেজিস্ট্রেশন সম্পন্ন হয়েছে | ক্লাসের তারিখ ${date} এবং ক্লাসের সময় ${time} | ক্লাস লিংক ${zoom_link}`

        const sender_id = `S.Shikhun`;
        const phone = details.phone;
        fetch(`https://api.sms.net.bd/sendsms?api_key=${api_key}&sender_id=${sender_id}&msg=${message}&to=88${phone}&schedule=${time-1} 21:00:00`)
            .then(res => res.json())
    }

    return (
        <section className='demo-class-container container'>
            {/* <div style={{ backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ececec' }} className="container mt-5"> */}

                <div style={{ margin: 'auto' }} className="col-lg-12 col-md-12 col-sm-12 py-3">

                    <div id="demo_class_registration_container">
                        <form className='' onSubmit={handleSubmit(onSubmit)}>
                            <div className="d-flex justify-content-center">
                                <div className="col-sm-2">
                                    <hr />
                                </div>
                                <h2 style={{ fontSize: '16px', color: '#343b6d', fontWeight: '600' }} className='mt-2 text-center mx-2'>যে কোর্সের ফ্রি ক্লাস করতে চাচ্ছেন</h2>
                                <div className="col-sm-2">
                                    <hr />
                                </div>
                            </div>

                            <select id='course_category'
                            onChangeCapture={()=>{setCategory(document.getElementById('course_category').querySelector('option:checked').value);}} 
                            style={{margin:'5px 0'}} className='p-2 form-select-input' {...register("category")}>
                                <option value={'Web Development'}>{'ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট'}</option>
                                
                                {courseData.map(course =>
                                    <option key={course.id} value={course.name} className='p-2 form-select-input'>{course.title}</option>
                                )}
                            </select>

                            {/* div for selecting class date */}
                            <div className="d-flex justify-content-center">
                                <div className="col-sm-2">
                                    <hr />
                                </div>
                                <h2 style={{ fontSize: '16px', color: '#343b6d', fontWeight: '600' }} className='mt-2 text-center mx-2'>প্রথম ক্লাসের তারিখ বেছে নিন</h2>
                                <div className="col-sm-2">
                                    <hr />
                                </div>
                            </div>

                            <select style={{margin:'5px 0'}} className='p-2 form-select-input' {...register("classDate")}>
                                <option value={courseCategory[0].class_date_1}>{courseCategory[0].class_date_1}</option>
                                <option value={courseCategory[0].class_date_2}>{courseCategory[0].class_date_2}</option>
                            </select>

                            {/* div for selecting class time */}
                            <div className="d-flex justify-content-center">
                                <div className="col-sm-2">
                                    <hr />
                                </div>
                                <h2 style={{ fontSize: '16px', color: '#343b6d', fontWeight: '600' }} className='mt-2 text-center mx-2'>ক্লাসের সময় বেছে নিন</h2>
                                <div className="col-sm-2">
                                    <hr />
                                </div>
                            </div>

                            <select style={{margin:'5px 0'}} className='p-2 form-select-input' {...register("classTime")}>
                                <option value={courseCategory[0].class_time}>{courseCategory[0].class_time}</option>
                            </select>

                            <div id="demo_submit_container">
                                <input id='submit_btn' className='form-input-submit my-4' value='একটি ফ্রি ক্লাস বুকিং করে নিন' type="submit" />
                            </div>
                        </form>
                    </div>

                </div>
            {/* </div> */}
        </section>
    );
};

export default HeroDemo;