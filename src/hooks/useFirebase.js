import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

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
    const facebookProvider = new FacebookAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result);
            setUser(result.user);
            registerUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    }
    
      const signInUsingFacebook = () => {
        signInWithPopup(auth, facebookProvider)
        .then(result => {
            setUser(result.user);
            // registerUser(result.user);
          })
          .catch(error => {
              console.log(error);
            setError(error.message);
          });
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

        const newUser = {name,email,phone,photo};

        fetch('http://localhost:5000/addUser',{
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
        signInUsingFacebook,
        registerUser,
        logOut,
        processLogin, 
        handleEmailChange, 
        handlePasswordChange,
        handleResetPassword
    }
}

export default useFirebase;