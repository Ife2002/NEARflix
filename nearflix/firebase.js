// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUZvKsfPOQXWefNAReRVfHfO34EVIL1UQ",
  authDomain: "learning-firebase-3bdfe.firebaseapp.com",
  projectId: "learning-firebase-3bdfe",
  storageBucket: "learning-firebase-3bdfe.appspot.com",
  messagingSenderId: "1067689616356",
  appId: "1:1067689616356:web:68522a1f5c803e1b845df1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);