// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';  // Firestore (if needed)
import { getAuth } from 'firebase/auth';  // Firebase Authentication (if needed)

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjIyLGYP1U3j4DiKcZbOdYyCWbz-zJ35g",
    authDomain: "aws-coding-website.firebaseapp.com",
    projectId: "aws-coding-website",
    storageBucket: "aws-coding-website.appspot.com",
    messagingSenderId: "257480886618",
    appId: "1:257480886618:web:cdca3135d1c79b3b1d8b63",
    measurementId: "G-M8LQP7XZ0V"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (optional, if you're using Firestore)
const db = getFirestore(app);

// Initialize Authentication (optional, if you're using Firebase Auth)
const auth = getAuth(app);

export { db, auth };
