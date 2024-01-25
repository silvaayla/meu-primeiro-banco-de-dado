// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firestore from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqE7HRuasJmYjN25Tzqi1m5xhV72Y0Ue8",
  authDomain: "teste-3b0d2.firebaseapp.com",
  projectId: "teste-3b0d2",
  storageBucket: "teste-3b0d2.appspot.com",
  messagingSenderId: "269532428333",
  appId: "1:269532428333:web:1eaea5fa01a566359760a4"
};

// Initialize Firebase
console.log('conectado ao firebase')

const Firebase = initializeApp(firebaseConfig);
export const db = firestore.getFirestore(Firebase)

export{firestore}