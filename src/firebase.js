// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP1FgmlVX9R5jW98CwLpdmC8zioQyFjRE",
  authDomain: "visual-gamer.firebaseapp.com",
  projectId: "visual-gamer",
  storageBucket: "visual-gamer.appspot.com",
  messagingSenderId: "745406372235",
  appId: "1:745406372235:web:33e387260976df4fab378e",
  measurementId: "G-SY92VECLYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);