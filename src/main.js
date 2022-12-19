// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';


myFunction();
console.log("esto es main");

const nameRegister = document.querySelector("#nameRegister");
const emailRegister = document.querySelector("#emailRegister");
const passwordRegister = document.querySelector("#passwordRegister");
const passwordConfirm = document.querySelector("#passwordConfirm");
const register = document.querySelector("#register");

register.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(nameRegister.value , emailRegister.value);
})


