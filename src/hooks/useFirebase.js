import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, sendPasswordResetEmail, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
// import {  useLocation, useNavigate } from "react-router-dom";

initializeAuthentication();

const useFirebase = () => {
    // eslint-disable-next-line
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // let navigate = useNavigate();
    // let location = useLocation();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            registerUser(result.user);
            localStorage.setItem('token', result.user.uid);
            // navigate('/dashboard')
            // window.location.replace('/dashboard')
        })
        .catch(error => {
            setError(error.message);
        })
    }

    // useEffect(()=>{
    //     if (localStorage.getItem('token')) {
    //         navigate('/dashboard')
    //     }
    //     else{
    //         navigate(location.state?.from?.pathname || "/", { replace: true })
    //     }
    // },[])

    // const handleResponse = (res, redirect) =>{

    // }

    const handleResetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
                localStorage.clear();
                window.location.reload();
            })
    }

        useEffect(() => {
            onAuthStateChanged(auth, user => {
                if (user) {
                    setUser(user);
                }
            });
            //eslint-disable-next-line
        }, [])

    const registerUser = (user)=>{
        const name = user.displayName;
        const email = user.email;
        const phone = user.phoneNumber;
        const photo = user.photoURL;
        const password = user?.password || '';
        const user_created_date = user.user_created_date;
        const from_demo = user.fromDemo;
        const from_login = user.fromLogin;

        const newUser = {name, email, phone, photo, password, user_created_date, from_demo, from_login };
        localStorage.setItem('email', newUser.email);
        // localStorage.setItem('user', JSON.stringify(newUser));
        setUser(newUser);
        fetch('https://backend-skill-shikhun.herokuapp.com/addUser',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
    }

    return {
        user,
        error,
        signInUsingGoogle,
        registerUser,
        logOut,
        onAuthStateChanged,
        getAuth,
        handleResetPassword
    }
}

export default useFirebase;