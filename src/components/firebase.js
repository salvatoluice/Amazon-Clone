import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAwiD_-sUvV9E1qJGItqP6XxFcjfg9mHG8",
    authDomain: "clone-5d5c7.firebaseapp.com",
    projectId: "clone-5d5c7",
    storageBucket: "clone-5d5c7.appspot.com",
    messagingSenderId: "207538882404",
    appId: "1:207538882404:web:a45c604c4904b1ccfe5c71",
    measurementId: "G-VPF75LQGGL"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };