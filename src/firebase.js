// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD65XuzxMTjcWD_EHuiM7nL6Ll-q4_kbcI",
  authDomain: "tenzies-5784f.firebaseapp.com",
  projectId: "tenzies-5784f",
  storageBucket: "tenzies-5784f.appspot.com",
  messagingSenderId: "248968153964",
  appId: "1:248968153964:web:8f97cc7d9839b2b1ad8149",
  measurementId: "G-VCM1EDR773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const usersCollection = collection(db, "users")