const firebaseConfig = { 
  apiKey: "AIzaSyAU_1WReKhyGqdWBJGaaN97rjzsyHcXHdU",
  authDomain: "url-short-450df.firebaseapp.com",
  databaseURL: "https://url-short-450df-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "url-short-450df",
  storageBucket: "url-short-450df.firebasestorage.app",
  messagingSenderId: "861547833606",
  appId: "1:861547833606:web:ff4f86c044c0b7e4e01687"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.database();

function randomCode(len = 6) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < len; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function createShortURL() {
  let longUrl = document.getElementById("longUrl").value.trim();
  let alias = document.getElementById("alias").value.trim();

  if (!longUrl) {
    alert("Please enter a URL");
    return;
  }

  let code = alias !== "" ? alias : randomCode();

  db.ref("urls/" + code).set({
    longUrl: longUrl
  })
  .then(() => {
    let shortURL = window.location.origin + window.location.pathname.replace("index.html","") + "redirect.html?c=" + code;
    document.getElementById("result").innerHTML = `
      Short URL: <a href="${shortURL}" target="_blank">${shortURL}</a>
    `;
  })
  .catch(() => alert("Alias already exists or error occurred!"));
}

