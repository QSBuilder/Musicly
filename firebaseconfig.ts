import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCFrJe4lcRo5RB1TeddQCJGAKMciFqzHnY",
  authDomain: "musiicly-f3805.firebaseapp.com",
  projectId: "musiicly-f3805",
  storageBucket: "musiicly-f3805.firebasestorage.app",
  messagingSenderId: "748928099644",
  appId: "1:748928099644:web:474e8d7a72935c0842aa39",
  measurementId: "G-EW91RPG3RQ",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
