import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVBM9VkzZfCdjF5Mk8UwhHXGL5haf6neU",

  authDomain: "eduplay-3db71.firebaseapp.com",

  projectId: "eduplay-3db71",

  storageBucket: "eduplay-3db71.firebasestorage.app",

  messagingSenderId: "689922196609",

  appId: "1:689922196609:web:cc0c31b5eaa46d4d81b980",

  measurementId: "G-RNR86YQVKH",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const googleAuthProvider = new GoogleAuthProvider();
