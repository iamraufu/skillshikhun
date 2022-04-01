import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

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
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
          .then(result => {
            setUser(result.user);
          })
          .catch(error => {
            setError(error.message);
          });
      }
    
      const signInUsingFacebook = () => {
        signInWithPopup(auth, facebookProvider)
        .then(result => {
            setUser(result.user);
          })
          .catch(error => {
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



    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingGithub,
        signInUsingFacebook,
        logOut,
        processLogin, 
        handleEmailChange, 
        handlePasswordChange,
        handleResetPassword
    }
}

export default useFirebase;