import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD65XuzxMTjcWD_EHuiM7nL6Ll-q4_kbcI",
  authDomain: "tenzies-5784f.firebaseapp.com",
  projectId: "tenzies-5784f",
  storageBucket: "tenzies-5784f.appspot.com",
  messagingSenderId: "248968153964",
  appId: "1:248968153964:web:8f97cc7d9839b2b1ad8149",
  measurementId: "G-VCM1EDR773",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersCollection = collection(db, "tenziesscore");

export { db, usersCollection }
