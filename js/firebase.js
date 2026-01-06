// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAU_1WReKhyGqdWBJGaaN97rjzsyHcXHdU",
  authDomain: "url-short-450df.firebaseapp.com",
  projectId: "url-short-450df",
  storageBucket: "url-short-450df.firebasestorage.app",
  messagingSenderId: "861547833606",
  appId: "1:861547833606:web:ff4f86c044c0b7e4e01687"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
