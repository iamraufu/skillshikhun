import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
// import Swal from 'sweetalert2';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    //eslint-disable-next-line
    const [email, setEmail] = useState('');
    //eslint-disable-next-line
    const [password, setPassword] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const processLogin = (data) => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                console.log("done")

            })
            .catch(error => {
                setError(error.message);
            });
    }

    const handleResetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                console.log(result);
                // Swal.fire(
                //     'Check Email!',
                //     'Password Reset Link Sent!',
                //     'success'
                //   )
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



    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        processLogin, 
        handleEmailChange, 
        handlePasswordChange,
        handleResetPassword
    }
}

export default useFirebase;