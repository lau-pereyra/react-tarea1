// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6ipIty7yVM36CIog75FUOjYHFoqwwHzI",
    authDomain: "coderhouse-react-aba3c.firebaseapp.com",
    projectId: "coderhouse-react-aba3c",
    storageBucket: "coderhouse-react-aba3c.appspot.com",
    messagingSenderId: "672891300442",
    appId: "1:672891300442:web:8a07178419238e496d4663"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)