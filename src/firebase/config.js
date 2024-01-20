// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC2v1PfsorlM7bfuvZXkhMXwjKucPUgJWg",
    authDomain: "veterinaria-react-4991.firebaseapp.com",
    projectId: "veterinaria-react-4991",
    storageBucket: "veterinaria-react-4991.appspot.com",
    messagingSenderId: "385145467664",
    appId: "1:385145467664:web:87768136896af805d5eb95"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()







