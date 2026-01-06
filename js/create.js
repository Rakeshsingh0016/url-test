import { db } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

function genCode() {
  return Math.random().toString(36).substring(2, 8);
}

const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  const longUrl = document.getElementById("url").value;
  if (!longUrl) return alert("URL required");

  const code = genCode();

  await setDoc(doc(db, "links", code), {
    longUrl,
    clicks: 0,
    disabled: false,
    createdAt: new Date()
  });

  document.getElementById("result").innerText =
    location.origin + "/" + code;
});
