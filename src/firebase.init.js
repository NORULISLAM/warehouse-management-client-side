// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7-5XHzCAl1Ty9nedGXo-58yavUtd3_Iw",
    authDomain: "inventroy-management.firebaseapp.com",
    projectId: "inventroy-management",
    storageBucket: "inventroy-management.appspot.com",
    messagingSenderId: "1045789480994",
    appId: "1:1045789480994:web:e938ad7ff082f225af127b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;