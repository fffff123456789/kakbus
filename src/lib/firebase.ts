import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBm266oojH-0SXXJtUanDJb-26bdzzWj9Y",
  authDomain: "kakakak-705c0.firebaseapp.com",
  projectId: "kakakak-705c0",
  storageBucket: "kakakak-705c0.firebasestorage.app",
  messagingSenderId: "808452816580",
  appId: "1:808452816580:web:f477696a869e7c5d6e1391",
  measurementId: "G-1TBS0GQ0KR",
};

// Initialize Firebase app for React use
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
