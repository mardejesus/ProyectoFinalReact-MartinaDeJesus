// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdCCU7aaZ2v8VQG6wAuu3heSxAyjOqjeM",
  authDomain: "reactproyectofinal-b7cb8.firebaseapp.com",
  projectId: "reactproyectofinal-b7cb8",
  storageBucket: "reactproyectofinal-b7cb8.appspot.com",
  messagingSenderId: "121290248672",
  appId: "1:121290248672:web:99e729839fb9958b071b85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)