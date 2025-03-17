// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYH40MQOEXaWxN1Wf6-FSuQ1GPtXnRQcg",
  authDomain: "fir-practice-43bc4.firebaseapp.com",
  projectId: "fir-practice-43bc4",
  storageBucket: "fir-practice-43bc4.firebasestorage.app",
  messagingSenderId: "479362115730",
  appId: "1:479362115730:web:689333f22d6d2547f49e4b",
  measurementId: "G-D70W42GLDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);