// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjc5wOfe6CcuFqErySIYmkllYtYqBb9t0",
  authDomain: "thorts-d3727.firebaseapp.com",
  projectId: "thorts-d3727",
  storageBucket: "thorts-d3727.appspot.com",
  messagingSenderId: "628273217849",
  appId: "1:628273217849:web:ab1b978ce2bd1e397928e8",
  measurementId: "G-CD904KQ6CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);