import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


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
const database = getDatabase(app);

export { database };