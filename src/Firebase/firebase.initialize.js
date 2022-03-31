import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

// const initializeAnalytics = () => {
//     getAnalytics(firebaseConfig);
// }

export default initializeAuthentication;