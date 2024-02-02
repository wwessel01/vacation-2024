import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vakantie-2024.firebaseapp.com",
  projectId: "vakantie-2024",
  storageBucket: "vakantie-2024.appspot.com",
  messagingSenderId: "1010816764772",
  appId: "1:1010816764772:web:cf9d52651d76c74f5c0871",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
