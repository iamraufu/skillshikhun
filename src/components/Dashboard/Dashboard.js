import React, {
    useEffect
    , useState
} from 'react';
// import Navbar from '../Shared/Navbar/Navbar';
import './Dashboard.css';
// import useAuth from '../../hooks/useAuth';
// import liveClass from '../../images/liveClass.svg';
// import emptyList from '../../images/emptyList.svg';
import live from '../../images/dashboard/live.svg';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import free_class from '../../images/dashboard/free_class.svg';

const Dashboard = () => {

    // const { logOut } = useAuth();
    const phone = localStorage.getItem('phone');
    const [userPhoneData, setUserPhoneData] = useState({})
    const [demoClasses, setDemoClasses] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://skillshikhun.herokuapp.com/users/phone/${phone}`);
            const data = await res.json();
            setUserPhoneData(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://skillshikhun.herokuapp.com/demoClasses/phone/${phone}`);
            const data = await res.json();
            setDemoClasses(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://skillshikhun.herokuapp.com/orders/user/phone/${phone}`);
            const data = await res.json();
            setCourses(data);
        }
        fetchData();
    }, [phone])


    return (
        <section className='dashboard-container'>

            <div className="d-flex">
                <div className="col-sm-1"></div>
                <div className="col-sm-2">
                    <Sidebar />
                </div>
                <div className="col-sm-8">
                    <div style={{ backgroundColor: '#f3f5f9', minHeight: '750px', borderRadius: '15px' }} className="mt-5">
                        <div className="user-info mx-5 pt-3">
                            {
                                userPhoneData?.phone ?
                                    <h1 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className=''>স্বাগতম, <span style={{ fontSize: '24px', lineHeight: '36px', color: '#b94a8f', fontWeight: '600' }}>{userPhoneData.name}</span></h1>
                                    :
                                    <h1 style={{ paddingTop: '4rem', fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className=''><div className="spinner-border" role="status">
                                        <span className="visually-hidden"></span>
                                    </div> লোড হচ্ছে ...<span style={{ fontSize: '24px', lineHeight: '36px', color: '#b94a8f', fontWeight: '600' }}></span></h1>
                            }
                        </div>

                        <h2 style={{ fontSize: '18px', lineHeight: '31px', color: '#495082', fontWeight: '500' }} className='mx-5'>
                            ক্লাসের বিস্তারিত সব জেনে নিন আপনার <span style={{ color: '#653dae' }} className='fw-bold'>Skill শিখুন</span> এর ড্যাশবোর্ডে</h2>

                            <div style={{ borderRadius: '15px' }} className="ms-5 bg-white col-sm-9 py-3 mt-3">
                            <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='my-2 text-center'>
                                <img src={live} className='img-fluid me-3' width={40} alt="Free Class" />
                                আপনার কোর্সসমূহ</h2>
                                <p className='ms-3 text-danger'>আপনি কোনো কোর্সে ভর্তি হননি</p>

                            {
                                courses?.length > 0 ?
                                    <div className="">
                                        {courses.map((course, index) =>
                                                    <div key={index}>
                                                        <h2>{course.name}</h2>
                                                    </div>
                                                )}
                                    </div> :
                                    <div className="ms-3">
                                        
                                        <div className="">
                                            <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='my-2 text-center'>
                                            
                                        <button className='btn btn-danger ms-2'><Link to='/dashboard/live-course' className='text-white text-decoration-none'>লাইভ কোর্সসমূহ</Link></button></h2>
                                        </div>

                                        <div className="">
                                            <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='my-2 text-center'>
                                            <div className="d-flex justify-content-center">
                                            <div className="col-sm-2"><hr /></div>
                                            <div className="mx-2"><p className='fs-6'>অথবা</p></div>
                                            <div className="col-sm-2"><hr /></div>
                                            </div>
                                        
                                        <button className='btn btn-warning ms-2'><Link to='/dashboard/video-course' className='text-black text-decoration-none'>ভিডিও কোর্সসমূহ</Link></button></h2>
                                        </div>

                                    </div>
                            }
                        </div>

                        <div style={{ borderRadius: '15px' }} className="ms-5 bg-white col-sm-9 mt-5">
                            <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='my-2 text-center'>
                                <img src={free_class} className='img-fluid me-3' width={30} alt="Free Class" />
                                আপনার ফ্রি ক্লাস সমূহ</h2>

                            {
                                demoClasses?.length > 0 ?
                                    <div className="table-responsive px-3">
                                        <table className='table table-striped text-center'>
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>কোর্সের নাম</th>
                                                    <th>তারিখ</th>
                                                    <th>সময়</th>
                                                    <th>ক্লাস লিংক</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {demoClasses.map((demoClass, index) =>
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{demoClass.category}</td>
                                                        <td>{demoClass.class_date}</td>
                                                        <td>{demoClass.class_time}</td>
                                                        <td><button className='btn btn-success'>জয়েন ক্লাস</button></td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div> :
                                    <div className="ms-3 d-flex justify-content-center">
                                        <p className='mt-2 text-center'>আপনি কোনো ফ্রি ক্লাস রেজিস্ট্রেশন করেননি | ৩টি ফ্রি ক্লাস পেতে এখানে ক্লিক করুন</p>
                                        <button className='btn btn-info text-white ms-2'><Link to='/dashboard/free-class' className='text-white text-decoration-none'>ফ্রি ক্লাস</Link></button>
                                    </div>
                            }
                            <p className='ms-3 py-3'>এছাড়াও অন্য কোর্স এর ফ্রি ক্লাস রেজিস্ট্রেশন এর জন্য এইখানে যান <Link to='/dashboard/free-class'><button className='btn btn-primary'>ফ্রি ক্লাস</button></Link></p>
                        </div>

                        
                    </div>
                </div>
                <div className="col-sm-1"></div>
            </div>
        </section>
    );
};

export default Dashboard;