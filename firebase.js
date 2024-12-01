// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf4vbzSk7jmqGdcj59JNg07UzqwhoV3u8",
  authDomain: "proyecto-ianki.firebaseapp.com",
  projectId: "proyecto-ianki",
  storageBucket: "proyecto-ianki.firebasestorage.app",
  messagingSenderId: "711122229447",
  appId: "1:711122229447:web:47dd2f3ee0ea733563c6e2",
  //measurementId: "G-8RHR8YG9V4"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  
  const auth = firebase.auth();
  
  const handleSignUp = async (email, password) => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      console.log("User registered:", userCredential.user);
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };