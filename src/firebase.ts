import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import {
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from "./utilis/env";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersCollection = collection(db, "tenziesscore");

export { db, usersCollection };
