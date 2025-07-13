// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
 // Ensure this path is correct based on your project structure
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHUKovDqZMg52TOPp2fCgn1mDpjYxPaMQ",
  authDomain: "vaibhav-netflix-5da97.firebaseapp.com",
  projectId: "vaibhav-netflix-5da97",
  storageBucket: "vaibhav-netflix-5da97.firebasestorage.app",
  messagingSenderId: "314403527703",
  appId: "1:314403527703:web:878561b40219ce91505052",
  measurementId: "G-Y8RDN9QGL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
