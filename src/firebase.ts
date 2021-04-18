import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import * as firebasesCredentials from "./firebase_client_credentials.json";
//your credentials here
const firebaseConfig = {
  apiKey: firebasesCredentials.apiKey,
  authDomain: firebasesCredentials.authDomain,
  projectId: firebasesCredentials.projectId,
  storageBucket: firebasesCredentials.storageBucket,
  messagingSenderId: firebasesCredentials.messagingSenderId,
  appId: firebasesCredentials.appId,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const authClass = firebase.auth;
