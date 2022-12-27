import { auth } from "../firebase/index.js";
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"


export const register = () => {
    const containerRegister = document.createElement('div');

    const view = ` <h2>REGISTRATE</h2>
    <form action="" id="formRegister">
      <input type="text" id="nameRegister" placeholder="Nombres y Apellidos">
      <input type="text" id="emailRegister" placeholder="Correo">
      <div id="messageEmail"></div>
      <div id="anotherMessageEmail"></div>
      <input type="password" id="passwordRegister" placeholder="contrasena" autocomplete = "off">
      <div id="messagePassword"></div>
      <input type="password" id="passwordConfirm" placeholder="Digite nuevamente su contrasena">
      <div id="messagePasswordConfirm"></div>
      <button type="submit" id="register">REGISTRARSE</button>
    </form>`
  containerRegister.innerHTML = view;

  const nameRegister = containerRegister.querySelector("#nameRegister");
  console.log("nameee", nameRegister);
  const emailRegister = containerRegister.querySelector("#emailRegister");
  const passwordRegister = document.querySelector("#passwordRegister");
  const passwordConfirm = document.querySelector("#passwordConfirm");
  const buttonRegister = document.querySelector("#register");
  const formRegister = document.querySelector("#formRegister");
  const messageEmail = document.querySelector("#messageEmail");
  const messagePassword = document.querySelector("#messagePassword");
  const anotherMessageEmail = document.querySelector("#anotherMessageEmail");
  const messagePasswordConfirm = document.querySelector("#messagePasswordConfirm");
 
  formRegister.addEventListener('submit', (e) => {
   e.preventDefault();
   console.log(nameRegister.value, emailRegister.value);
 
 const authFirebase = createUserWithEmailAndPassword(auth, emailRegister.value, passwordRegister.value)
   .then((authFirebase) => {
       // const user = authFirebase.user
       console.log(authFirebase)
   }) 
   .catch((error) => {
       console.log(error.message)
       // identificardor unico para el error
       console.log(error.code)
 
       if(error.code === "auth/invalid-email"){
           messageEmail.innerHTML = "correo invalido"
       } else if (error.code === "auth/email-already-in-use"){
           messageEmail.innerHTML = "el correo ya fue utilizado"
       } else if (error.code === "auth/weak-password"){
           messagePassword.innerHTML = "la contrasena debe tener por lo menos 6 caracteres"
       }
   })
   });
  return containerRegister
   

  
 }
 

