// Este es el punto de entrada de tu aplicacion
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

const nameRegister = document.querySelector("#nameRegister");
const emailRegister = document.querySelector("#emailRegister");
const passwordRegister = document.querySelector("#passwordRegister");
const passwordConfirm = document.querySelector("#passwordConfirm");
const register = document.querySelector("#register");


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuoVd4Xf831Az8xJnJZ0KwWSq4wPViJKA",
  authDomain: "selfdog-ea4f5.firebaseapp.com",
  projectId: "selfdog-ea4f5",
  storageBucket: "selfdog-ea4f5.appspot.com",
  messagingSenderId: "430951600542",
  appId: "1:430951600542:web:5e31aa4aea21aebf45c68f",
  measurementId: "G-QLQW33KDKM"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


register.addEventListener('click', (e) => {

  createUserWithEmailAndPassword(auth, emailRegister.value, passwordRegister.value)
  .then((userCredential) => {
    const user = userCredential.user;
    // ...
    alert('creacion de usuario');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
  });




})
