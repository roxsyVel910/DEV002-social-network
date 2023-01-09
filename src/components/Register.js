// import { auth } from "../firebase/index.js";
// import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"


// export const register = () => {

// const nameRegister = container.querySelector("#nameRegister");
// const emailRegister = container.querySelector("#emailRegister");
// const passwordRegister = container.querySelector("#passwordRegister");
// const passwordConfirm = container.querySelector("#passwordConfirm");
// const buttonRegister = container.querySelector("#register");
// const formRegister = container.querySelector("#formRegister");
// const messageName = container.querySelector("#messageName");
// const messageEmail = container.querySelector("#messageEmail");
// const messagePassword = container.querySelector("#messagePassword");
// const messagePasswordConfirm = container.querySelector("#messagePasswordConfirm");
// const iniciarSesion = container.querySelector("#iniciarSesion");
// const googleLogin = container.querySelector('#imggoogle');


//  iniciarSesion.addEventListener('click', () => onNavigate("/login"))


//   formRegister.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log(nameRegister.value, emailRegister.value);


// const authFirebase = createUserWithEmailAndPassword(auth, emailRegister.value, passwordRegister.value)
//   .then((authFirebase) => {
//       // const user = authFirebase.user
//       console.log(authFirebase)
//       onNavigate("/home");
//   }) 
//   .catch((error) => {
//       console.log(error.message)


//       // identificardor unico para el error
//       console.log(error.code)
      
//        if(error.code === "auth/invalid-email"){
//           messageEmail.innerHTML = "correo inválido"
//       } else if (error.code === "auth/email-already-in-use"){
//           messageEmail.innerHTML = "el correo ya fue utilizado"
//       } else if (error.code === "auth/weak-password"){
//           messagePassword.innerHTML = "la contraseña debe tener por lo menos 6 carácteres"
//       } else if (error.code){
//            alert('algo salio mal')
//       }
      
//   })
//   });
  
  
//   nameRegister.addEventListener("input", () => {
//    if (nameRegister.value !== "") {
//      messageName.innerHTML = "";
//    }
//    });

//  emailRegister.addEventListener("keyup", () => {
//     messageEmail.innerHTML = "";
//  })

//  passwordRegister.addEventListener("keyup", () => {
//   messagePassword.innerHTML = "";
// })
  

//   buttonRegister.addEventListener("click", ()=> {
//    if( passwordConfirm.value != passwordRegister.value){
//        messagePasswordConfirm.innerHTML = "la contraseña no es igual"
//    } else if (nameRegister.value === '')  {
//        messageName.innerHTML = 'Debe ingresar su nombre';
//    } else if (passwordConfirm.value === passwordRegister.value){
//        messagePasswordConfirm.innerHTML = ""
//    } 
//    });

// };







