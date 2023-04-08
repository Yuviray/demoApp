// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwH_aEHH3svpKPRkGe5uPSH6Wjh0ola_w",
  authDomain: "fixmyfit-abb80.firebaseapp.com",
  projectId: "fixmyfit-abb80",
  storageBucket: "fixmyfit-abb80.appspot.com",
  messagingSenderId: "834596917251",
  appId: "1:834596917251:web:aca8de9faf3765856fbe36"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);