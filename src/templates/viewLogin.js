import { auth } from "../firebase/index.js";
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { onNavigate } from "../main.js";
import { saveDatasUser } from "../components/Home.js";
import { loginWithEmailAndPassword } from "../components/Login.js"

export const login = () => {
    const container = document.createElement('div');
    container.classList.add('containerLogin');
  
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
        <h3>¡Inicia Sesión!</h3>
        <form action="" id="formLogin">
            <input type="text" id="emailLogin" placeholder="ej. anamiranda@gmail.com">
            <div id="messageEmail"></div>
            <input type="password" id="passwordLogin" placeholder="Contraseña" autocomplete ="off">
            <div id="messagePassword"></div>
            <button type="submit" id="login">INICIA SESIÓN</button>
        </form>
        <div class="redes-sociales">
          <p class="ingresaCon"> o ingresa con</p> <img id="imggoogle" src="./img/google.png" alt="icono de google">
        </div>
        <p class="question" >¿NO tienes una cuenta?
            <input id="registrate" type="" value="REGISTRATE">
        </p>
    </div>`
   

    container.innerHTML = view;

    const registrate = container.querySelector("#registrate");
    // console.log(registrate)
    registrate.addEventListener('click', () => onNavigate("/"))
    
const emailLogin = container.querySelector('#emailLogin');
const passwordLogin = container.querySelector('#passwordLogin');
const formLogin = container.querySelector("#formLogin");
const googleLogin = container.querySelector('#imggoogle');
const messagePassword = container.querySelector('#messagePassword');
// const facebookLogin = container.querySelector('#imgfacebook');

  
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailLogin.value;
    const password = passwordLogin.value;
  
    loginWithEmailAndPassword(email, password)
    .then((user) => {
 // Mostrar mensaje de error al usuario o realizar alguna otra acción
      if (user === "error1L") {
        messageEmail.innerHTML = "correo inválido";
      } else if (user === "error2L") {
        messageEmail.innerHTML = "no se ha registrado";
      } else if (user === "error3L") {
        messagePassword.innerHTML = "contraseña incorrecta";
      } else if (user === "error4L") {
        alert("algo salio mal");
      } else {
          const logincredential=user.user
          localStorage.setItem("user", JSON.stringify(logincredential))
          onNavigate("/home");
      }
        
        
      });
      
    });

    emailLogin.addEventListener("keyup", () => {
      messageEmail.innerHTML = "";
    })

   passwordLogin.addEventListener("keyup", () => {
    messagePassword.innerHTML = "";
   })


  const provider = new GoogleAuthProvider();

//   const auth = getAuth();

    googleLogin.addEventListener('click', ()=> {
        signInWithPopup(auth, provider)
            .then((result) => {
              
              onNavigate("/home");
             // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            localStorage.setItem("user",JSON.stringify(user))
            // const userlocalStorage = JSON.parse(localStorage.getItem("user"));
            saveDatasUser(auth.currentUser.displayName, auth.currentUser.email , auth.currentUser.uid)
            // ...
            })
            .catch((error) => {
           
              // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            
        });
    });




  
  return container;


}




