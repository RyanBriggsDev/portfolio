import { initializeApp } from "firebase/app";

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";
import useAuthState from 'react-firebase-hooks/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBUDiL9C15zb1YDfceB3UO3o_FLkr63Qfc",
    authDomain: "portfolio-7da17.firebaseapp.com",
    projectId: "portfolio-7da17",
    storageBucket: "portfolio-7da17.appspot.com",
    messagingSenderId: "48822421278",
    appId: "1:48822421278:web:c2ed031b27d24c6939ab0f"
  };

const user = null

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
        console.error(err)
        alert(err.message)
    }
}

const logout = () => {
    signOut(auth);
  };

export {
  auth,
  db,
  logInWithEmailAndPassword,
  logout,
};