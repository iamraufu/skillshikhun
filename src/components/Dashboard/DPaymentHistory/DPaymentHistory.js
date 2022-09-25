import React, { useEffect, useState } from 'react';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';
// import courseData from '../../../data/course/courseData';

const DPaymentHistory = () => {

    const phone = localStorage.getItem('phone');
    const [liveCourses, setLiveCourses] = useState([]);
    const [userPhoneData, setUserPhoneData] = useState({})
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://skillshikhun.herokuapp.com/api/get-payment/Live/${phone}`);
            const data = await res.json();
            setLiveCourses(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        fetch(`https://skillshikhun.herokuapp.com/users/phone/${phone}`)
            .then(res => res.json())
            .then(data => setUserPhoneData(data))
    }, [phone])

    const handleClick = (data) => {
        // document.getElementById('top_payment_history').style.display = 'none';
        proceedToPayment(data)
    }

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
                amount: `${parseInt(data.remaining_course_fee)}`,
                // amount: 1,  // test
                tran_id: `SkillShikhun_${Math.floor(Math.random() * 900000 + 100000)}`,
                currency: "BDT",
                success_url: `https://skillshikhun.herokuapp.com/api/make-payment`,
                // success_url: `http://localhost:5000/api/make-payment`,   // test
                fail_url: `https://skillshikhun.herokuapp.com/api/payment-failure`,
                cancel_url: `https://skillshikhun.com/dashboard/payment-history`,
                desc: `${data.course} Course`,
                type: "json",
                opt_a: `${data.course}`,
                opt_b: `${data.type}`,
                opt_c: `0`,
                opt_d: ``
            })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.removeItem('code');
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
                            liveCourses.length === 0 ?
                                <p className='text-center fw-bold mt-5 text-danger'>আপনার কোনো পেমেন্ট ইতিহাস পাওয়া যায় নি</p>
                                :
                                liveCourses.map(purchased =>
                                    <div className='mt-5'>
                                        <h2 style={{ fontSize: '20px', lineHeight: '24px', color: '#343b6d', fontWeight: '700' }}>আপনার <span style={{ color: '#b94a8f' }}>{purchased.course}</span> কোর্সের পেমেন্ট ইতিহাস</h2>
                                        <div id='top_payment_history' key={purchased._id} className="row justify-content-center align-items-center mb-5">
                                            <div style={{ border: '1px solid lightgrey', borderRadius: '10px', minHeight: '120px' }} className="col-sm-3 p-3 bg-white m-3">
                                                <h2 style={{ fontSize: '14px', color: '#696866' }} className='text-center'><span style={{ fontSize: '24px', fontWeight: '700', color: '#b94a8f' }}>{parseInt(purchased.remaining_course_fee)} টাকা</span>
                                                    <br />বাকি
                                                </h2>
                                                {
                                                    parseInt(purchased.remaining_course_fee) === 0 ?
                                                        <button className='btn btn-secondary mx-auto d-block px-5' disabled={true}>Pay Now</button>
                                                        :
                                                        <button onClick={() => handleClick(purchased)} className='btn btn-success mx-auto d-block px-5' disabled={disabled}>Pay Now</button>
                                                }
                                            </div>

                                            <div style={{ border: '1px solid lightgrey', borderRadius: '10px', minHeight: '120px' }} className="d-flex justify-content-center align-items-center col-sm-3 p-3 bg-white m-3">
                                                <h2 style={{ fontSize: '14px', color: '#696866' }} className='text-center'><span style={{ fontSize: '24px', fontWeight: '700', color: '#425ca2' }}>{parseInt(purchased.amount)} টাকা</span>
                                                    <br />পরিশোধ
                                                </h2>
                                            </div>

                                            <div style={{ border: '1px solid lightgrey', borderRadius: '10px', minHeight: '120px' }} className="d-flex justify-content-center align-items-center col-sm-3 p-3 bg-white m-3">
                                                <h2 style={{ fontSize: '14px', color: '#696866' }} className='text-center'><span style={{ fontSize: '24px', fontWeight: '700' }}>{parseInt(purchased.amount) + parseInt(purchased.remaining_course_fee)} টাকা</span>
                                                    <br />মোট
                                                </h2>
                                            </div>
                                        </div>

                                        <div style={{ border: '1px solid lightgrey', borderRadius: '10px' }} key={purchased._id} className="p-3 col-lg-4 bg-white">
                                            <h2 style={{ fontSize: '11px', color: '#050400' }}>{purchased.purchased.slice(0, 10)}</h2>
                                            <h2 style={{ fontSize: '11px', color: '#050400' }}>{purchased.payment_mode} - {purchased.card_number}</h2>

                                            <h3 style={{ fontSize: '15px', color: '#696866' }}>{purchased.course}</h3>

                                            <h5 style={{ fontSize: '18px', color: '#696866' }}>পরিশোধ: <b>{parseInt(purchased.amount)} টাকা</b></h5>

                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default DPaymentHistory;