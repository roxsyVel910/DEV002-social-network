import { register } from "../templates/viewRegister.js";
import { auth } from "../firebase/index.js";
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"






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


    buttonRegister.addEventListener("click", ()=> {
        if( passwordConfirm.value != passwordRegister.value){
            messagePasswordConfirm.innerHTML = "la contrasena no es igual"
        }
    });
