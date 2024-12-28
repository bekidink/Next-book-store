// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc_Bwb_zZQh6IPBNWUvuuXJQFa-06E-K0",
  authDomain: "ecom-1099d.firebaseapp.com",
  projectId: "ecom-1099d",
  storageBucket: "ecom-1099d.appspot.com",
  messagingSenderId: "287198441245",
  appId: "1:287198441245:web:0ab3e05b081d36d84afbf4",
  measurementId: "G-MWFCFDH4XE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
