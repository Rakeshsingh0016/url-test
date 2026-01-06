import { db } from "./firebase.js";
import { doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const code = new URLSearchParams(location.search).get("code");
if (!code) alert("Code missing");

onSnapshot(doc(db, "links", code), (snap) => {
  if (snap.exists()) {
    document.getElementById("c").innerText = snap.data().clicks;
  }
});

