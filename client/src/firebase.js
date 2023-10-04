// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "quick-estate.firebaseapp.com",
  projectId: "quick-estate",
  storageBucket: "quick-estate.appspot.com",
  messagingSenderId: "1028491994881",
  appId: "1:1028491994881:web:a144d71b126e13dbfddd00"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);