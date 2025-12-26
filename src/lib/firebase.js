// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0YGr6JDfcX6dL7KfkCPxWWz-R1fQYM0g",
  authDomain: "bawaskar-fiber-arts.firebaseapp.com",
  projectId: "bawaskar-fiber-arts",
  storageBucket: "bawaskar-fiber-arts.firebasestorage.app",
  messagingSenderId: "27079635808",
  appId: "1:27079635808:web:61e72b39ba37c855592405",
  measurementId: "G-X9KSDHDM3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Analytics (only in browser)
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, db, analytics };
