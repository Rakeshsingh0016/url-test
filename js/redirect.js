import { db } from "./firebase.js";
import { doc, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const code = location.pathname.replace("/", "");
if (!code) location.href = "/";

const ref = doc(db, "links", code);
const snap = await getDoc(ref);

if (!snap.exists()) location.href = "/expired.html";

const data = snap.data();

// BOT BASIC CHECK
if (navigator.webdriver) location.href = "/disabled.html";

if (data.disabled) location.href = "/disabled.html";

// CLICK COUNT
await updateDoc(ref, {
  clicks: increment(1)
});

// REDIRECT
location.href = data.longUrl;

