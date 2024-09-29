// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdgkhAwwQapYXhq8y9_o5hNrdfJlnpDlM",
  authDomain: "job-portal-demo-17e90.firebaseapp.com",
  projectId: "job-portal-demo-17e90",
  storageBucket: "job-portal-demo-17e90.appspot.com",
  messagingSenderId: "369232084713",
  appId: "1:369232084713:web:31e964bf535844263cba78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;