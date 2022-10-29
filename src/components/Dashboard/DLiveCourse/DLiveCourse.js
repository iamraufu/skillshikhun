import React, { useEffect, useState } from 'react';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';
import courseData from '../../../data/course/courseData';
import live from '../../../images/live.png';
import liveClass from '../../../images/liveClass.svg';
import {
    Link
    , useNavigate
} from 'react-router-dom';
import Swal from 'sweetalert2';

// import { ZoomMtg } from '@zoomus/websdk';
// import Countdown from '../../Countdown/Countdown';

// ZoomMtg.setZoomJSLib('https://source.zoom.us/2.4.5/lib', '/av');
// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareWebSDK();
// ZoomMtg.i18n.load('en-US');
// ZoomMtg.i18n.reload('en-US');

const DLiveCourse = () => {

    const navigate = useNavigate();
    const phone = localStorage.getItem('phone');
    // const [userPhoneData, setUserPhoneData] = useState({})
    // eslint-disable-next-line
    const [liveCourses, setLiveCourses] = useState([]);
    const [purchasedLiveCourses, setPurchasedLiveCourses] = useState([]);
    const [otherLiveCourses, setOtherLiveCourses] = useState([]);
    const [payments, setPayments] = useState([]);

    // fetching user info
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch(`https://api-skillshikhun.herokuapp.com/users/userBy/phone/${phone}`);
    //         const data = await res.json();
    //         setUserPhoneData(data);
    //     }
    //     fetchData();
    // }, [phone])

    // fetching user paid info
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api-skillshikhun.herokuapp.com/api/get-payments/${phone}`);
            const data = await res.json();
            setPayments(data);
        }
        fetchData();
    }, [phone])

    // fetching live courses
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api-skillshikhun.herokuapp.com/api/get-payment/Live/${phone}`);
            const data = await res.json();
            setLiveCourses(data);
        }
        fetchData();
    }, [phone])

    const [webDevelopment, setWebDevelopment] = useState([])
    const [digitalMarketing, setDigitalMarketing] = useState([]);
    const [videoEditing, setVideoEditing] = useState([]);
    const [graphicsDesign, setGraphicsDesign] = useState([]);
    const [shobarJnnoFreelancing, setShobarJnnoFreelancing] = useState([]);

    // Web Development
    useEffect(() => {
        setWebDevelopment(payments.filter(payment => payment.course === 'Web Development'))
    }, [payments])

    // Digital Marketing
    useEffect(() => {
        setDigitalMarketing(payments.filter(payment => payment.course === 'Digital Marketing'))
    }, [payments])

    // Video Editing
    useEffect(() => {
        setVideoEditing(payments.filter(payment => payment.course === 'Video Editing'))
    }, [payments])

    // Graphics Design
    useEffect(() => {
        setGraphicsDesign(payments.filter(payment => payment.course === 'Graphics Design'))
    }, [payments])

    // Shobar Jnno Freelancing
    useEffect(() => {
        setShobarJnnoFreelancing(payments.filter(payment => payment.course === 'সবার জন্য ফ্রিল্যান্সিং'))
    }, [payments])

    //  hook for setting purchased courses, other courses and meetings
    useEffect(() => {

        const live_courses = payments.map(pm => pm.course).filter(course => courseData.map(cd => cd.name).includes(course))
        setPurchasedLiveCourses(courseData.filter(course => live_courses.includes(course.name)))

        setOtherLiveCourses(courseData?.filter(course => !live_courses.includes(course.name)));

    }, [payments])

    // let signatureEndpoint = 'https://api-skillshikhun.herokuapp.com/liveClass'
    // let sdkKey = '87rXfpYIpyQYMZSrjmcYKvF72lEqinAuroje'
    // let meetingNumber = ''
    // let role = 0
    // let userName = userPhoneData.name
    // let userEmail = userPhoneData.email
    // let passWord = ''
    // let leaveUrl = 'https://www.skillshikhun.com/dashboard'
    // let registrantToken = ''

    // async function getSignature(meetingNumber, password) {

    //     await fetch(signatureEndpoint, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             meetingNumber: meetingNumber,
    //             role: role
    //         })
    //     }).then(res => res.json())
    //         .then(response => {
    //             startMeeting(response.signature, meetingNumber, password)
    //         }).catch(error => {

    //         })
    // }

    // async function startMeeting(signature, meetingNumber, password) {

    //     document.getElementById('zmmtg-root').style.display = 'block'
    //     document.getElementById('d_live').style.display = 'none'

    //     await ZoomMtg.init({
    //         leaveUrl: leaveUrl,
    //         success: (success) => {

    //             ZoomMtg.join({
    //                 signature: signature,
    //                 meetingNumber: meetingNumber,
    //                 userName: userName,
    //                 sdkKey: sdkKey,
    //                 userEmail: userEmail,
    //                 passWord: password,
    //                 tk: registrantToken,
    //                 success: (success) => {

    //                 },
    //                 error: (error) => {

    //                 }
    //             })

    //         },
    //         error: (error) => {
    //         }
    //     })
    // }

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

    return (
        <div>
            <div id="d_live">
                <DNavbar />
                <div style={{ margin: '5rem 0' }} className='container-fluid'>
                    <div className="row">

                        {/* left sidebar */}
                        <div className="col-xl-2 col-lg-3 col-md-4 d-none d-lg-block position-sticky">
                            <Sidebar />
                        </div>

                        <div style={{ minHeight: '800px', backgroundColor: '#f3f5f9', borderRadius: '15px', marginBottom: '5rem' }} className="col-xl-9 col-lg-9 col-md-12 py-5 px-5">
                            <div className="row">
                                <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='mt-3'>
                                    <img src={live} width={45} className='img-fluid me-2' alt="video course" />
                                    লাইভ কোর্স</h2>


                                {/* {
                                    userPhoneData?.name ?  */}
                                <div className="">
                                    {
                                        purchasedLiveCourses?.length === 1 &&
                                        <div className="row justify-content-center">
                                            <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='my-3'>আপনি যে কোর্স সমূহে ভর্তি হয়েছেন</h2>
                                            {purchasedLiveCourses?.map(course => {
                                                return (
                                                    <div key={course.id} className='featured-courses col-md-6 mt-2 mb-5'>
                                                        <section>
                                                            <div style={{ border: '1px solid #dde7f3', borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}>
                                                                <img style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} src={course.image} alt={course.title} className='img-fluid' loading="lazy" />
                                                                <div className="bg-white py-4">
                                                                    <h3 style={{ fontSize: '15px', lineHeight: '24px', fontWeight: '600', color: '#354895' }} className='px-3 text-center'>{course.title}</h3>
                                                                    {/* <h4 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#b94a8f' }} className='text-center px-3 price mt-2'>
                                                                        <span style={{ color: '#354895', fontSize: '14px' }}>সময়: </span>{course.class_time}
                                                                    </h4> */}
                                                                    {/* <Countdown
                                                                        deadline={course.next_batch_eng}
                                                                        text={'কোর্স শুরু হতে সময় বাকি'}
                                                                    /> */}
                                                                </div>

                                                                <div style={{ justifyContent: 'space-between', backgroundColor: 'rgb(236,238,255)' }} className="d-flex p-3">

                                                                    {/* Web Development */}
                                                                    {
                                                                        course.name === 'Web Development' ?
                                                                        webDevelopment[0]?.payment_status === 'PAID' ?
                                                                            webDevelopment[0]?.batch === '1' ?
                                                                                    <a href={course.live_link} target='_blank' rel="noreferrer" className='see-details'
                                                                                    // onClick={() => { window.scrollTo(0, 0); }}
                                                                                    >জয়েন ক্লাস</a>
                                                                                    :
                                                                                    <button onClick={() => nextBatchAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* Digital Marketing */}
                                                                    {
                                                                        course.name === 'Digital Marketing' ?
                                                                        digitalMarketing[0]?.payment_status === 'PAID' ?
                                                                            digitalMarketing[0]?.batch === '1' ?
                                                                                    <a href={course.live_link} target='_blank' rel="noreferrer" className='see-details'
                                                                                    // onClick={() => { window.scrollTo(0, 0); }}
                                                                                    >জয়েন ক্লাস</a>
                                                                                    :
                                                                                    <button onClick={() => nextBatchAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* Video Editing */}
                                                                    {
                                                                        course.name === 'Video Editing' ?
                                                                        videoEditing[0]?.payment_status === 'PAID' ?
                                                                            videoEditing[0]?.batch === '1' ?
                                                                                    <a href={course.live_link} target='_blank' rel="noreferrer" className='see-details'
                                                                                    // onClick={() => { window.scrollTo(0, 0); }}
                                                                                    >জয়েন ক্লাস</a>
                                                                                    :
                                                                                    <button onClick={() => nextBatchAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* Graphics Design */}
                                                                    {
                                                                        course.name === 'Graphics Design' ?
                                                                        graphicsDesign[0]?.payment_status === 'PAID' ?
                                                                            graphicsDesign[0]?.batch === '1' ?
                                                                                    <a href={course.live_link} target='_blank' rel="noreferrer" className='see-details'
                                                                                    // onClick={() => { window.scrollTo(0, 0); }}
                                                                                    >জয়েন ক্লাস</a>
                                                                                    :
                                                                                    <button onClick={() => nextBatchAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* Shobar jnno freelancing */}
                                                                    {
                                                                        course.name === 'সবার জন্য ফ্রিল্যান্সিং' ?
                                                                        shobarJnnoFreelancing[0]?.payment_status === 'PAID' ?
                                                                            shobarJnnoFreelancing[0]?.batch === '1' ?
                                                                                    <a href={course.live_link} target='_blank' rel="noreferrer" className='see-details'
                                                                                    // onClick={() => { window.scrollTo(0, 0); }}
                                                                                    >জয়েন ক্লাস</a>
                                                                                    :
                                                                                    <button onClick={() => nextBatchAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* Class Recording and Join Class Divider */}

                                                                    {/* Web Development */}
                                                                    {
                                                                        course.name === 'Web Development' ?
                                                                        webDevelopment[0]?.payment_status === 'PAID' ?
                                                                            webDevelopment[0]?.batch === '1' ?
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                    :
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/batch-2/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* Digital Marketing */}
                                                                    {
                                                                        course.name === 'Digital Marketing' ?
                                                                        digitalMarketing[0]?.payment_status === 'PAID' ?
                                                                            digitalMarketing[0]?.batch === '1' ?
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                    :
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/batch-2/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* Video Editing */}
                                                                    {
                                                                        course.name === 'Video Editing' ?
                                                                        videoEditing[0]?.payment_status === 'PAID' ?
                                                                            videoEditing[0]?.batch === '1' ?
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                    :
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/batch-2/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* Graphics Design */}
                                                                    {
                                                                        course.name === 'Graphics Design' ?
                                                                        graphicsDesign[0]?.payment_status === 'PAID' ?
                                                                            graphicsDesign[0]?.batch === '1' ?
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                    :
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/batch-2/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* সবার জন্য ফ্রিল্যান্সিং */}
                                                                    {
                                                                        course.name === 'সবার জন্য ফ্রিল্যান্সিং' ?
                                                                        shobarJnnoFreelancing[0]?.payment_status === 'PAID' ?
                                                                            shobarJnnoFreelancing[0]?.batch === '1' ?
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                    :
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/batch-2/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                            :
                                                                            null
                                                                    }
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }

                                    {
                                        purchasedLiveCourses?.length > 1 &&
                                        <div className="row justify-content-center">
                                            <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='my-3'>আপনি যে কোর্স সমূহে ভর্তি হয়েছেন</h2>
                                            {purchasedLiveCourses?.map(course => {
                                                return (
                                                    <div key={course.id} className='featured-courses col-md-4 mt-3 mb-5'>
                                                        <section>
                                                            <div style={{ border: '1px solid #dde7f3', borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}>
                                                                <img style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} src={course.image} alt={course.title} className='img-fluid' loading="lazy" />
                                                                <div className="bg-white py-4">
                                                                    <h3 style={{ fontSize: '15px', lineHeight: '24px', fontWeight: '600', color: '#354895' }} className='px-3 text-center'>{course.title}</h3>
                                                                    {/* <h4 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#b94a8f' }} className='text-center px-3 price mt-2'>
                                                                        <span style={{ color: '#354895', fontSize: '14px' }}>সময়: </span>{course.class_time}
                                                                    </h4> */}
                                                                    {/* <Countdown
                                                                        deadline={course.next_batch_eng}
                                                                        text={'কোর্স শুরু হতে সময় বাকি'}
                                                                    /> */}
                                                                </div>

                                                                <div style={{ justifyContent: 'space-between', backgroundColor: 'rgb(236,238,255)' }} className="d-flex p-3">

                                                                    {/* Web Development */}
                                                                    {
                                                                        course.name === 'Web Development' ?
                                                                            webDevelopment[0]?.payment_status === 'PAID' ?
                                                                                webDevelopment[0]?.batch === '1' ?
                                                                                    <a href={course.live_link} target='_blank' rel="noreferrer" className='see-details'
                                                                                    // onClick={() => { window.scrollTo(0, 0); }}
                                                                                    >জয়েন ক্লাস</a>
                                                                                    :
                                                                                    <button onClick={() => nextBatchAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* Digital Marketing */}
                                                                    {
                                                                        course.name === 'Digital Marketing' ?
                                                                            digitalMarketing[0]?.payment_status === 'PAID' ?
                                                                                digitalMarketing[0]?.batch === '1' ?
                                                                                    <a href={course.live_link} target='_blank' rel="noreferrer" className='see-details'
                                                                                    // onClick={() => { window.scrollTo(0, 0); }}
                                                                                    >জয়েন ক্লাস</a>
                                                                                    :
                                                                                    <button onClick={() => nextBatchAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* Video Editing */}
                                                                    {
                                                                        course.name === 'Video Editing' ?
                                                                            videoEditing[0]?.payment_status === 'PAID' ?
                                                                                videoEditing[0]?.batch === '1' ?
                                                                                    <a href={course.live_link} target='_blank' rel="noreferrer" className='see-details'
                                                                                    // onClick={() => { window.scrollTo(0, 0); }}
                                                                                    >জয়েন ক্লাস</a>
                                                                                    :
                                                                                    <button onClick={() => nextBatchAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* Graphics Design */}
                                                                    {
                                                                        course.name === 'Graphics Design' ?
                                                                            graphicsDesign[0]?.payment_status === 'PAID' ?
                                                                                graphicsDesign[0]?.batch === '1' ?
                                                                                    <a href={course.live_link} target='_blank' rel="noreferrer" className='see-details'
                                                                                    // onClick={() => { window.scrollTo(0, 0); }}
                                                                                    >জয়েন ক্লাস</a>
                                                                                    :
                                                                                    <button onClick={() => nextBatchAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* Shobar jnno freelancing */}
                                                                    {
                                                                        course.name === 'সবার জন্য ফ্রিল্যান্সিং' ?
                                                                            shobarJnnoFreelancing[0]?.payment_status === 'PAID' ?
                                                                                shobarJnnoFreelancing[0]?.batch === '1' ?
                                                                                    <a href={course.live_link} target='_blank' rel="noreferrer" className='see-details'
                                                                                    // onClick={() => { window.scrollTo(0, 0); }}
                                                                                    >জয়েন ক্লাস</a>
                                                                                    :
                                                                                    <button onClick={() => nextBatchAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='see-details'>জয়েন ক্লাস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* Class Recording and Join Class */}

                                                                    {/* Web Development */}
                                                                    {
                                                                        course.name === 'Web Development' ?
                                                                            webDevelopment[0]?.payment_status === 'PAID' ?
                                                                                webDevelopment[0]?.batch === '1' ?
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                    :
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/batch-2/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* Digital Marketing */}
                                                                    {
                                                                        course.name === 'Digital Marketing' ?
                                                                            digitalMarketing[0]?.payment_status === 'PAID' ?
                                                                                digitalMarketing[0]?.batch === '1' ?
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                    :
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/batch-2/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* Video Editing */}
                                                                    {
                                                                        course.name === 'Video Editing' ?
                                                                            videoEditing[0]?.payment_status === 'PAID' ?
                                                                                videoEditing[0]?.batch === '1' ?
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                    :
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/batch-2/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* Graphics Design */}
                                                                    {
                                                                        course.name === 'Graphics Design' ?
                                                                            graphicsDesign[0]?.payment_status === 'PAID' ?
                                                                                graphicsDesign[0]?.batch === '1' ?
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                    :
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/batch-2/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* সবার জন্য ফ্রিল্যান্সিং */}
                                                                    {
                                                                        course.name === 'সবার জন্য ফ্রিল্যান্সিং' ?
                                                                            shobarJnnoFreelancing[0]?.payment_status === 'PAID' ?
                                                                                shobarJnnoFreelancing[0]?.batch === '1' ?
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                    :
                                                                                    <button onClick={() => {
                                                                                        window.scrollTo(0, 0);
                                                                                        navigate('/course/live/video/batch-2/' + course.id)
                                                                                        // window.location.replace(course.recording_link)
                                                                                    }} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                                :
                                                                                <button onClick={() => duePayAlert()} className='class-video px-1'>ক্লাস রেকর্ডিংস</button>
                                                                            :
                                                                            null
                                                                    }
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }
                                    {
                                        purchasedLiveCourses?.length === 0 &&
                                        <div className="">
                                            <p className='text-danger text-center'>আপনি কোনো লাইভ কোর্সে ভর্তি হননি</p>
                                            {/* <div className="">
                                            <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='my-2 text-center'>
                                                <button className='btn btn-danger ms-2'>
                                                    <Link to='/dashboard/live-course' className='text-white text-decoration-none mx-auto d-block'>লাইভ কোর্সসমূহ</Link>
                                                </button>
                                            </h2>
                                        </div> */}
                                        </div>
                                    }
                                </div>
                                {/* : <p>Loading...</p>
                                 }  */}
                                <hr />
                                <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='my-3'>আমাদের অন্যানো কোর্স সমূহ</h2>
                                {
                                    otherLiveCourses.map(course => {
                                        return (
                                            <div key={course.id} className='featured-courses col-xl-3 col-md-6 col-sm-6 my-5'>
                                                <Link className='text-decoration-none' onClick={() => { window.scrollTo(0, 0); }} to={course.route}>
                                                    <div style={{ border: '1px solid #dde7f3', borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}>
                                                        <img style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} width={600} src={course.image} alt={course.title} className='img-fluid' loading="lazy" />
                                                        <div
                                                            // style={{ height: '260px' }}
                                                            className="bg-white py-4">
                                                            <h3 style={{ fontSize: '16px', lineHeight: '30px', fontWeight: '600', color: '#354895' }} className='px-3'>{course.title}
                                                                <img src={liveClass} className='img-fluid ps-2' width={40} alt="live class" loading="lazy" />
                                                                <br /> <small>- {course.course_duration} {course.name === 'সবার জন্য ফ্রিল্যান্সিং' ? "দিনের" : "মাসের"}
                                                                    <img src={live} width={30} className='img-fluid mx-2 mb-1' alt="live class" loading="lazy" />
                                                                    কোর্স</small></h3>
                                                            {/* <p style={{textAlign:'justify'}} className='px-3 text-black'>{course.short_description}</p> */}
                                                            {/* <Countdown
                                                                deadline={course.next_batch_eng}
                                                                text={'কোর্স শুরু হতে সময় বাকি'}
                                                            /> */}
                                                        </div>

                                                        <div style={{ justifyContent: 'space-between', backgroundColor: 'rgb(236,238,255)' }} className="d-flex py-3 pe-2">
                                                            <h4 style={{ fontSize: '16px', lineHeight: '27px', fontWeight: '600', color: '#069654' }} className='pt-1 ps-3 price'>
                                                                <span style={{ color: '#354895' }}></span> ৳ {course.price_per_month_bn}
                                                                {/* <strike className='ps-2 text-muted'>{course.regular_price}</strike> */}
                                                                <small style={{ color: '#354895' }}> {course.name === 'সবার জন্য ফ্রিল্যান্সিং' ? null : "প্রতি মাস"}</small>
                                                            </h4>
                                                            <button style={{ fontSize: '12px' }} onClick={() => { window.scrollTo(0, 0); }} className='see-details p-1' to={course.route}>বিস্তারিত দেখুন</button>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        );
                                    }
                                    )}
                            </div>
                        </div>
                    </div>
                    <Menu />
                </div>
            </div>
            {/* <div id="meetingSDKElement">

            </div> */}
        </div>
    );
};

export default DLiveCourse;