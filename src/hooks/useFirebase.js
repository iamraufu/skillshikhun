import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, sendPasswordResetEmail, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            // console.log(result);
            setUser(result.user);
            registerUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleResetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                // console.log(result);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
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

        const newUser = {name,email,phone,photo,password};

        fetch('https://skillshikhun.herokuapp.com/addUser',{
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