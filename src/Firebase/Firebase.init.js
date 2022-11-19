// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmHSwh4S2ehZrpFI7s43N7Wa--bY8khcI",
  authDomain: "doctor-portal-7b7de.firebaseapp.com",
  projectId: "doctor-portal-7b7de",
  storageBucket: "doctor-portal-7b7de.appspot.com",
  messagingSenderId: "173737480882",
  appId: "1:173737480882:web:f1872de56b795e58f1efab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app