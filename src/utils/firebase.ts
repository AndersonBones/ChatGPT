// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWkD7Z43y9gZ8gNTijg5mb1_ZuIysTq50",
  authDomain: "gptdb-3a1ab.firebaseapp.com",
  projectId: "gptdb-3a1ab",
  storageBucket: "gptdb-3a1ab.appspot.com",
  messagingSenderId: "97831429328",
  appId: "1:97831429328:web:30950d0a754e624101ead5",
  measurementId: "G-E4RGDL8SF5"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)



export default db