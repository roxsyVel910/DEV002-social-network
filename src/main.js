// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Autentificacion
import {getAuth} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Firebase, esta informacion la utiliza firebase para el uso de su servicio
const firebaseConfig = {
    apiKey: "AIzaSyAQxr8QueNyoazFnT3cCFo4YeCEz7S4FaE",
    authDomain: "social-network-dog.firebaseapp.com",
    projectId: "social-network-dog",
    storageBucket: "social-network-dog.appspot.com",
    messagingSenderId: "1073529346267",
    appId: "1:1073529346267:web:b2b1e7b435a9c16adc14fe",
    measurementId: "G-5PBN6ZD4GQ"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)




// myFunction();
// console.log("esto es main");

const nameRegister = document.querySelector("#nameRegister");
const emailRegister = document.querySelector("#emailRegister");
const passwordRegister = document.querySelector("#passwordRegister");
const passwordConfirm = document.querySelector("#passwordConfirm");
const buttonRegister = document.querySelector("#register");
const formRegister = document.querySelector("#formRegister");

formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(nameRegister.value, emailRegister.value);

const authFirebase = createUserWithEmailAndPassword(auth, emailRegister.value, passwordRegister.value)
    .then((authFirebase) => {
        // const user = authFirebase.user
        console.log(authFirebase)
    }) 
    .catch((error) => {
        console.log(error)
    })
 
})


