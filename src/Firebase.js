import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEkPFPlvWTDnUI7gRM6mo9mjiItLdz_3E",
    authDomain: "clone-46624.firebaseapp.com",
    projectId: "clone-46624",
    storageBucket: "clone-46624.appspot.com",
    messagingSenderId: "331235854347",
    appId: "1:331235854347:web:fc7d0579126ae73c1d5f0e",
    measurementId: "G-6VRCG7C59J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new GoogleAuthProvider();

  export {db, auth, provider};