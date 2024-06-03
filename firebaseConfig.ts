import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAsUCiFx3FXZXzix1-sfmKVbg9qyAVoPn8",
    authDomain: "todo-reactnative-3ff7b.firebaseapp.com",
    projectId: "todo-reactnative-3ff7b",
    storageBucket: "todo-reactnative-3ff7b.appspot.com",
    messagingSenderId: "312546377452",
    appId: "1:312546377452:web:54e1b9091a822e6a52efc9",
    measurementId: "G-XLHM5EQ02Z"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);