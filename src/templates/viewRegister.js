import { auth } from "../firebase/index.js";
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"


export const register = () => {
    const containerRegister = document.createElement('div');
  
  

    const view = ` 
    <div class="contentHome">
        <img class="imghome" src="../img/5482829.jpg" alt="imagen de portada">
        <p>DoggoS es una app para duenos de perros, en el que podras encontrar y compartir recomendaciones sobre el cuidado de
        tus engreidos. Te invitamos a unirte y ser parte de esta gran comunidad doglover.
        ¿Qué esperas? ¡No te pierdas más novedades!</p>
    </div>
    <div class="sectionForm">
        <img src="./img/perro.png" alt="imagen de perrito del logo">
        <h1>DoggoS</h1>
        <h2>Bienvenido(a)</h2>
        <h3>REGISTRATE</h3>
        <form action="" id="formRegister">
            <input type="text" id="nameRegister" placeholder="Nombres y Apellidos" pattern="[a-z]">
            <div id="messageName"></div>
            <input type="text" id="emailRegister" placeholder="Correo">
            <div id="messageEmail"></div>
            <input type="password" id="passwordRegister" placeholder="contrasena" autocomplete = "off">
            <div id="messagePassword"></div>
            <input type="password" id="passwordConfirm" placeholder="Digite nuevamente su contrasena">
            <div id="messagePasswordConfirm"></div>
            <label><input type="checkbox" id="conditions" required> Acepto los Terminos, Condiciones y Politica de privacidad. </label>
            <button type="submit" id="register">REGISTRARSE</button>
        </form>
        <p class="question" >¿Ya tienes una cuenta?
            <input id="iniciarSesion" type="" value="INICIA SESIÓN">
        </p>
    </div>`
    
    
  containerRegister.innerHTML = view;

  const nameRegister = containerRegister.querySelector("#nameRegister");
  const emailRegister = containerRegister.querySelector("#emailRegister");
  const passwordRegister = containerRegister.querySelector("#passwordRegister");
  const passwordConfirm = containerRegister.querySelector("#passwordConfirm");
  const buttonRegister = containerRegister.querySelector("#register");
  const formRegister = containerRegister.querySelector("#formRegister");
  const messageName = containerRegister.querySelector("#messageName");
  const messageEmail = containerRegister.querySelector("#messageEmail");
  const messagePassword = containerRegister.querySelector("#messagePassword");
  const anotherMessageEmail = containerRegister.querySelector("#anotherMessageEmail");
  const messagePasswordConfirm = containerRegister.querySelector("#messagePasswordConfirm");
 
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
       
      
       if (emailUser === ''){
        messageEmail.innerHTML = "ingresa un correo"
        }
        if(error.code === "auth/invalid-email"){
           messageEmail.innerHTML = "correo invalido"
       } else if (error.code === "auth/email-already-in-use"){
           messageEmail.innerHTML = "el correo ya fue utilizado"
       } else if (error.code === "auth/weak-password"){
           messagePassword.innerHTML = "la contrasena debe tener por lo menos 6 caracteres"
       }
   })
   });

   buttonRegister.addEventListener("click", ()=> {
    if( passwordConfirm.value != passwordRegister.value){
        messagePasswordConfirm.innerHTML = "la contrasena no es igual"
    } else if (passwordConfirm.value === passwordRegister.value){
        messagePasswordConfirm.innerHTML = ""
    
    } else if (nameUser === '')  {
         messageName.innerHTML = ' Debe ingresar su nombre';
    } 
    });
    

  return containerRegister;
  
 }
 

