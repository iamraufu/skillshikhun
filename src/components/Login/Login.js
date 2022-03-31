// import React, { useState } from 'react';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
// import initializeAuthentication from '../../Firebase/firebase.initialize';

// initializeAuthentication();

// const Login = () => {
//     const [displayName, setDisplayName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const auth = getAuth();

//     const toggleLogin = e => {
//         setIsLoggedIn(e.target.checked);
//     }

//     const handleNameChange = e => {
//         setDisplayName(e.target.value);
//     }
//     const handleEmailChange = e => {
//         setEmail(e.target.value);
//     }
//     const handlePasswordChange = e => {
//         setPassword(e.target.value);
//     }
//     const handleRegistration = e => {
//         e.preventDefault();
//         if (password.length < 6) {
//             setError('Password Must be at least 6 characters long')
//             return;
//         }

//         if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
//             setError('Password Must contain 2 upper case');
//             return;
//         }

//         if (isLoggedIn) {
//             processLogin(email, password)
//         }
//         else {
//             registerNewUser(email, password)
//         }
//     }

//     const processLogin = (email, password) => {
//         signInWithEmailAndPassword(auth, email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 setError('');
//             })
//             .catch(error => {
//                 setError(error.message);
//             });
//     }

//     const registerNewUser = (email, password) => {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user)
//                 setError('');
//                 verifyEmail();
//                 setUserName();
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 setError(errorCode);
//                 console.log(errorCode, errorMessage);
//             });
//         console.log(displayName, email, password);
//     }

//     const verifyEmail = () => {
//         sendEmailVerification(auth.currentUser)
//             .then(result => {
//                 console.log(result);
//             })
//     }

//     const handleResetPassword = () => {
//         sendPasswordResetEmail(auth, email)
//             .then(result => {
//                 console.log(result);
//             })
//     }
//     const setUserName = () => {
//         updateProfile(auth.currentUser, {
//             displayName: displayName
//         })
//             .then(() => {
//                 console.log('User display name updated');
//             })
//     }

//     return (
//         <div className='container'>
//             <h2 className='mt-5'>
//                 {isLoggedIn ? <span className='text-success fw-bold'>Login </span> : <span className='text-warning fw-bold'>Register </span>}
//                 with Email & Password
//                 {/* Register with Email & Password */}
//             </h2>
//             <form onSubmit={handleRegistration} className='form-group'>
//                 {!isLoggedIn ? <input onBlur={handleNameChange} type='Name' className='form-control' placeholder='Name' required /> : null}
//                 <input onBlur={handleEmailChange} type='email' className='form-control mt-2' placeholder='Email' required />
//                 <input onBlur={handlePasswordChange} type='password' className='form-control mt-2' placeholder='Password' required />
//                 <p className='text-danger fw-bold'>{error}</p>

//                 <div className="form-check">
//                     <input onChange={toggleLogin} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                     <label className="form-check-label" htmlFor="flexCheckDefault">
//                         Already Registered?
//                     </label>
//                 </div>
//                 <button type='submit' className='btn btn-primary mt-2'>
//                     {isLoggedIn ? 'Login' : 'Register'}
//                     {/* Register */}
//                 </button>
//                 <button onClick={handleResetPassword} className='btn btn-outline-secondary mt-2 mx-2'>Reset Password</button>
//             </form>
//         </div>
//     );
// };

// export default Login;

import React from 'react';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import flag from '../../images/bdFlag.png';
const Navbar = React.lazy(() => import ('../Shared/Navbar/Navbar'));

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    
    return (
        <div>
            <Navbar />
            {/* <div style={{ height: '100vh', backgroundColor: 'rgb(243, 245, 249)' }} className="">
                <div className="container login-container">
               
                        <div className=" mx-auto d-block">
                            <h1 style={{ fontSize: '32px', lineHeight: '48px', color: '#323862', fontWeight: '700' }} className='pt-5 text-center'>ফ্রি রেজিস্ট্রেশন অথবা সাইন ইন করতে <br /> আপনার ব্যবহৃত মোবাইল নম্বরটি দেন</h1>
                            <div className="d-flex mt-5 mx-auto d-block justify-content-center">
                                <img src={flag} width={50} className='img-fluid' alt="flag" loading="lazy" />
                                <span style={{ fontSize: '20px', lineHeight: '30px', color: '#4b5563', fontWeight: '400', backgroundColor: 'white' }} className='pt-1 px-2'>+88</span>
                                <input className='form w-50' type="tel" name='phone' id='phone' aria-describedby='phone' autoComplete='off' maxLength='11' style={{ fontSize: '18px', lineHeight: '27px', color: '#8288b2', fontWeight: '400', backgroundColor: 'white', border: 'none', focus: 'red' }} placeholder='আপনার মােবাইল নম্বর দেন' />
                            </div>
                            <button className='submit-btn mt-5'>এগিয়ে যান</button>
                        </div>

                </div>
            </div> */}
            <button style={{marginTop:'16rem'}} className='btn btn-success mx-auto d-block' onClick={signInUsingGoogle}>Google Sign In</button>
            
        </div>
    );
};

export default Login;