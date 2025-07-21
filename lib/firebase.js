// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_11tlupn9MUIr3rCeYqldreEOMmeCFZc",
    authDomain: "damm-cace6.firebaseapp.com",
    projectId: "damm-cace6",
    storageBucket: "damm-cace6.firebasestorage.app",
    messagingSenderId: "654907240816",
    appId: "1:654907240816:web:d19eba2a1f48fdca405fb5",
    measurementId: "G-NE5ZKNEDX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);