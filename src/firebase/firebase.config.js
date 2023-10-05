// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAju3xR-ldGaXexuZt2fii6kmxeqsm1Dzc",
  authDomain: "dragon-news-react-auth-2bc61.firebaseapp.com",
  projectId: "dragon-news-react-auth-2bc61",
  storageBucket: "dragon-news-react-auth-2bc61.appspot.com",
  messagingSenderId: "601145534309",
  appId: "1:601145534309:web:0496fd7041d212a6aaa38c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;