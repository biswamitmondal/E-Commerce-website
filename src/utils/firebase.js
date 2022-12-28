// import firebase from "firebase";
import {initializeApp} from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// import {auth} from 'firebase/auth'
const db = require("firebase/database")



  const firebaseConfig = {
    apiKey: "AIzaSyD_xpDEjETbIW4AvU9iilCs0i5yRx_YYfQ",
    authDomain: "clone-33e53.firebaseapp.com",
    projectId: "clone-33e53",
    storageBucket: "clone-33e53.appspot.com",
    messagingSenderId: "583993146517",
    appId: "1:583993146517:web:638e2ec3189c4e5436ef9c",
    measurementId: "G-M5Z1SQQQ4H"
  };


const firebaseApp = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const auth = getAuth();

// const auth = require('firebase/auth');
export { db, auth ,createUserWithEmailAndPassword,signInWithEmailAndPassword};
