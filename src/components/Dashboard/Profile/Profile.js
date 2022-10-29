import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import DNavbar from '../DNavbar/DNavbar';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import update from '../../../images/dashboard/update.svg';
import userPhoto from '../../../images/dashboard/user.svg';
import logout from '../../../images/dashboard/logout.svg';

const Profile = () => {

    const { logOut } = useAuth();

    const phone = localStorage.getItem('phone');
    const name = JSON.parse(localStorage.getItem('name'));

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://api-skillshikhun.herokuapp.com/users/userBy/phone/${phone}`)
            .then(res => res.json())
            .then(data => setUser(data))
            // eslint-disable-next-line 
    }, [])

    // eslint-disable-next-line 
    const [hour, setHour] = useState(null);

    useEffect(() => {
        const getHour = () => {
            const date = new Date();
            const hour = date.getHours();
            setHour(hour);
        }
        getHour();
    }, [])

    // useEffect(()=>{
    // if(hour >= 12){
    //     Swal.fire({
    //         icon: 'info',
    //         title: 'Good Afternoon',
    //         text: `${name}`,
    //         showConfirmButton: false,
    //         timer: 1500
    //     })
    // }else if(hour < 12){
    //     Swal.fire({
    //         icon: 'info',
    //         title: 'Good Morning',
    //         text: `${name}`,
    //         showConfirmButton: false,
    //         timer: 1500
    //     })
    // }
    // },[])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch(`https://api-skillshikhun.herokuapp.com/user/${user._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                data.status === true ?
                    Swal.fire({
                        icon: 'success',
                        title: 'সফল হয়েছে!',
                        text: 'আপডেট সম্পন্ন হয়েছে!',
                    }) :
                    Swal.fire({
                        icon: 'error',
                        title: 'ব্যর্থ!',
                        text: 'আপডেট হয়নি!',
                    })
            }).catch(err => Swal.fire({
                icon: 'error',
                title: 'ব্যর্থ!',
                text: `${err}!`,
            }))
        // navigate('/dashboard/profile')
        document.getElementById('update_form').style.display = 'none';
        setTimeout(() => {
            window.location.reload()
        }, 1500)
    }

    const clickHandler = () => {
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //     if (result.value) {
        //         Swal.fire(
        //             'Deleted!',
        //             'Your file has been deleted.',
        //             'success'
        //         )
        //         logOut();
        //     }
        // })
        // if display block then hide it else show it
        document.getElementById('update_form').style.display === 'none' ? 
        document.getElementById('update_form').style.display = 'block' : 
        document.getElementById('update_form').style.display = 'none'
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
                    <div style={{ minHeight: '800px', backgroundColor: '#f3f5f9', borderRadius: '15px', marginBottom: '5rem' }} className="col-xl-9 col-lg-9 col-md-12 py-5">
                        <div style={{ backgroundColor: 'white', boxShadow: '0 5px 15px #c4c4c44d', maxWidth: '500px', borderRadius: '15px' }} className="mt-3 p-4 mx-auto">

                            <div className="d-flex justify-content-between">
                                <button id='update_btn' onClick={() => clickHandler()} className='btn'>
                                    <img src={update} width={20} alt="update" /> আপডেট
                                </button>
                                <button onClick={() => logOut()} className='btn'><img src={logout} width={18} alt="update" /> লগ আউট</button>
                            </div>

                            {
                                user?.photo ?
                                    <img width={100} style={{ borderRadius: '50%' }} className='mx-auto d-block' src={user.photo} alt={user.name} />
                                    :
                                    <img width={100} style={{ borderRadius: '50%' }} className='mx-auto d-block' src={userPhoto} alt='user ' />
                            }

                            {
                                user?.email ?
                                    <div className="">
                                        {/* {
                                            hour < 18 && <h1 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='text-center'>{hour >= 0 && hour < 12 ? "সুপ্রভাত" : "শুভ মধ্যাহ্ন"}, <span style={{ color: '#b94a8f' }}>{user.name}</span>!</h1>
                                        }
                                        {
                                            hour > 12 && <h1 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700' }} className='text-center'>{hour > 18 && hour < 24 ? "শুভ সন্ধ্যা" : "শুভ রাত্রি"}, <span style={{ color: '#b94a8f' }}>{user.name}</span>!</h1>
                                        } */}

                                        <h3 style={{ fontSize: '18px', lineHeight: '24px', color: '#343b6d', fontWeight: '700' }} className='text-center mt-3'>নাম: <span style={{ color: '#b94a8f' }}>{user?.name}</span></h3>
                                        <h3 style={{ fontSize: '18px', lineHeight: '24px', color: '#343b6d', fontWeight: '700' }} className='text-center'>মোবাইল নাম্বার: <span style={{ color: '#b94a8f' }}>{user?.phone}</span></h3>
                                        <h3 style={{ fontSize: '18px', lineHeight: '24px', color: '#343b6d', fontWeight: '700' }} className='text-center'>ইমেইল: <span style={{ color: '#b94a8f' }}>{user?.email}</span></h3>

                                    </div>
                                    :
                                    <div className="">
                                        <h3 style={{ fontSize: '18px', lineHeight: '24px', color: '#343b6d', fontWeight: '700' }} className='text-center mt-3'>নাম: <span style={{ color: '#b94a8f' }}>{name}</span></h3>
                                        <h3 style={{ fontSize: '18px', lineHeight: '24px', color: '#343b6d', fontWeight: '700' }} className='text-center'>মোবাইল নাম্বার: <span style={{ color: '#b94a8f' }}>{phone}</span></h3>
                                        <h3 style={{ fontSize: '18px', lineHeight: '24px', color: '#343b6d', fontWeight: '700' }} className='text-center'>ইমেইল: <span style={{ color: '#b94a8f' }}>লোড হচ্ছে...</span></h3>
                                    </div>
                                // <div style={{ position: 'absolute', height: '100px', width: '100px', top: '50%', left: '50%', marginLeft: '-50px', marginTop: '-50px' }}>
                                //     <img src={logo} id='breathing' width={100} height={100} className='img-fluid' alt="logo of Skill Shikhun" />
                                // </div>
                            }
                            {/* <button id='update_btn' onClick={() => clickHandler()} className="btn btn-secondary mx-auto d-block mt-3">আপডেট</button> */}
                        </div>

                        {
                            user?.email && <div id='update_form' style={{ display: 'none', maxWidth: '500px' }} className="mx-auto">
                                <h3 style={{ fontSize: '18px', lineHeight: '24px', color: '#343b6d', fontWeight: '700' }} className='text-center mt-5'>আপনার প্রোফাইল আপডেট করুন</h3>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group mt-2">
                                        <label htmlFor="name" className='p-1'>আপনার নাম</label>
                                        <input type="text" defaultValue={user?.name} className="form-control p-2" {...register("name")} />
                                    </div>

                                    <div className="form-group mt-2">
                                        <label htmlFor="photo" className='p-1'>ইন্টারনেট এর যেকোনো জায়গা থেকে আপনার ইমেজ লিংক কপি করে বসান</label>
                                        <input type="text" defaultValue={user?.photo} placeholder='https://' className="form-control p-2" {...register("photo")} />
                                    </div>

                                    <div className="form-group mt-2">
                                        <label htmlFor="phone" className='p-1'>আপনার মোবাইল নাম্বার</label>
                                        <input type="phone" defaultValue={user?.phone} className="form-control p-2" disabled {...register("phone")} />
                                    </div>

                                    <div className="form-group mt-2">
                                        <label htmlFor="email" className='p-1'>আপনার ইমেইল</label>
                                        <input type="email" defaultValue={user?.email} className="form-control p-2" disabled {...register("email")} />
                                    </div>

                                    <div className="form-group mt-2">
                                        <label htmlFor="password" className='p-1'>আপনার পাসওয়ার্ড</label>
                                        <input type="password" defaultValue={user?.password} className="form-control p-2" {...register("password")} />
                                    </div>

                                    <input className='btn btn-dark p-2 mt-2 mx-auto d-block' type="submit" value='Submit' />
                                </form>
                            </div>
                        }
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default Profile;