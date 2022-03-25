import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9nrJOLkF3heGUNmv19Jf-WyaQEUVpfvE",
  authDomain: "linkedin-clone-44973.firebaseapp.com",
  projectId: "linkedin-clone-44973",
  storageBucket: "linkedin-clone-44973.appspot.com",
  messagingSenderId: "459988200325",
  appId: "1:459988200325:web:c49a3d69f8f279abc5f2ec",
  measurementId: "G-9Z2Y50V754"
};

const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const auth = getAuth();
 export const provider = new GoogleAuthProvider();
