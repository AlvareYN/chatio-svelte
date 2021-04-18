import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//your credentials here
const firebaseConfig = {
  apiKey: "AIzaSyCYDgNnHtAHEpsCSK2KcNVqXhb4OLnDDHY",
  authDomain: "chatio-3e6fa.firebaseapp.com",
  projectId: "chatio-3e6fa",
  storageBucket: "chatio-3e6fa.appspot.com",
  messagingSenderId: "1001555218032",
  appId: "1:1001555218032:web:1988144790e4e5a3d12eb5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const authClass = firebase.auth;
