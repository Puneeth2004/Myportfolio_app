// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "persona-3xr42",
  "appId": "1:431426475942:web:d80c2e67987b9d8ccfa167",
  "storageBucket": "persona-3xr42.firebasestorage.app",
  "apiKey": "AIzaSyB3RkuBIiie8NIlJjWAx3mAkgZSq5_ooQA",
  "authDomain": "persona-3xr42.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "431426475942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
