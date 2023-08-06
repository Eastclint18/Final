import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCz5J8OBPZITlkbYc_OTpS5IzkXtMN18DE",
  authDomain: "clase13-a73f4.firebaseapp.com",
  projectId: "clase13-a73f4",
  storageBucket: "clase13-a73f4.appspot.com",
  messagingSenderId: "249205676667",
  appId: "1:249205676667:web:e7bae16fcd1392ffe4a0de",
  measurementId: "G-NMKTYK1DG2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getanalytics(app);

export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export const auth = getAuth(app);
