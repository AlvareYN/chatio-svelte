#Chatio a simple Svelte - firebase chat app.

how to use it

~~~bash
git clone https://github.com/AlvareYN/chatio-svelte
cd chatio-svelte
npm install
~~~
Configure your credentials from firebase in src/firebase.ts

~~~typescript
//scr/firebase.ts
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  //your credentials here
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const authClass = firebase.auth;

~~~

then run the developer env.

~~~bash
npm run dev
~~~

