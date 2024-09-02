import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Auth
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmNGAD5Qq8jiOxfQrWK2HMDVd37jLNBSo",
  authDomain: "aarogyaai.firebaseapp.com",
  projectId: "aarogyaai",
  storageBucket: "aarogyaai.appspot.com",
  messagingSenderId: "721128124924",
  appId: "1:721128124924:web:dd1d425eb780e7da5f4279",
  measurementId: "G-RRHDNMLQWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
