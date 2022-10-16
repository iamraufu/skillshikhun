import React, { useEffect, useState } from 'react';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';

const DPaymentHistory = () => {

    const phone = localStorage.getItem('phone');
    const [payments, setPayments] = useState([]);
    const [userPhoneData, setUserPhoneData] = useState({})
    const [disabled, setDisabled] = useState(false);
    const [webDevelopment, setWebDevelopment] = useState([])
    const [digitalMarketing, setDigitalMarketing] = useState([]);
    const [videoEditing, setVideoEditing] = useState([]);
    const [graphicsDesign, setGraphicsDesign] = useState([]);
    const [shobarJnnoFreelancing, setShobarJnnoFreelancing] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://skillshikhun.herokuapp.com/api/get-payment/Live/${phone}`);
            const data = await res.json();
            setPayments(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        fetch(`https://skillshikhun.herokuapp.com/users/userBy/phone/${phone}`)
            .then(res => res.json())
            .then(data => setUserPhoneData(data))
    }, [phone])

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

    const proceedToPayment = async (data) => {
        setDisabled(true);

        // Aamar Pay Payment Gateway
        // await fetch('https://sandbox.aamarpay.com/jsonpost.php', {   // test
        await fetch('https://secure.aamarpay.com/jsonpost.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: JSON.stringify({
                store_id: "skillshikhun",
                // store_id: "aamarpaytest", // test
                signature_key: "7445cc98363b6b9cae4af766ef0f0186",
                // signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",  // test
                cus_name: `${userPhoneData.name}`,
                cus_email: `${userPhoneData.email}`,
                cus_phone: `${userPhoneData.phone}`,
                cus_add1: "Skill Shikhun, Dhaka, Bangladesh",
                cus_add2: "Dhaka",
                cus_city: "Dhaka",
                cus_country: "Bangladesh",
                amount: `${data[0].amount}`,
                // amount: 1,  // test
                tran_id: `SkillShikhun_${Math.floor(Math.random() * 900000 + 100000)}`,
                currency: "BDT",
                success_url: `https://skillshikhun.herokuapp.com/api/make-payment`,
                // success_url: `http://localhost:5000/api/make-payment`,   // test
                fail_url: `https://skillshikhun.herokuapp.com/api/payment-failure`,
                cancel_url: `https://skillshikhun.com/dashboard/payment-history`,
                desc: `${data[0].course} Course Installment`,
                type: "json",
                opt_a: `${data[0].course}`,
                opt_b: "1",  // batch no (should be modified later batch no)
                opt_c: `${data[data.length - 1]?.remaining_course_fee - data[0].amount}`
            })
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data.payment_url);
            })
    }

    return (
        <div className="">
            <DNavbar />
            <div className='container-fluid mt-5'>
                <div style={{ marginTop: '5rem' }} className="row">

                    {/* left sidebar */}
                    <div className="col-xl-2 col-lg-3 col-md-4 d-none d-lg-block position-sticky">
                        <Sidebar />
                    </div>

                    {/* right container */}
                    <div style={{ minHeight: '800px', backgroundColor: '#f3f5f9', borderRadius: '15px', marginBottom: '5rem' }} className="col-xl-9 col-lg-9 col-md-12 pb-5">

                        {
                            payments.length === 0 && <p className='text-center fw-bold mt-5 text-danger'>কোনো পেমেন্ট ইতিহাস পাওয়া যায় নি</p>
                        }

                        {/* Web Development */}
                        {
                            webDevelopment.length > 0 &&
                            <div id='web-development_payment_history' className="row justify-content-center align-items-center mt-5 p-3">
                                <h2 style={{ fontSize: '20px', lineHeight: '24px', color: '#343b6d', fontWeight: '700' }}> <span style={{ color: '#b94a8f' }}>ওয়েব ডেভেলপমেন্ট</span> কোর্সের পেমেন্ট ইতিহাস</h2>
                                <div style={{ border: '1px solid lightgrey', borderRadius: '10px', minHeight: '120px' }} className="col-sm-3 p-3 bg-white m-3">
                                    {/* Baki Taka dewar button*/}
                                    {
                                        parseInt(webDevelopment[webDevelopment.length - 1]?.remaining_course_fee) === 0 ?
                                            <h2 style={{ fontSize: '20px' }} className='text-center fw-bold text-success pt-3'>আপনার কোনো ফি<br />বাকি নেই</h2>
                                            :
                                            <div>
                                                <h2 style={{ fontSize: '14px', color: '#696866' }} className='text-center'><span style={{ fontSize: '24px', fontWeight: '700', color: '#b94a8f' }}>{parseInt(webDevelopment[0].amount)} টাকা</span>
                                                    <br />
                                                </h2>
                                                <button onClick={() => proceedToPayment(webDevelopment)} className='btn btn-success mx-auto d-block px-5 btn-sm py-2' disabled={disabled}>পরিশোধ করুন</button>
                                            </div>
                                    }
                                </div>

                                <div style={{ border: '1px solid lightgrey', borderRadius: '10px', minHeight: '120px' }} className="d-flex justify-content-center align-items-center col-sm-3 p-3 bg-white m-3">
                                    {/* Mot dewa taka */}
                                    <h2 style={{ fontSize: '14px', color: '#696866' }} className='text-center'><span style={{ fontSize: '24px', fontWeight: '700', color: '#425ca2' }}>{webDevelopment.reduce((a, b) => { return a + parseInt(b.amount); }, 0)} টাকা</span>
                                        <br />পরিশোধ করেছেন
                                    </h2>
                                </div>

                                <div style={{ border: '1px solid lightgrey', borderRadius: '10px', minHeight: '120px' }} className="d-flex justify-content-center align-items-center col-sm-3 p-3 bg-white m-3">
                                    {/* Mot course er dam */}
                                    <h2 style={{ fontSize: '14px', color: '#696866' }} className='text-center'><span style={{ fontSize: '24px', fontWeight: '700' }}>{parseInt(webDevelopment[0].amount) + parseInt(webDevelopment[0].remaining_course_fee)} টাকা</span>
                                        <br />কোর্সের মূল্য
                                    </h2>
                                </div>
                            </div>
                        }

                        {
                            webDevelopment.length > 0 &&
                            webDevelopment.map(purchased =>
                                <div key={purchased._id} style={{ border: '1px solid lightgrey', borderRadius: '10px' }} className="p-3 col-lg-4 bg-white mt-3">
                                    <h2 style={{ fontSize: '11px', color: '#050400' }}>{purchased.purchased.slice(0, 10)}</h2>
                                    <h2 style={{ fontSize: '11px', color: '#050400' }}>{purchased.payment_mode} - {purchased.card_number}</h2>
                                    <h3 style={{ fontSize: '15px', color: '#696866' }}>{purchased.course}</h3>
                                    <h5 style={{ fontSize: '18px', color: '#696866' }}>পরিশোধ করেছেন: <b>{parseInt(purchased.amount)} টাকা</b></h5>
                                </div>
                            )}

                        {/* Video Editing */}
                        {
                            videoEditing.length > 0 &&
                            <div id='video-editing_payment_history' className="row justify-content-center align-items-center mt-5 p-3">
                                <h2 style={{ fontSize: '20px', lineHeight: '24px', color: '#343b6d', fontWeight: '700' }}> <span style={{ color: '#b94a8f' }}>ভিডিও এডিটিং</span> কোর্সের পেমেন্ট ইতিহাস</h2>
                                <div style={{ border: '1px solid lightgrey', borderRadius: '10px', minHeight: '120px' }} className="col-sm-3 p-3 bg-white m-3">
                                    {/* Baki taka dewar button*/}
                                    {
                                        parseInt(videoEditing[videoEditing.length - 1]?.remaining_course_fee) === 0 ?
                                            <h2 style={{ fontSize: '20px' }} className='text-center fw-bold text-success pt-3'>আপনার কোনো ফি<br />বাকি নেই</h2>
                                            :
                                            <div>
                                                <h2 style={{ fontSize: '14px', color: '#696866' }} className='text-center'><span style={{ fontSize: '24px', fontWeight: '700', color: '#b94a8f' }}>{parseInt(videoEditing[0].amount)} টাকা</span>
                                                    <br />
                                                </h2>
                                                <button onClick={() => proceedToPayment(videoEditing)} className='btn btn-success mx-auto d-block px-5 btn-sm' disabled={disabled}>পরিশোধ করুন</button>
                                            </div>
                                    }
                                </div>

                                <div style={{ border: '1px solid lightgrey', borderRadius: '10px', minHeight: '120px' }} className="d-flex justify-content-center align-items-center col-sm-3 p-3 bg-white m-3">
                                    {/* Mot dewa taka */}
                                    <h2 style={{ fontSize: '14px', color: '#696866' }} className='text-center'><span style={{ fontSize: '24px', fontWeight: '700', color: '#425ca2' }}>{videoEditing.reduce((a, b) => { return a + parseInt(b.amount); }, 0)} টাকা</span>
                                        <br />পরিশোধ করেছেন
                                    </h2>
                                </div>

                                <div style={{ border: '1px solid lightgrey', borderRadius: '10px', minHeight: '120px' }} className="d-flex justify-content-center align-items-center col-sm-3 p-3 bg-white m-3">
                                    {/* Mot course er dam */}
                                    <h2 style={{ fontSize: '14px', color: '#696866' }} className='text-center'><span style={{ fontSize: '24px', fontWeight: '700' }}>{parseInt(videoEditing[0].amount) + parseInt(videoEditing[0].remaining_course_fee)} টাকা</span>
                                        <br />কোর্সের মূল্য
                                    </h2>
                                </div>
                            </div>
                        }

                        {
                            videoEditing.length > 0 &&
                            videoEditing.map(purchased =>
                                <div key={purchased._id} style={{ border: '1px solid lightgrey', borderRadius: '10px' }} className="p-3 col-lg-4 bg-white mt-3">
                                    <h2 style={{ fontSize: '11px', color: '#050400' }}>{purchased.purchased.slice(0, 10)}</h2>
                                    <h2 style={{ fontSize: '11px', color: '#050400' }}>{purchased.payment_mode} - {purchased.card_number}</h2>
                                    <h3 style={{ fontSize: '15px', color: '#696866' }}>{purchased.course}</h3>
                                    <h5 style={{ fontSize: '18px', color: '#696866' }}>পরিশোধ করেছেন: <b>{parseInt(purchased.amount)} টাকা</b></h5>
                                </div>
                            )}

                        {/* Digital Marketing */}
                        {
                            digitalMarketing.length > 0 &&
                            <div id='digital-marketing_payment_history' className="row justify-content-center align-items-center mt-5 p-3">
                                <h2 style={{ fontSize: '20px', lineHeight: '24px', color: '#343b6d', fontWeight: '700' }}> <span style={{ color: '#b94a8f' }}>ডিজিটাল মার্কেটিং</span> কোর্সের পেমেন্ট ইতিহাস</h2>
                                <div style={{ border: '1px solid lightgrey', borderRadius: '10px', minHeight: '120px' }} className="col-sm-3 p-3 bg-white m-3">
                                    {/* baki taka */}
                                    {
                                        parseInt(digitalMarketing[digitalMarketing.length - 1]?.remaining_course_fee) === 0 ?
                                            <h2 style={{ fontSize: '20px' }} className='text-center fw-bold text-success pt-3'>আপনার কোনো ফি<br />বাকি নেই</h2>
                                            :
                                            <div>
                                                <h2 style={{ fontSize: '14px', color: '#696866' }} className='text-center'><span style={{ fontSize: '24px', fontWeight: '700', color: '#b94a8f' }}>{parseInt(digitalMarketing[0].amount)} টাকা</span>
                                                    <br />
                                                </h2>
                                                <button onClick={() => proceedToPayment(digitalMarketing)} className='btn btn-success mx-auto d-block px-5 btn-sm' disabled={disabled}>পরিশোধ করুন</button>
                                            </div>
                                    }
                                </div>

                                <div style={{ border: '1px solid lightgrey', borderRadius: '10px', minHeight: '120px' }} className="d-flex justify-content-center align-items-center col-sm-3 p-3 bg-white m-3">
                                    {/* mot dewa taka */}
                                    <h2 style={{ fontSize: '14px', color: '#696866' }} className='text-center'><span style={{ fontSize: '24px', fontWeight: '700', color: '#425ca2' }}>{digitalMarketing.reduce((a, b) => { return a + parseInt(b.amount); }, 0)} টাকা</span>
                                        <br />পরিশোধ করেছেন
                                    </h2>
                                </div>

                                <div style={{ border: '1px solid lightgrey', borderRadius: '10px', minHeight: '120px' }} className="d-flex justify-content-center align-items-center col-sm-3 p-3 bg-white m-3">
                                    {/* Mot course er dam */}
                                    <h2 style={{ fontSize: '14px', color: '#696866' }} className='text-center'><span style={{ fontSize: '24px', fontWeight: '700' }}>{parseInt(digitalMarketing[0].amount) + parseInt(digitalMarketing[0].remaining_course_fee)} টাকা</span>
                                        <br />কোর্সের মূল্য
                                    </h2>
                                </div>
                            </div>
                        }

                        {
                            digitalMarketing.length > 0 &&
                            digitalMarketing.map(purchased =>
                                <div key={purchased._id} style={{ border: '1px solid lightgrey', borderRadius: '10px' }} className="p-3 col-lg-4 bg-white mt-3">
                                    <h2 style={{ fontSize: '11px', color: '#050400' }}>{purchased.purchased.slice(0, 10)}</h2>
                                    <h2 style={{ fontSize: '11px', color: '#050400' }}>{purchased.payment_mode} - {purchased.card_number}</h2>
                                    <h3 style={{ fontSize: '15px', color: '#696866' }}>{purchased.course}</h3>
                                    <h5 style={{ fontSize: '18px', color: '#696866' }}>পরিশোধ করেছেন: <b>{parseInt(purchased.amount)} টাকা</b></h5>
                                </div>
                            )}

                        {/* Graphics Design */}
                        {
                            graphicsDesign.length > 0 &&
                            <div id='graphics-design_payment_history' className="row justify-content-center align-items-center mt-5 p-3">
                                <h2 style={{ fontSize: '20px', lineHeight: '24px', color: '#343b6d', fontWeight: '700' }}> <span style={{ color: '#b94a8f' }}>গ্রাফিক্স ডিজাইন</span> কোর্সের পেমেন্ট ইতিহাস</h2>
                                <div style={{ border: '1px solid lightgrey', borderRadius: '10px', minHeight: '120px' }} className="col-sm-3 p-3 bg-white m-3">
                                    {
                                        parseInt(graphicsDesign[graphicsDesign.length - 1]?.remaining_course_fee) === 0 ?
                                            <h2 style={{ fontSize: '20px' }} className='text-center fw-bold text-success pt-3'>আপনার কোনো ফি<br />বাকি নেই</h2>
                                            :
                                            <div>
                                                <h2 style={{ fontSize: '14px', color: '#696866' }} className='text-center'><span style={{ fontSize: '24px', fontWeight: '700', color: '#b94a8f' }}>{parseInt(graphicsDesign[0].amount)} টাকা</span>
                                                    <br />
                                                </h2>
                                                <button onClick={() => proceedToPayment(graphicsDesign)} className='btn btn-success mx-auto d-block px-5 btn-sm' disabled={disabled}>পরিশোধ করুন</button>
                                            </div>
                                    }
                                </div>

                                <div style={{ border: '1px solid lightgrey', borderRadius: '10px', minHeight: '120px' }} className="d-flex justify-content-center align-items-center col-sm-3 p-3 bg-white m-3">
                                    <h2 style={{ fontSize: '14px', color: '#696866' }} className='text-center'><span style={{ fontSize: '24px', fontWeight: '700', color: '#425ca2' }}>{graphicsDesign.reduce((a, b) => { return a + parseInt(b.amount); }, 0)} টাকা</span>
                                        <br />পরিশোধ করেছেন
                                    </h2>
                                </div>

                                <div style={{ border: '1px solid lightgrey', borderRadius: '10px', minHeight: '120px' }} className="d-flex justify-content-center align-items-center col-sm-3 p-3 bg-white m-3">
                                    <h2 style={{ fontSize: '14px', color: '#696866' }} className='text-center'><span style={{ fontSize: '24px', fontWeight: '700' }}>{parseInt(graphicsDesign[0].amount) + parseInt(graphicsDesign[0].remaining_course_fee)} টাকা</span>
                                        <br />কোর্সের মূল্য
                                    </h2>
                                </div>
                            </div>
                        }

                        {
                            graphicsDesign.length > 0 &&
                            graphicsDesign.map(purchased =>
                                <div key={purchased._id} style={{ border: '1px solid lightgrey', borderRadius: '10px' }} className="p-3 col-lg-4 bg-white mt-3">
                                    <h2 style={{ fontSize: '11px', color: '#050400' }}>{purchased.purchased.slice(0, 10)}</h2>
                                    <h2 style={{ fontSize: '11px', color: '#050400' }}>{purchased.payment_mode} - {purchased.card_number}</h2>
                                    <h3 style={{ fontSize: '15px', color: '#696866' }}>{purchased.course}</h3>
                                    <h5 style={{ fontSize: '18px', color: '#696866' }}>পরিশোধ করেছেন: <b>{parseInt(purchased.amount)} টাকা</b></h5>
                                </div>
                            )
                        }

                        {/* Shobar Jnno Freelancing */}
                        {
                            shobarJnnoFreelancing.length > 0 &&
                            <div id='shobar-jnno-freelancing_payment_history' className="row justify-content-center align-items-center mt-5 p-3">
                                <h2 style={{ fontSize: '20px', lineHeight: '24px', color: '#343b6d', fontWeight: '700' }}> <span style={{ color: '#b94a8f' }}>সবার জন্য ফ্রিল্যান্সিং</span> কোর্সের পেমেন্ট ইতিহাস</h2>
                            </div>
                        }

                        {
                            shobarJnnoFreelancing.length > 0 &&
                            shobarJnnoFreelancing.map(purchased =>
                                <div key={purchased._id} style={{ border: '1px solid lightgrey', borderRadius: '10px' }} className="p-3 col-lg-4 bg-white">
                                    <h2 style={{ fontSize: '11px', color: '#050400' }}>{purchased.purchased.slice(0, 10)}</h2>
                                    <h2 style={{ fontSize: '11px', color: '#050400' }}>{purchased.payment_mode} - {purchased.card_number}</h2>
                                    <h3 style={{ fontSize: '15px', color: '#696866' }}>{purchased.course}</h3>
                                    <h5 style={{ fontSize: '18px', color: '#696866' }}>পরিশোধ করেছেন: <b>{parseInt(purchased.amount)} টাকা</b></h5>
                                </div>
                            )}

                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default DPaymentHistory;