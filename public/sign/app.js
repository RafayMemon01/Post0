import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"; // Corrected import statement for firebase-auth.js

const firebaseConfig = {
  apiKey: "AIzaSyCPdFjd5mUWSYUDe_pYM6Zxw7j9XqNXfLI",
  authDomain: "my-first-project-13171.firebaseapp.com",
  projectId: "my-first-project-13171",
  storageBucket: "my-first-project-13171.appspot.com",
  messagingSenderId: "690086288881",
  appId: "1:690086288881:web:ae26cb23f9a6c1192db850",
  measurementId: "G-4P7PTSP01C",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

let register_button = document.getElementById("register_button");
register_button.addEventListener("click", () => {
  let email = document.getElementById("email").value; // Access the value of the email input
  let password = document.getElementById("password").value; // Access the value of the password input
  console.log(email);
  console.log(password);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage", errorMessage)
    });
});
