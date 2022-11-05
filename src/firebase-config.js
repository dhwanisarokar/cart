// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH7_NRRl6-4O5LCcpoODout5MTpoIu-h0",
  authDomain: "cart-503e5.firebaseapp.com",
  projectId: "cart-503e5",
  storageBucket: "cart-503e5.appspot.com",
  messagingSenderId: "924524959395",
  appId: "1:924524959395:web:305a7216c7542114bdd116"
};

// Initialize Firebase
initializeApp(firebaseConfig);


export const db = getFirestore();