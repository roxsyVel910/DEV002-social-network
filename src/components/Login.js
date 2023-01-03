
import { login } from "../templates/viewLogin.js";
import { auth } from "../firebase/index.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"


const emailLogin = login("container").querySelector('#emailLogin');
const passwordLogin = login("container").querySelector('#passwordLogin');
const formLogin= login("container").querySelector('#formLogin');
const googleLogin = login("container").querySelector('#imggoogles');
const messagePassword = login("container").querySelector('#messagePassword');
const messageEmail = login("container").querySelector("#messageEmail");

console.log(emailLogin.value, passwordLogin.value)
  
   formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailLogin.value;
    const password = passwordLogin.value;

    // console.log(emailLogin);
  
   const signIn =  signInWithEmailAndPassword(auth, email, password)
      .then((signIn) => {
        
        console.log("iniciando secion exzfd")
      })
      .catch((error) => {
        console.log("errors",error.message)
      // identificardor unico para el error
      console.log(error.code)

        // Mostrar mensaje de error al usuario o realizar alguna otra acción
        if(error.code === "auth/invalid-email"){
            messageEmail.innerHTML = "correo inválido"
        } else if (error.code === "auth/user-not-found"){
            messageEmail.innerHTML = "no se ha registrado"
        } else if (error.code === "auth/wrong-password"){
            messagePassword.innerHTML = "contraseña incorrecta"
        }else if (error.code === "auth/user-disabled"){
            messageEmail.innerHTML = "suarioinhabilitado"
        } else if (error.code){
             alert('algo salio mal')
        }
        
      });
      
  });