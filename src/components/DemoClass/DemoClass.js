// import React, { useState } from 'react';
// import './DemoClass.css';
// import { useForm } from "react-hook-form";
// import courseData from '../../data/course/courseData.js';
// import Swal from 'sweetalert2';


// const DemoClass = (props) => {
//     // let navigate = useNavigate();
//     const course = props.course;
//     const otherCourses = [courseData.filter(otherCourses => otherCourses.name !== course.name)];

//     const [flag, setFlag] = useState(false);
//     const [phone, setPhone] = useState(123);

//     const [category, setCategory] = useState("Web Development");
//     const courseCategory = courseData.filter(course => course.name === category);
//     // console.log("courseCategory", courseCategory[0]);

//     const handlePhoneNumberChange = (e) => {
//         const input = document.querySelector('input');

//         input.addEventListener('input', (e) => {
//             let input = e.target;
//             let inputValue = input.value;
//             let inputLength = inputValue.length;

//             if (inputLength < 11) {
//                 setFlag(false);
//                 const submit_btn = document.querySelector('#submit_btn');
//                 submit_btn.disabled = true;
//                 document.getElementById('submit_btn').style.backgroundColor = 'grey';
//             }

//             if (inputLength === 11) {
//                 setFlag(true);
//                 const submit_btn = document.querySelector('#submit_btn');
//                 submit_btn.disabled = false;
//                 document.getElementById('submit_btn').style.backgroundColor = 'rgb(84, 104, 255)';
//             }
//         });
//     }

//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const { register: register2, handleSubmit: handleSubmit2 } = useForm();
//     const { register: register3, handleSubmit: handleSubmit3 } = useForm();

//     // function for phone number handling
//     const onSubmit = data => {
//         setPhone(data.phone);

//         if (flag === true) {
//             OTPGenerate(data);
//         }
//     }

//     const OTPGenerate = async (data) => {
//         const submit_btn = document.querySelector('#submit_btn');
//         submit_btn.disabled = true;
//         submit_btn.innerHTML = "????????????????????? ????????????...";
//         document.getElementById('submit_btn').style.backgroundColor = 'grey';

//         const phone_number = data.phone;
//         // const otp = Math.floor(Math.random() * 9000 + 1000);

//         const OTPDetails = {
//             phone: phone_number
//             // ,
//             // otp: otp
//         }

//         // send otp to user
//         await fetch('https://skillshikhun.herokuapp.com/api/send-otp-demo', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(OTPDetails)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 // console.log(data);
//                 if(data.status ===true){
//                     document.getElementById('otp_verification_container').style.display = 'block';
//                 }
//             }
//             )
//         document.getElementById('submit_btn_container').style.display = 'none';
//         document.getElementById('number_input').disabled = true;
//     }

//     // submit function for otp verification
//     const onSubmit2 = async data => {
//         await OTPVerification(data);
//     }

//     // function for OTP verification
//     const OTPVerification = (otpData) => {

//         const otp = otpData.otp;

//         fetch('https://skillshikhun.herokuapp.com/api/otp-verification-demo', {
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
//             .then(data => {
//                 // console.log(data);
//                 if (data.status === true) {
//                     document.getElementById('otp_verification_container').style.display = 'none';
//                     document.getElementById('demo_submit_button').style.display = 'none';
//                     document.getElementById('demo_submit_container').style.display = 'block';
//                 }
//                 else {
//                 }
//             }
//             )
//     }

//     const onSubmit3 = data => {
//         const demoClassDetails = {...data , phone};
//         bookDemoClass(demoClassDetails);
//         // axios.post('https://sheet.best/api/sheets/6104d348-2a16-4ca4-9701-51f89b909f48',this.state)
//         // .then(response=>console.log(response))
//     }

//     const bookDemoClass = (classDetails) => {
//         const year = new Date().getFullYear();
//         const month = new Date().getMonth() + 1;
//         const day = new Date().getDate();

//         const time = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

//         const details = {
//             phone: classDetails.phone,
//             name: classDetails.name,
//             email: classDetails.email,
//             category: classDetails.category,
//             class_time: classDetails.classTime,
//             class_date: classDetails.classDate,
//             date: `${day}-${month}-${year} at ${time}`
//         };

//         fetch('https://skillshikhun.herokuapp.com/registerForDemoClass', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(details)
//         })
//             .then(res => res.json())
//             Swal.fire(
//                 '??????????????? ???????????? ??????????????? ???????????????????????????????????? ????????????????????? ???????????????!',
//                 '?????? ?????????????????? ??????????????? ?????????????????? ????????????????????? ????????? ???????????? ?????????????????? ???????????? ?????????????????????????????? ?????? ????????? ?????????!',
//                 'success'
//                 )
//                 sendSMS(details);
//                 scheduleSMS(details);
//                 setTimeout(() => {
//                     window.location.href = '/';
//                 }, 2000);   // redirect to home page after 2 seconds
//     }

//     // function for send sms after class free class registration
//     const sendSMS = (details) => {
//         const api_key = 'H8w2sI5oD8vDoZ153ET6FCP05X7pEYU7ydMZapzu';
//         const name = details.name;
//         const date = details.class_date;
//         const time = details.class_time;
//         const course = details.category;
//         const zoom_link = courseCategory[0].zoom_link;
//         const message = `??????????????? ${name}, ??????????????? ${course} ?????? ???????????? ??????????????? ???????????????????????????????????? ????????????????????? ??????????????? | ????????????????????? ??????????????? ${date} ????????? ????????????????????? ????????? ${time} | ??????????????? ???????????? ${zoom_link}`
//         const sender_id = "S.Shikhun"
//         const phone = details.phone;
//         fetch(`https://api.sms.net.bd/sendsms?api_key=${api_key}&sender_id=${sender_id}&msg=${message}&to=88${phone}`)
//             .then(res => res.json())
//     }

//     // function for scheduleSMS
//     const scheduleSMS = (details) => {
//         const api_key = 'H8w2sI5oD8vDoZ153ET6FCP05X7pEYU7ydMZapzu';
//         const name = details.name;
//         const date = details.class_date;
//         const time = details.class_time;
//         const course = details.category;
//         const zoom_link = courseCategory.zoom_link;
//         const message = `??????????????? ${name}, ??????????????? ${course} ?????? ???????????? ??????????????? ???????????????????????????????????? ????????????????????? ??????????????? | ????????????????????? ??????????????? ${date} ????????? ????????????????????? ????????? ${time} | ??????????????? ???????????? ${zoom_link}`

//         const sender_id = `S.Shikhun`;
//         const phone = details.phone;
//         fetch(`https://api.sms.net.bd/sendsms?api_key=${api_key}&sender_id=${sender_id}&msg=${message}&to=88${phone}&schedule=${time-1} 21:00:00`)
//             .then(res => res.json())
//     }

//     const warning = () =>{
//         document.getElementById('warning').style.display = 'block';
//     }

//     return (
//         <section ref={props.refProp} className='demo-class-container'>
//             <div style={{ backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ececec' }} className="container mt-5">
//                 <h1 style={{ fontSize: '22px', color: '#343b6d', fontWeight: '600' }} className='mt-5 text-center'>????????? ???????????? ??????????????? ???????????? ?????????</h1>

//                 <div style={{ margin: 'auto' }} className="col-lg-12 col-md-12 col-sm-12 py-3">

//                     {/* div for phone number input */}
//                     <div id='otp_login_container' style={{ display: 'block' }}>
//                         <form onSubmit={handleSubmit(onSubmit)} className=''>
//                             <div className="d-flex">
//                                 <input id='number_input' onChangeCapture={handlePhoneNumberChange} className='form-input' type="tel" aria-describedby='phone' autoComplete='off' maxLength='11' {...register("phone", { required: true })} placeholder="????????? ???????????????" />

//                                 <div id="submit_btn_container" className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
//                                     <button type='submit' 
//                                     // style={{margin:'4px 0 3px 3px'}}
//                                     id='submit_btn' className='demo-submit-btn'>??????????????? ???????????????</button>
//                                 </div>

//                             </div>
//                         </form>
//                         {errors.phone && <p className='text-danger ms-2'>??????????????? ?????????????????? ??????????????? ????????????????????? ????????????</p>}
//                     </div>

//                     {/* div for otp verification */}
//                     <div id='otp_verification_container' style={{ display: 'none' }}>
//                         <form onSubmit={handleSubmit2(onSubmit2)} className=''>
//                             <h2 style={{ fontSize: '16px', color: '#343b6d', fontWeight: '600' }} className='mt-2 text-center'>??????????????? ?????????????????? ?????????????????? ????????????????????? ??????????????? ?????????</h2>
//                             <div className="d-flex">
//                             <input style={{ maxWidth: '400px' }} className='form-input form mx-auto d-block' type="tel" autoComplete="off" maxLength="4" {...register2("otp", { required: true })} onKeyPress={(event, charCode) => { return event.charCode >= 48 && event.charCode <= 57 }} pattern="\d*" />
//                             <button id='otp_submit_btn' type='submit' className='demo-otp-submit-btn'>????????????????????? ????????????</button>
//                             </div>
//                         </form>
//                     </div>

//                     <div id="demo_class_registration_container">
//                         <form className='' onSubmit={handleSubmit3(onSubmit3)}>

//                             <input className='form-input' {...register3("name", { required: true })} placeholder="??????????????? ?????????" />
//                             {errors.name && <p className='text-danger ms-2'>??????????????? ????????? ?????????</p>}

//                             <input className='form-input' {...register3("email", { required: true })} placeholder="??????????????? ???????????????" />
//                             {errors.email && <p className='text-danger ms-2'>??????????????? ??????????????? ?????????</p>}

//                             <div className="d-flex justify-content-center">
//                                 <div className="col-sm-2">
//                                     <hr />
//                                 </div>
//                                 <h2 style={{ fontSize: '16px', color: '#343b6d', fontWeight: '600' }} className='mt-2 text-center mx-2'>?????? ????????????????????? ???????????? ??????????????? ???????????? ?????????????????????</h2>
//                                 <div className="col-sm-2">
//                                     <hr />
//                                 </div>
//                             </div>

//                             <select id='course_category' 
//                             onChangeCapture={()=>{setCategory(document.getElementById('course_category').querySelector('option:checked').value);}} 
//                             style={{margin:'5px 0'}} className='p-2 form-select-input' {...register3("category")}>
//                                 <option value={course.name || 'Web Development'}>{course.title || '????????? ????????????????????? ???????????? ?????????????????????????????????'}</option>
//                                 {otherCourses[0].map(otherCourse =>
//                                     <option key={otherCourse.id} value={otherCourse.name} className='p-2 form-select-input'>{otherCourse.title}</option>
//                                 )}
//                             </select>

//                             {/* div for selecting class date */}
//                             <div className="d-flex justify-content-center">
//                                 <div className="col-sm-2">
//                                     <hr />
//                                 </div>
//                                 <h2 style={{ fontSize: '16px', color: '#343b6d', fontWeight: '600' }} className='mt-2 text-center mx-2'>??????????????? ????????????????????? ??????????????? ???????????? ?????????</h2>
//                                 <div className="col-sm-2">
//                                     <hr />
//                                 </div>
//                             </div>

//                             <select style={{margin:'5px 0'}} className='p-2 form-select-input' {...register3("classDate")}>
//                                 <option value={courseCategory[0].class_date_1}>{courseCategory[0].class_date_1}</option>
//                                 <option value={courseCategory[0].class_date_2}>{courseCategory[0].class_date_2}</option>
//                             </select>

//                             {/* div for selecting class time */}
//                             <div className="d-flex justify-content-center">
//                                 <div className="col-sm-2">
//                                     <hr />
//                                 </div>
//                                 <h2 style={{ fontSize: '16px', color: '#343b6d', fontWeight: '600' }} className='mt-2 text-center mx-2'>????????????????????? ????????? ???????????? ?????????</h2>
//                                 <div className="col-sm-2">
//                                     <hr />
//                                 </div>
//                             </div>

//                             <select style={{margin:'5px 0'}} className='p-2 form-select-input' {...register3("classTime")}>
//                                 <option value={courseCategory[0].class_time}>{courseCategory[0].class_time}</option>
//                             </select>

//                             <p id='warning' style={{display:'none'}} className='text-danger ms-2'>??????????????? ?????????????????? ??????????????? ????????????????????? ????????????</p>

//                             <div id="demo_submit_container"
//                                 style={{ display: 'none' }}
//                             >
//                                 <input id='submit_btn' className='form-input-submit my-4' value='???????????? ???????????? ??????????????? ??????????????? ????????? ?????????' type="submit" />
//                             </div>
//                         </form>
//                     </div>

//                 </div>
//                 <button onClick={()=> warning() } id='demo_submit_button' className='form-input-submit-2 mb-4'>???????????? ??????????????? ??????????????? ????????? ?????????</button>
//             </div>
//         </section>
//     );
// };

// export default DemoClass;

import React, { useEffect, useState } from 'react';
import HeroDemo from './HeroDemo';
import RegisterFromDemoClass from './RegisterFromDemoClass';
import checkbox from '../../images/checkbox.svg';
import checkbox_purple from '../../images/checkbox_purple.svg';

const DemoClass = (props) => {

    const phone = localStorage.getItem('phone');
    const [demoClasses, setDemoClasses] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            document.getElementById('register_demo_class').style.display = 'none';
            if (demoClasses.length === 0) {
                document.getElementById('hero_demo').style.display = 'block'
            }
            else {
                <div style={{ position: 'absolute', height: '100px', width: '100px', top: '50%', left: '50%', marginLeft: '-50px', marginTop: '-50px' }} className="spinner-grow" role="status">
                    <span className="sr-only"></span>
                </div>
            }
        }
    })

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://skillshikhun.herokuapp.com/demoClasses/phone/${phone}`);
            const data = await res.json();
            setDemoClasses(data);
        }
        fetchData();
    }, [phone])

    return (
        <div style={{ backgroundColor: 'rgb(243, 245, 249)', borderRadius: '15px', border: '1px solid #ececec' }} className='hero-demo-container'>
            <h1 style={{ fontSize: '22px', color: '#343b6d', fontWeight: '600' }} className='mt-4 text-center'>????????? ???????????? ???????????? ??????????????? ??????????????? ????????? ?????????</h1>

            {/* Register Component */}
            <div id='register_demo_class'>
                <div className="container py-3">
                    <RegisterFromDemoClass />
                </div>
            </div>

            <div id='hero_demo' style={{ display: 'none' }}>

                <div>
                    <div className="container-fluid progress-container">
                        <div className="col-sm-12">
                            <div className="progress my-5">
                                <div className="progress-bar" role="progressbar" aria-valuenow="33.33" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress-info-container">
                            <div className="d-flex justify-content-center">
                                <div className="col-sm-4 progress-select mx-auto">
                                    <img className='img-fluid progress-info-image' width={30} src={checkbox} alt="course selected" />
                                </div>

                                <div className="col-sm-4 progress-select mx-auto">
                                    <img className='img-fluid progress-info-image' width={30} src={checkbox} alt="your info" />
                                </div>

                                <div className="col-sm-4 progress-select mx-auto">
                                    <img className='img-fluid progress-info-image' width={30} src={checkbox_purple} alt="payment" />
                                </div>

                            </div>

                            <div className="d-flex justify-content-center">
                                <div className="col-sm-4 progress-select">
                                    <h1 className='progress-info-text'>????????? ???????????????</h1>
                                </div>

                                <div className="col-sm-4 progress-select">
                                    <h1 className='progress-info-text'>??????????????? ????????????</h1>
                                </div>

                                <div className="col-sm-4 progress-select">
                                    <h1 className='progress-info-text'>????????????????????????????????????</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <HeroDemo course={props.course} />

            </div>

        </div>
    );
};

export default DemoClass;