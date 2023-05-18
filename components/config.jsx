// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTpEX1pSNYD4Hsge_3zStqqkgowIaNEpM",
  authDomain: "pillbox-58c1f.firebaseapp.com",
  databaseURL: "https://pillbox-58c1f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pillbox-58c1f",
  storageBucket: "pillbox-58c1f.appspot.com",
  messagingSenderId: "736164580415",
  appId: "1:736164580415:web:f92170d49fdbb7a921bc8a",
  measurementId: "G-1VKW54HW7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const db = getDatabase(app);
console.log(db)