import React, {
    useEffect
    , useState
} from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import liveClass from '../../images/liveClass.svg';
import emptyList from '../../images/emptyList.svg';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const { logOut, user } = useAuth();
    const name = user.displayName;
    const email = user.email;
    // const image = user.photoURL;
    const [demoClasses, setDemoClasses] = useState();

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/demoClasses/email/${email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    // })
    useEffect(() => {
        fetch(`http://localhost:5000/demoClasses/email/${email}`)
            .then(res => res.json())
            .then(data => setDemoClasses(data))
        // eslint-disable-next-line
    }, [])

    return (
        <section>
            <Navbar />
            <div className="" style={{ backgroundColor: '#f3f5f9' }}>
                <div className="container py-5">

                    <h1 style={{ paddingTop: '4rem', fontSize: '32px', lineHeight: '46px', color: '#343b6d', fontWeight: '700' }} className=''>স্বাগতম, <span style={{ fontSize: '36px', lineHeight: '52px', color: '#b94a8f', fontWeight: '600' }} className=''>{name}</span></h1>
                    <h2 style={{ fontSize: '18px', lineHeight: '31px', color: '#495082', fontWeight: '500' }}>ক্লাসের খুঁটিনাটি সব জেনে নিন আপনার Skill শিখুন এর ড্যাশবোর্ডে</h2>
                    {
                        demoClasses?.length ? demoClasses.map(demoClass => (<li>{demoClass.category}</li>)) :
                            // <h1>No classes yet</h1>
                            <div className="d-flex mt-2">
                                <img src={emptyList} alt="empty class" className='img-fluid' loading="lazy" />
                                <p style={{ fontSize: '20px', lineHeight: '30px', color: '#343b6d', fontWeight: '700' }} className='pt-5 ps-4'>এখনো কোনো ক্লাস নেই</p>
                            </div>
                    }

                    <div className="row py-5 m-2">
                        <div style={{ minHeight: '600px', borderRadius: '15px' }} className="bg-white col-xl-9 col-lg-9 col-md-8 col-sm-8 mt-3">
                            <div className="d-flex mt-5 py-2 ps-4">
                                <img src={liveClass} alt="live class" className='img-fluid' loading="lazy" />
                                <h3 style={{ fontSize: '24px', lineHeight: '36px', color: '#354895', fontWeight: '600' }} className='pt-2 ps-4'>আজকের লাইভ ক্লাস</h3>
                            </div>
                            <div className="d-flex mt-2 justify-content-center">
                                <img src={emptyList} alt="empty class" className='img-fluid px-4' loading="lazy" />
                                <p style={{ fontSize: '20px', lineHeight: '30px', color: '#343b6d', fontWeight: '700' }} className='pt-5'>আজকে আপনার কোনো লাইভ ক্লাস নেই</p>
                            </div>
                        </div>

                        <div style={{ backgroundColor: 'rgb(53,72,149)', borderRadius: '15px',top:'120px',height:'320px' }} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 mt-3 position-sticky">
                            
                            <ul style={{listStyle:'none',fontSize:'18px',lineHeight:'31px', fontWeight:'500'}} className='text-white'>
                                <li className='pt-4 py-2'><Link onClick={()=>{window.scrollTo(0, 0);}} to='/dashboard' className='text-decoration-none text-white'>হোম</Link></li>
                                <li className='py-2'>লাইভ ক্লাস</li>
                                <li className='py-2'>ডেমো ক্লাস</li>
                                <li className='py-2'>রেকর্ডেড ক্লাস</li>
                                <li className='py-2'></li>
                                <li className='py-2'></li>
                            </ul>
                            <button className='btn btn-danger mx-auto d-block mt-3' onClick={logOut}>লগ আউট</button>
                        </div>

                        <div style={{ minHeight: '600px', borderRadius: '15px' }} className="bg-white col-xl-9 col-lg-9 col-md-8 col-sm-8 mt-3">
                            <div className="d-flex mt-5 py-2 ps-4">
                                <img src={liveClass} alt="live class" className='img-fluid' loading="lazy" />
                                <h3 style={{ fontSize: '24px', lineHeight: '36px', color: '#354895', fontWeight: '600' }} className='pt-2 ps-4'>আজকের লাইভ ক্লাস</h3>
                            </div>
                            <div className="d-flex mt-2 justify-content-center">
                                <img src={emptyList} alt="empty class" className='img-fluid px-4' loading="lazy" />
                                <p style={{ fontSize: '20px', lineHeight: '30px', color: '#343b6d', fontWeight: '700' }} className='pt-5'>আজকে আপনার কোনো লাইভ ক্লাস নেই</p>
                            </div>
                        </div>

                    </div>

                    {/* <h2 className='text-center mt-5'>Your email address is: <span className='text-info'>{email}</span></h2>
                <img style={{ borderRadius: '50%' }} width={100} className='mx-auto d-block mt-5' src={image} alt={name} loading="lazy" /> */}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;