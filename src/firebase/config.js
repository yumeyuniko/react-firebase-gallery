// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCFjUvJmooHfbiS5DAefLVihP2Tnqp2NE",
  authDomain: "react-firebase-gallery-d-75f39.firebaseapp.com",
  projectId: "react-firebase-gallery-d-75f39",
  storageBucket: "react-firebase-gallery-d-75f39.appspot.com",
  messagingSenderId: "241781264564",
  appId: "1:241781264564:web:2511b5d3fc5050a6b447e1"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();