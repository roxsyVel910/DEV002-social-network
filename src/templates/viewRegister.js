import { auth } from "../firebase/index.js";
import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

import { onNavigate } from "../main.js";


export const register = () => {
    const container = document.createElement('div');
    container.classList.add('containerRegister');
  
 const view = ` 
    <div class="contentHome">
        <img class="imghome" src="../img/imgportada.jpg" alt="imagen de portada">
        <p>DoggoS es una app para dueños de perros, en el que podras encontrar y compartir recomendaciones sobre el cuidado de
        tus engreidos. Te invitamos a unirte y ser parte de esta gran comunidad doglover.
        ¿Qué esperas? ¡No te pierdas más novedades!</p>
    </div> 
    <div class="sectionForm">
        <img src="./img/perro.png" alt="imagen de perrito del logo">
        <h1>DoggoS</h1>
        <h2>Bienvenido(a)</h2>
        <h3>¡Regístrate!</h3>
        <form action="" id="formRegister">
            <input type="text" id="nameRegister" placeholder="Ana Maria Miranda">
            <div id="messageName"></div>
            <input type="text" id="emailRegister" placeholder="example.89@gmail.com">
            <div id="messageEmail"></div>
            <input type="password" id="passwordRegister" placeholder="Contraseña" autocomplete = "off">
            <div id="messagePassword"></div>
            <input type="password" id="passwordConfirm" placeholder="Confirme su contraseña">
            <div id="messagePasswordConfirm"></div>
            <label class ="terminos"><input type="checkbox" id="conditions" required>
             Acepto los <span>Términos y Condiciones y Política de privacidad.</span></label>
            <button type="submit" id="register">REGISTRARSE</button>
        </form>
        <p class="question" >¿Ya tienes una cuenta?
            <input id="iniciarSesion" type="" value="INICIA SESIÓN">
        </p>
    </div>`
    
    
  container.innerHTML = view;

const nameRegister = container.querySelector("#nameRegister");
const emailRegister = container.querySelector("#emailRegister");
const passwordRegister = container.querySelector("#passwordRegister");
const passwordConfirm = container.querySelector("#passwordConfirm");
const buttonRegister = container.querySelector("#register");
const formRegister = container.querySelector("#formRegister");
const messageName = container.querySelector("#messageName");
const messageEmail = container.querySelector("#messageEmail");
const messagePassword = container.querySelector("#messagePassword");
const messagePasswordConfirm = container.querySelector("#messagePasswordConfirm");
const iniciarSesion = container.querySelector("#iniciarSesion");
const googleLogin = container.querySelector('#imggoogle');

iniciarSesion.addEventListener('click', () => onNavigate("/login"))


  formRegister.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(nameRegister.value, emailRegister.value);


const authFirebase = createUserWithEmailAndPassword(auth, emailRegister.value, passwordRegister.value)
  .then((authFirebase) => {
      // const user = authFirebase.user
      console.log(authFirebase)
      onNavigate("/home");
  }) 
  .catch((error) => {
      console.log(error.message)


      // identificardor unico para el error
      console.log(error.code)
      
       if(error.code === "auth/invalid-email"){
          messageEmail.innerHTML = "correo inválido"
      } else if (error.code === "auth/email-already-in-use"){
          messageEmail.innerHTML = "el correo ya fue utilizado"
      } else if (error.code === "auth/weak-password"){
          messagePassword.innerHTML = "la contraseña debe tener por lo menos 6 carácteres"
      } else if (error.code){
           alert('algo salio mal')
      }
      
  })
  });
  
  
  nameRegister.addEventListener("input", () => {
   if (nameRegister.value !== "") {
     messageName.innerHTML = "";
   }
   });

 emailRegister.addEventListener("keyup", () => {
    messageEmail.innerHTML = "";
 })

 passwordRegister.addEventListener("keyup", () => {
  messagePassword.innerHTML = "";
})
  

  buttonRegister.addEventListener("click", ()=> {
   if( passwordConfirm.value != passwordRegister.value){
       messagePasswordConfirm.innerHTML = "la contraseña no es igual"
   } else if (nameRegister.value === '')  {
       messageName.innerHTML = 'Debe ingresar su nombre';
   } else if (passwordConfirm.value === passwordRegister.value){
       messagePasswordConfirm.innerHTML = ""
   } 
   });


  return container;
  
}
 
