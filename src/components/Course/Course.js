import React, { useEffect, useRef, useState } from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    // faUsers, faClock, faCalendarDays, 
    faPhone, faCheck, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import courseData from '../../data/course/courseData.js';
import content from '../../images/content.svg';
import user from '../../images/user.svg';
import certificate from '../../images/certificate.svg';
import { Link, useNavigate } from 'react-router-dom';
import CourseReview from './CourseReview';
import CourseDemoClass from '../DemoClass/CourseDemoClass';
import Tracker from '../Tracker/Tracker';
import Footer from '../Shared/Footer/Footer';
import { useForm } from 'react-hook-form';
import PromoMessage from '../PromoMessage/PromoMessage';
// import fri500_sm from '../../images/promo/promo_sm.png';
// import skill999_sm from '../../images/promo/skill999_sm.png';
import clickImage from '../../images/promo/click.png';
import call from '../../images/courses/call.svg';
import messenger from '../../images/courses/messenger.svg';
import whatsapp from '../../images/courses/whatsapp.svg';
import Swal from 'sweetalert2';
import CourseGroup from './CourseGroup';
import CourseTime from './CourseTime';
import CourseSEO from '../SEO/CourseSEO';
// import Countdown from '../Countdown/Countdown';
const HowToPayment = React.lazy(() => import('./HowToPayment'));
const Navbar = React.lazy(() => import('../Shared/Navbar/Navbar'));

const Course = (props) => {
    const name = props.name;
    const navigate = useNavigate()
    const phone = localStorage.getItem('phone');
    const course = courseData?.find(course => course?.name === name);
    const courseName = course.name;
    const otherCourses = [courseData?.filter(otherCourses => otherCourses?.name !== name)];

    // eslint-disable-next-line
    const [liveCourses, setLiveCourses] = useState([]);
    const [purchasedLiveCourses, setPurchasedLiveCourses] = useState([]);
    const [ppm, setPpm] = useState(1500)
    const [discount, setDiscount] = useState(0);
    const [message, setMessage] = useState('');
    const [showMore, setShowMore] = useState(false);

    const myRef = useRef(null);

    const seeMore = () => {
        setShowMore(false);
        window.scrollTo(0, 0);
    }

    const { register, handleSubmit } = useForm();
    const { register: register2, handleSubmit: handleSubmit2 } = useForm();

    const onSubmit = data => {
        verifyPromoCode(data.code, courseName);
        document.getElementById('promo-form').reset();
    }

    const onSubmit2 = data => {
        verifyPromoCode(data.code, courseName);
        document.getElementById('promo_code').reset();
    }

    const verifyPromoCode = (code, course) => {
        fetch('https://api-skillshikhun.herokuapp.com/validatePromoCode', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code, course })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === true) {
                    setDiscount(data.result[0].discount);
                    setMessage("প্রোমো কোড অ্যাপ্লাইড");
                    document.getElementById('promo-form').style.display = 'none';
                    document.getElementById('promo_code').style.display = 'none';
                    // for smaller screen
                    document.getElementById('sm-promo').style.display = 'block'
                    document.getElementById('sm-info').style.display = 'block'
                    document.getElementById('sm-promo-open').style.display = 'none'
                    localStorage.setItem("code", data.result[0].code)
                }
                else {
                    setMessage('Invalid promo code');
                }
            })
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api-skillshikhun.herokuapp.com/api/get-payment/Live/${phone}`);
            const data = await res.json();
            setLiveCourses(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        liveCourses.filter(lc => lc.course === courseName).map(lc => setPurchasedLiveCourses([lc]))
    }, [liveCourses, courseName])

    useEffect(() => {
        setPpm(ppm - discount);
        // eslint-disable-next-line
    }, [discount])

    const nextBatchAlert = () => {
        Swal.fire({
            icon: 'info',
            title: 'আপনার ব্যাচ এখনো শুরু হয়নি',
            text: `ব্যাচ শুরু হওয়ার সম্ভাব্য তারিখ ৬ নভেম্বর`,
            timer: 3000,
            confirmButtonText: 'আচ্ছা',
        })
    }

    const duePayAlert = () => {
        Swal.fire({
            icon: 'info',
            title: 'অনুগ্রহ করে আপনার বকেয়া ফী পরিশোধ করুন',
            text: `লাইভ ক্লাসে নিরবচ্ছিন্ন যোগদান এবং ক্লাস রেকর্ডিং নিশ্চিত করতে, অনুগ্রহ করে আপনার বকেয়া কোর্স ফি প্রদান করুন`,
            confirmButtonText: 'ফি প্রদান করুন',
            confirmButtonColor: '#198754',
        })
        .then((result) => {
            if (result.isConfirmed) {
                navigate('/dashboard/payment-history')
                window.scrollTo(0,0)
            }
        })
    }

    useEffect(() => {
        window?.MC_PIXEL?.fireLogConversionEvent(`course_${course?.id}`)
    },)

    return (
        <>
            <CourseSEO course={course} />
            <PromoMessage />
            <div style={{ backgroundColor: '#f8f9fa' }}>
                <Navbar />
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 style={{ fontSize: '22px' }} className='text-center course-alt-title fw-bold'>{course.title}</h1>
                            <div style={{
                                // top: '100px', 
                                borderTopRightRadius: '25px',
                                borderTopLeftRadius: '25px'
                            }}
                            // className="position-sticky"
                            >
                                <div className="responsive-embed-youtube">
                                    <iframe className='' width="100%" height='auto' src={`${course.source}?controls=0`} title={course.slug} style={{ borderTopRightRadius: '22px', borderTopLeftRadius: '22px' }} allowFullScreen srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${course.source}?controls=0><img src=${course.image} alt=${course.seo_title} loading="lazy"><span>▶</span></a>`}
                                    ></iframe>
                                    {/* <img src={play} style={{position:'relative', zIndex:1, top:'50%', left:'50%', transform:'translate(-50%, -50%'}} className='img-fluid' width={45} alt={course.slug} /> */}
                                </div>

                            </div>
                            <div style={{
                                backgroundColor: 'white',
                                // borderBottomLeftRadius: '15px', borderBottomRightRadius:'15px', 
                                border: '1px solid #ececec', top: '90px'
                            }} className="container position-sticky">

                                {
                                    purchasedLiveCourses.length > 0 ?
                                        purchasedLiveCourses[0]?.payment_status === 'PAID' ?
                                            purchasedLiveCourses[0]?.batch === '1' ?
                                                <div className="">
                                                    <a href={course.live_link} target='_blank' rel="noreferrer" className='btn-buy mx-auto d-block p-3 text-decoration-none text-center d-none d-lg-block my-3 w-100'
                                                    // onClick={() => { window.scrollTo(0, 0); }}
                                                    >জয়েন ক্লাস</a>
                                                    <div className="">
                                                        <button onClick={() => {
                                                            window.scrollTo(0, 0);
                                                            navigate('/course/live/video/' + course.id)
                                                            // window.location.replace(course.recording_link)
                                                        }} className='class-video mx-auto d-block p-3 my-2 text-decoration-none text-center fs-6 text-white d-none d-lg-block w-100'>ক্লাস রেকর্ডিংস</button>
                                                        {/* <a href={course.recording_link} target='_blank' rel="noreferrer" className='class-video mx-auto d-block p-3 my-2 text-decoration-none text-center fs-6 text-white'>ক্লাস রেকর্ডিংস</a> */}
                                                    </div>
                                                </div>
                                                :
                                                <div className="">
                                                    {/* <a href={course.live_link_batch2} target='_blank' rel="noreferrer" className='btn-buy mx-auto d-block p-3 text-decoration-none text-center d-none d-lg-block my-3 w-100'
                                                >জয়েন ক্লাস</a> */}
                                                    <button onClick={() => nextBatchAlert()} className='btn-buy mx-auto d-block p-3 text-decoration-none text-center d-none d-lg-block my-3 w-100'>জয়েন ক্লাস</button>
                                                    <div className="">
                                                        <button onClick={() => {
                                                            window.scrollTo(0, 0);
                                                            navigate('/course/live/video/batch-2/' + course.id)
                                                            // window.location.replace(course.recording_link)
                                                        }} className='class-video mx-auto d-block p-3 my-2 text-decoration-none text-center fs-6 text-white d-none d-lg-block w-100'>ক্লাস রেকর্ডিংস</button>
                                                        {/* <a href={course.recording_link} target='_blank' rel="noreferrer" className='class-video mx-auto d-block p-3 my-2 text-decoration-none text-center fs-6 text-white'>ক্লাস রেকর্ডিংস</a> */}
                                                    </div>
                                                </div>
                                            :
                                            <>
                                                <button onClick={() => duePayAlert()} className='btn-buy mx-auto d-block p-3 text-decoration-none text-center d-none d-lg-block my-3 w-100'>জয়েন ক্লাস</button>
                                                <button onClick={() => duePayAlert()} className='class-video mx-auto d-block p-3 my-2 text-decoration-none text-center fs-6 text-white d-none d-lg-block w-100'>ক্লাস রেকর্ডিংস</button>
                                            </>
                                        :
                                        <div className="row py-3">
                                            <div style={{ justifyContent: 'space-between' }} className="d-flex">
                                                <div className="py-3 d-none d-lg-block">
                                                    <h2 style={{ fontSize: '20px', lineHeight: '24px' }} className='text-center'>১৪ {course.next_batch} ২০২২ ব্যাচ এ ভর্তি চলছে</h2>
                                                </div>
                                                <div className="py-3 d-none d-lg-block">
                                                    {/* <h2 style={{ textAlign: 'right', fontSize: '20px', lineHeight: '24px' }} className='fw-bold'>&#2547; {course.price_per_month_bn}/মাস</h2> */}
                                                    {
                                                        course?.name === 'সবার জন্য ফ্রিল্যান্সিং' ?
                                                            <h2 style={{ textAlign: 'right', fontSize: '20px', lineHeight: '24px' }} className='fw-bold'>&#2547; ৭৫০</h2> :
                                                            <h2 style={{ textAlign: 'right', fontSize: '20px', lineHeight: '24px' }} className='fw-bold'>&#2547; {ppm} প্রতি মাস</h2>
                                                    }
                                                </div>
                                            </div>
                                            {/* <img className='img-fluid' src={skill999_sm} alt="" /> */}
                                            
                                            <CourseTime course={course} />

                                            {
                                            course.name === 'সবার জন্য ফ্রিল্যান্সিং' ? null :
                                                <div className="d-none d-lg-block">
                                                    <span onClick={() => {
                                                        document.getElementById('lg-promo-container').style.display === 'block' ?
                                                            document.getElementById('lg-promo-container').style.display = 'none' :
                                                            document.getElementById('lg-promo-container').style.display = 'block'
                                                    }} style={{
                                                        textDecoration: 'underline', cursor: 'pointer', color: '#653dae'
                                                        // , backgroundColor:'#653dae'
                                                        ,
                                                        borderRadius: '5px', float: 'left'
                                                    }} className='fs-5 text-center p-2 mt-2'>প্রোমো কোড <img width={25} className='img-fluid' src={clickImage} alt="Promo" /> </span>

                                                    <div style={{ display: 'none', marginTop: '3px' }} id="lg-promo-container">
                                                        <form id='promo-form' onSubmit={handleSubmit(onSubmit)}>
                                                            <div className="d-flex justify-content-center align-items-center p-2">
                                                                <button onClick={() => document.getElementById('lg-promo-container').style.display = 'none'} style={{ border: '1px solid lightgrey', backgroundColor: 'transparent', width: '30px', height: '30px', borderRadius: '50%' }} className='me-2 fw-bold'>X</button>
                                                                <input
                                                                    // value='FRI500' 
                                                                    placeholder="প্রোমো কোড লিখুন" className='form-control w-50' type="text" {...register("code", { required: true })} />
                                                                <input className='btn btn-success' type="submit" value="অ্যাপ্লাই" />
                                                            </div>
                                                        </form>
                                                        <p className='text-center fw-bold mt-3'>{message}</p>
                                                    </div>
                                                </div>
                                            }

                                            {/* <div style={{ justifyContent: 'space-between' }} className="d-flex py-2">
                                                <div className="col-md-6">
                                                    {
                                                        course?.name === 'সবার জন্য ফ্রিল্যান্সিং' ?
                                                            null :
                                                            <div className="d-flex justify-content-center">
                                                                <div className="mt-2 me-2 fs-4">
                                                                    <FontAwesomeIcon style={{ fontSize: '16px', lineHeight: '24px' }} icon={faUsers} />
                                                                </div>
                                                                <div className="">
                                                                    <p style={{ fontSize: '14px', lineHeight: '22px' }} className='text-center'> কোর্সটি করেছেন<br /><span style={{ borderRadius: '15px', border: '1px solid #12348d', fontSize: '16px', lineHeight: '24px' }} className='fw-bold px-3'>{course.course_done} জন</span></p>
                                                                </div>
                                                            </div>
                                                    }

                                                    <div className="d-flex justify-content-center">
                                                        <div className="mt-3 me-2 fs-4">
                                                            <FontAwesomeIcon style={{ fontSize: '16px', lineHeight: '24px' }} icon={faCalendarDays} />
                                                        </div>
                                                        <div className="">
                                                            <p style={{ fontSize: '14px', lineHeight: '22px' }} className='text-center mt-2'> নেক্সট ব্যাচ<br /><span style={{ borderRadius: '15px', border: '1px solid #12348d', fontSize: '14px', lineHeight: '24px' }} className='fw-bold px-3'>৬ {course.next_batch} ২০২২</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    {
                                                        course?.name === 'সবার জন্য ফ্রিল্যান্সিং' ?
                                                            null :
                                                            <div className="d-flex justify-content-center">
                                                                <div className="mt-2 me-2 fs-4">
                                                                    <FontAwesomeIcon style={{ fontSize: '16px', lineHeight: '24px' }} icon={faClock} />
                                                                </div>
                                                                <div className="">
                                                                    <p style={{ fontSize: '14px', lineHeight: '22px' }} className='text-center'> সময় লাগবে<br /><span style={{ borderRadius: '15px', border: '1px solid #12348d', fontSize: '16px', lineHeight: '24px' }} className='fw-bold px-3'>{course.course_duration} মাস</span></p>
                                                                </div>
                                                            </div>
                                                    }

                                                    <div className="d-flex justify-content-center">
                                                        <div className="">
                                                            <p style={{ fontSize: '14px', lineHeight: '22px' }} className='text-center'><img src={live} className='img-fluid pe-1' width={35} alt="live class" /> লাইভ ক্লাস সংখ্যা<br /><span style={{ borderRadius: '15px', border: '1px solid #12348d', fontSize: '16px', lineHeight: '24px' }} className='fw-bold px-3 ms-4'>{course.total_classes} টি</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

                                            <div className="container d-none d-lg-block">
                                                <div className="row">
                                                    <div className="col-md-6 mt-1">
                                                        <Link to='' className='text-decoration-none'><button className='btn-demo mx-auto d-block p-3' onClick={() => {
                                                            myRef.current.scrollIntoView()
                                                            window?.MC_PIXEL?.fireLogConversionEvent(`free_class_button_clicked_${course?.id}`)
                                                            }}>ক্লাসের ভিডিও দেখুন &#8594;</button></Link>
                                                    </div>
                                                    {
                                                        localStorage.getItem('token') && purchasedLiveCourses.length === 0 ? <div className="col-md-6 mt-1">
                                                            <Link to={`/checkout/${course.id}`} className='text-decoration-none'><button className='btn-buy mx-auto d-block p-3' onClick={() => { 
                                                                window.scrollTo(0, 0); 
                                                                window?.MC_PIXEL?.fireLogConversionEvent(`bhorti_hoye_jan_clicked_${course?.id}`)
                                                                }}>এখনই ভর্তি হয়ে যান &#8594;</button></Link>
                                                        </div> :
                                                            <div className="col-md-6 mt-1">
                                                                <Link to={`/purchase/checkout/${course.id}`} className='text-decoration-none'><button className='btn-buy mx-auto d-block p-3' onClick={() => { 
                                                                    window.scrollTo(0, 0); 
                                                                    window?.MC_PIXEL?.fireLogConversionEvent(`bhorti_hoye_jan_clicked_${course?.id}`)
                                                                    }}>এখনই ভর্তি হয়ে যান &#8594;</button></Link>
                                                            </div>
                                                    }
                                                </div>
                                            </div>

                                            {/* {
                                    purchasedLiveCourses.length ? <a href={course.live_link} target='_blank' rel="noreferrer" className='btn-buy mx-auto d-block p-3 text-decoration-none text-center d-none d-lg-block'
                                    // onClick={() => { window.scrollTo(0, 0); }}
                                    >জয়েন ক্লাস</a> :
                                        <div className="container d-none d-lg-block">
                                            <div className="row">
                                                <div className="col-md-6 mt-1">
                                                    <Link to='' className='text-decoration-none'><button className='btn-demo mx-auto d-block p-3' onClick={() => myRef.current.scrollIntoView()}>ক্লাসের ভিডিও দেখুন &#8594;</button></Link>
                                                </div>
                                                {
                                                    localStorage.getItem('token') && purchasedLiveCourses.length === 0 ? <div className="col-md-6 mt-1">
                                                        <Link to={`/checkout/${course.id}`} className='text-decoration-none'><button className='btn-buy mx-auto d-block p-3' onClick={() => { window.scrollTo(0, 0); }}>এখনই ভর্তি হয়ে যান &#8594;</button></Link>
                                                    </div> : <div className="col-md-6 mt-1">
                                                        <Link to={`/purchase/checkout/${course.id}`} className='text-decoration-none'><button className='btn-buy mx-auto d-block p-3' onClick={() => { window.scrollTo(0, 0); }}>এখনই ভর্তি হয়ে যান &#8594;</button></Link>
                                                    </div>
                                                }

                                            </div>
                                        </div>
                                } */}
                                            <p className='text-center mt-3 d-none d-lg-block'>কোর্সটি সম্পর্কে বিস্তারিত জানতে <span style={{ textDecoration: 'underline' }}><a href="tel:09613823645" className='text-success'><FontAwesomeIcon style={{ textDecoration: 'none' }} className='mx-1' icon={faPhone} />কল করুন: 09613823645</a></span></p>

                                            <a style={{ fontSize: '14px', border: '1px solid lightgrey', borderRadius: '8px', boxShadow: '0 0px 1px 0px #0003' }} href="https://m.me/skillshikhun" target="_blank" rel="noreferrer" className='text-decoration-none p-2 messenger-lg mx-auto d-block text-center w-25 d-none d-lg-block'>
                                                <img width={30} className='img-fluid pb-1' src={messenger} alt="chat in messenger" /> চ্যাট করুন
                                            </a>

                                            <a style={{ fontSize: '14px', border: '1px solid lightgrey', borderRadius: '8px', boxShadow: '0 0px 1px 0px #0003' }} href="https://wa.me/message/ENYNMXKMSDMGK1" target="_blank" rel="noreferrer" className='text-decoration-none p-2 whatsapp-lg mx-auto d-block text-center w-25 d-none d-lg-block'>
                                                <img width={30} className='img-fluid pb-1' src={whatsapp} alt="chat in whatsapp" /> চ্যাট করুন
                                            </a>
                                        </div>
                                }
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <h2 style={{
                                marginTop: '0.5rem',
                                fontSize: '22px'
                            }} className="text-center pb-3 fw-bold"><img src={content} width={20} className='img-fluid' alt={course.seo_title} /> কোর্স মডিউল</h2>
                            {
                                showMore ?
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        {
                                            course.outline.map(item =>
                                                <div style={{ border: 'none' }} className="accordion-item m-2" key={item.id}>
                                                    <h2 className="accordion-header" id={`flush-heading${item.id}`}>
                                                        <button style={{ backgroundColor: '#f1f1f1', borderRadius: '10px' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
                                                            <span className='pe-2'>&#43;</span>{item.title}
                                                        </button>
                                                    </h2>
                                                    <div id={`flush-collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${item.id}`} data-bs-parent="#accordionFlushExample">
                                                        <div style={{ backgroundColor: 'white', border: 'none' }} className="accordion-body text-black">{item.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        <h5 style={{ cursor: 'pointer', border: '1px solid lightgrey', borderRadius: '15px', backgroundColor: 'white', boxShadow: '0 3px 10px 3px #0003', fontSize: '16px', marginTop: '-1.3rem', zIndex: '5', position: 'relative', width: '150px' }} className='text-center p-2 mx-auto d-block' onClick={seeMore}>কম দেখুন <FontAwesomeIcon icon={faAngleUp} /></h5>
                                    </div> :
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        {
                                            course.outline.slice(0, 6).map(item =>
                                                <div style={{ border: 'none' }} className="accordion-item m-2" key={item.id}>
                                                    <h2 className="accordion-header" id={`flush-heading${item.id}`}>
                                                        <button style={{ backgroundColor: '#f1f1f1', borderRadius: '10px' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
                                                            <span className='pe-2'>&#43;</span>{item.title}
                                                        </button>
                                                    </h2>
                                                    <div id={`flush-collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${item.id}`} data-bs-parent="#accordionFlushExample">
                                                        <div style={{ backgroundColor: 'white', border: 'none' }} className="accordion-body text-black">{item.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        <h5 style={{ cursor: 'pointer', border: '1px solid lightgrey', borderRadius: '15px', backgroundColor: 'white', boxShadow: '0 3px 10px 3px #0003', fontSize: '16px', marginTop: '-1.3rem', zIndex: '5', position: 'relative', width: '150px' }} className='text-center p-2 mx-auto d-block' onClick={() => setShowMore(true)}>আরো দেখুন <FontAwesomeIcon icon={faAngleDown} /></h5>
                                    </div>
                            }

                            {/* What you'll learn in this course */}
                            <div style={{ backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ececec' }} className="mt-5">
                                <h2 style={{ color: '#343b6d', fontSize: '22px' }} className='fw-bold text-center mt-3'><img src={certificate} width={35} className='img-fluid pb-1' alt={course.seo_title} /> এই কোর্সে আপনি কি শিখবেন?</h2>
                                <ul className='p-4'>
                                    {
                                        course.features.map(item => <li key={item.id} style={{ color: '#454c7e', textAlign: 'justify', listStyle: 'none', fontSize: '16px', lineHeight: '24px', fontWeight: '400' }} className="mt-2" ><FontAwesomeIcon className='text-success' icon={faCheck} /> {item.item}</li>)
                                    }
                                </ul>
                            </div>

                            {/* ▶ Instructor Profile */}
                            <div style={{ backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ececec' }} className="container course-instructor mt-5">
                                <h2 style={{ color: '#343b6d', fontSize: '22px' }} className='fw-bold text-center mt-3'><img src={user} width={20} className='img-fluid pb-2' alt={course.seo_title} /> ইনস্ট্রাক্টর</h2>
                                <div className="d-flex m-2 justify-content-center align-items-center">
                                    <div className="py-2 col-sm-3">
                                        <img style={{ borderRadius: '50%' }} width={100} src={course.instructor_image} alt={course.course_instructor} />
                                    </div>
                                    <div className="p-3 col-sm-9">
                                        <h3 style={{ fontSize: '18px', lineHeight: '28px', textAlign: 'justify', flexWrap: 'wrap', fontWeight: '700' }}>{course.course_instructor}</h3>
                                        {
                                            course?.instructor_designation ? <p style={{ fontSize: '14px', lineHeight: '20px', flexWrap: 'wrap' }}>{course.instructor_designation}</p> : <p>Data Not Found!</p>
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* How to payment */}
                            <HowToPayment />

                            {/* Course Group */}
                            <CourseGroup course={course} />

                            {/* Demo Class Registration Form */}
                            <CourseDemoClass course={course} refProp={myRef} />

                            {/* Course Review */}
                            {
                                course?.name === 'সবার জন্য ফ্রিল্যান্সিং' ? null : <CourseReview course={course} />
                            }

                        </div>

                    </div>
                </div>


                {/* Other Course Container  */}
                <div className="container py-5 d-none d-lg-block">
                    <h2 style={{ fontSize: '24px', lineHeight: '23px', color: '#343b6d' }} className='fw-bold text-center'>আরো কোর্স</h2>
                    <div className="row justify-content-center">
                        {
                            otherCourses[0].map(otherCourse =>
                                <div key={otherCourse.id} className="other-courses col-lg-3 col-md-6 my-4">
                                    <Link className='text-decoration-none' onClick={() => { window.scrollTo(0, 0); }} to={otherCourse.route}>
                                        <div
                                            style={{ border: '1px solid #dde7f3', borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}
                                            // style={{ backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ececec', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)' }} 
                                            className='bg-white'>
                                            <img style={{ borderRadius: '15px' }} className='img-fluid' src={otherCourse.image} alt={otherCourse.seo_title} loading="lazy" />
                                            <h3 style={{ fontSize: '18px', lineHeight: '28px', color: '#343b6d' }} className='fw-bold pt-4 ps-2'>{otherCourse.title}</h3>

                                            <div
                                                style={{ justifyContent: 'space-between', backgroundColor: 'rgb(236,238,255)' }} className="d-flex py-3"
                                            // style={{ borderTop: '1px solid #ececec', justifyContent: 'space-between' }} 
                                            // className="d-flex"
                                            >

                                                {/* <h4 style={{ fontSize: '20px', lineHeight: '28px', color: '#454c7e' }} className='ps-2 pt-2 fw-bold'>৳ 2600</h4>
                                        <Link onClick={() => { window.scrollTo(0, 0); }} to={otherCourse.route} className='text-decoration-none'><p style={{ fontSize: '15px', lineHeight: '24px', color: '#b94a8f' }} className='pe-3 pt-2 fw-bold'>বিস্তারিত দেখুন</p></Link> */}
                                                <h4 style={{ fontSize: '16px', lineHeight: '27px', fontWeight: '600', color: '#069654' }} className='pt-1 ps-3 price'><span style={{ color: '#354895' }}>মাত্র</span> ৳ {otherCourse.price_per_month_bn}<small style={{ color: '#354895' }}> {otherCourse.name === 'সবার জন্য ফ্রিল্যান্সিং' ? null : "প্রতি মাস"}</small>
                                                    {/* <strike className='ps-2 text-muted'>{course.regular_price}</strike> */}
                                                </h4>
                                                <button onClick={() => { window.scrollTo(0, 0); }} className='see-details me-3' to={course.route}>বিস্তারিত দেখুন</button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )}
                    </div>
                </div>

                {/* Display on smaller devices */}

                <div style={{ boxShadow: '0 3px 10px 3px #0003', padding: '0' }} className="container-fluid d-lg-none fixed-bottom bg-white">

                    {
                        course?.name === 'সবার জন্য ফ্রিল্যান্সিং' ?
                            null
                            :
                            <div style={{ display: 'none' }} id="sm-promo-open">
                                <span onClick={() => {
                                    document.getElementById('sm-promo').style.display = 'block'
                                    document.getElementById('sm-info').style.display = 'block'
                                    document.getElementById('sm-promo-open').style.display = 'none'
                                }
                                } style={{ textDecoration: 'underline', cursor: 'pointer', color: '#653dae' }} className='fs-6 mx-auto d-block fw-bold p-2'>প্রোমো কোড লিখুন</span>


                                <form id='promo_code' onSubmit={handleSubmit2(onSubmit2)}>
                                    <div className="d-flex justify-content-center align-items-center p-2">
                                        <button onClick={() => {
                                            document.getElementById('sm-promo').style.display = 'block'
                                            document.getElementById('sm-info').style.display = 'block'
                                            document.getElementById('sm-promo-open').style.display = 'none'
                                        }
                                        } style={{ border: '1px solid lightgrey', backgroundColor: 'transparent', width: '30px', height: '30px', borderRadius: '50%' }} className='me-2 fw-bold'>X</button>
                                        <input
                                            // value="FRI500" 
                                            placeholder="প্রোমো কোড লিখুন" className='form-control w-50' type="text" {...register2("code", { required: true })} />
                                        <input className='btn btn-success' type="submit" value="অ্যাপ্লাই" />
                                    </div>
                                </form>
                                <p className='text-center fw-bold'>{message}</p>
                            </div>
                    }

                    <div id="sm-info">
                        {
                            purchasedLiveCourses.length > 0 ?
                                purchasedLiveCourses[0]?.payment_status === 'PAID' ?
                                    purchasedLiveCourses[0]?.batch === '1' ?
                                        <div className="">
                                            <a href={course.live_link} target='_blank' rel="noreferrer" className='btn-buy mx-auto d-block p-3 my-2 text-decoration-none text-center'
                                            >জয়েন ক্লাস</a>
                                            <div className="px-1">
                                                <button onClick={() => {
                                                    window.scrollTo(0, 0);
                                                    navigate('/course/live/video/' + course.id)
                                                    // window.location.replace(course.recording_link)
                                                }} className='class-video mx-auto d-block p-3 my-2 text-decoration-none text-center fs-6 text-white w-100'>ক্লাস রেকর্ডিংস</button>
                                                {/* <a href={course.recording_link} target='_blank' rel="noreferrer" className='class-video mx-auto d-block p-3 my-2 text-decoration-none text-center fs-6 text-white'>ক্লাস রেকর্ডিংস</a> */}
                                            </div>
                                        </div>
                                        :
                                        <div className="">
                                            {/* <a href={course.live_link_batch2} target='_blank' rel="noreferrer" className='btn-buy mx-auto d-block p-3 my-2 text-decoration-none text-center'
                                        >জয়েন ক্লাস</a> */}
                                            <button onClick={() => nextBatchAlert()} className='btn-buy mx-auto d-block p-3 my-2 text-decoration-none text-center'>জয়েন ক্লাস</button>
                                            <div className="px-1">
                                                <button onClick={() => {
                                                    window.scrollTo(0, 0);
                                                    navigate('/course/live/video/batch-2/' + course.id)
                                                    // window.location.replace(course.recording_link)
                                                }} className='class-video mx-auto d-block p-3 my-2 text-decoration-none text-center fs-6 text-white w-100'>ক্লাস রেকর্ডিংস</button>
                                                {/* <a href={course.recording_link} target='_blank' rel="noreferrer" className='class-video mx-auto d-block p-3 my-2 text-decoration-none text-center fs-6 text-white'>ক্লাস রেকর্ডিংস</a> */}
                                            </div>
                                        </div>
                                    :
                                    <>
                                        <button onClick={() => duePayAlert()} className='btn-buy mx-auto d-block p-3 my-2 text-decoration-none text-center'>জয়েন ক্লাস</button>
                                        <div className="px-1">
                                            <button onClick={() => duePayAlert()} className='class-video mx-auto d-block p-3 my-2 text-decoration-none text-center fs-6 text-white w-100'>ক্লাস রেকর্ডিংস</button>
                                        </div>
                                    </>
                                :
                                <div className="my-3">
                                    <h2 style={{ fontSize: '14px', lineHeight: '18px' }} className='text-center'>ক্লাস শুরু হচ্ছে : ১৪ {course.next_batch} ২০২২</h2>
                                    <div className="container-fluid d-flex justify-content-between px-2 align-items-center">

                                        <div style={{ border: '1px solid lightgrey', borderRadius: '8px', boxShadow: '0 0px 1px 0px #0003' }} className="col-sm-3 p-2 d-flex justify-content-center align-items-center mx-1">
                                            <a style={{ fontSize: '12px', textDecoration: 'none', color: 'black' }} href="tel:09613823645">
                                                <img width={20} src={call} className='img-fluid' alt="call" /> 09613823645
                                            </a>
                                        </div>

                                        {/* <div id='sm-next-batch' className="col-sm-2">
                                            <h2 style={{ fontSize: '13px', lineHeight: '24px' }} className='pt-2'>
                                                ব্যাচ: <b style={{fontSize:'16px'}}>{course.next_batch}</b> ২০২২
                                            </h2>
                                        </div> */}

                                        {
                                            course?.name === 'সবার জন্য ফ্রিল্যান্সিং' ? null :
                                                <div className="col-sm-4 mb-2 mx-auto d-block">
                                                    <div id='sm-promo' className='col-md-4' onClick={() => {
                                                        document.getElementById('sm-promo-open').style.display = 'block'
                                                        document.getElementById('sm-promo').style.display = 'none'
                                                        document.getElementById('sm-info').style.display = 'none'
                                                    }
                                                    }>
                                                        <span style={{ fontSize: '15px', textDecoration: 'underline', cursor: 'pointer', color: '#653dae' }} className='mx-auto d-block fw-bold pt-2 text-center'>প্রোমো কোড <img width={18} className='img-fluid' src={clickImage} alt="Promo" /> </span>
                                                    </div>
                                                </div>
                                        }

                                        <div className="col-sm-2">
                                            <a style={{ fontSize: '10px', border: '1px solid lightgrey', borderRadius: '8px', boxShadow: '0 0px 1px 0px #0003' }} href="https://m.me/skillshikhun" target="_blank" rel="noreferrer" className='text-decoration-none text-black p-2 me-1'>
                                                <img width={20} className='img-fluid pb-1' src={messenger} alt="chat in messenger" /> চ্যাট
                                            </a>
                                        </div>

                                        <div className="col-sm-2">
                                            <a style={{ fontSize: '10px', border: '1px solid lightgrey', borderRadius: '8px', boxShadow: '0 0px 1px 0px #0003' }} href="https://wa.me/message/ENYNMXKMSDMGK1" target="_blank" rel="noreferrer" className='text-decoration-none text-black p-2 me-1'>
                                                <img width={20} className='img-fluid pb-1' src={whatsapp} alt="chat in whatsapp" /> চ্যাট
                                            </a>
                                        </div>
                                    </div>

                                    <div style={{ padding: '0' }} id='sm-video-pay-container' className="container">
                                        <div className="d-flex justify-content-between align-items-center px-2">

                                            <div id='free_reg_sm_btn_container' className="col-sm-4 mt-1 w-25">
                                                <Link to='' className='text-decoration-none'>
                                                    <button style={{ fontSize: '16px' }} className='btn-demo mx-auto d-block'
                                                        onClick={() => {
                                                            myRef.current.scrollIntoView()
                                                            // document.getElementById('free_reg_sm_btn_container').style.display = 'none'
                                                        }}>ফ্রি ভিডিও</button>
                                                </Link>
                                            </div>

                                            {
                                                localStorage.getItem('token') && purchasedLiveCourses.length === 0 ?
                                                    <div className="col-sm-8 mt-1 w-75">
                                                        <Link to={`/checkout/${course.id}`} className='text-decoration-none'>
                                                            <button className='btn-buy mx-auto d-block' onClick={() => { window.scrollTo(0, 0); }}>
                                                                <div style={{ justifyContent: 'space-between' }} className="d-flex align-items-center">
                                                                    {
                                                                        course?.name === 'সবার জন্য ফ্রিল্যান্সিং' ?
                                                                            <div className='col-sm-6' style={{ fontSize: '20px' }}>
                                                                                &#2547; ৭৫০
                                                                            </div> :
                                                                            <div className='col-sm-6' style={{ fontSize: '20px' }}>
                                                                                &#2547; {ppm} প্রতি মাস
                                                                            </div>
                                                                    }
                                                                    <div className='col-sm-6' style={{ fontSize: '20px' }}>
                                                                        ভর্তি হন &#8594;
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                    :
                                                    <div className="col-sm-8 mt-1 w-75">
                                                        <Link to={`/purchase/checkout/${course.id}`} className='text-decoration-none'>
                                                            <button className='btn-buy mx-auto d-block' onClick={() => { window.scrollTo(0, 0); }}>
                                                                <div style={{ justifyContent: 'space-between' }} className="d-flex align-items-center">
                                                                    {
                                                                        course?.name === 'সবার জন্য ফ্রিল্যান্সিং' ?
                                                                            <div className='col-sm-6' style={{ fontSize: '20px' }}>
                                                                                &#2547; ৭৫০ প্রতি মাস
                                                                            </div> :
                                                                            <div className='col-sm-6' style={{ fontSize: '20px' }}>
                                                                                &#2547; {ppm} প্রতি মাস
                                                                            </div>
                                                                    }
                                                                    <div className='col-sm-6' style={{ fontSize: '20px' }}>
                                                                        ভর্তি হন &#8594;
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </Link>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>

                </div>
                <Footer />
                <Tracker props={props} />
            </div>
        </>
    );
};

export default Course;