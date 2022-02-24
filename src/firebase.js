// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUxdW4SWIvrsrMdPBmRAYfvDP15H2Boh4",
  authDomain: "vaayu-d0801.firebaseapp.com",
  projectId: "vaayu-d0801",
  storageBucket: "vaayu-d0801.appspot.com",
  messagingSenderId: "468037423557",
  appId: "1:468037423557:web:e27c3bcfc94e43b44b7bac",
  measurementId: "G-7ZZCJM6RXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const Firestore = getFirestore(app);