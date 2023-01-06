import { auth } from "../firebase/index.js";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { onNavigate } from "../main.js";


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
            <input type="text" id="emailLogin" placeholder="example.98@gmail.com">
            <div id="messageEmail"></div>
            <input type="password" id="passwordLogin" placeholder="Contraseña" autocomplete ="off">
            <div id="messagePassword"></div>
            <div class="redes-sociales">
                <img id="imggoogle" src="./img/google.png" alt="icono de google">
                <img id="imgfacebook" src="./img/facebook.png" alt="icono de facebook">
             </div>
            <button type="submit" id="login">INICIA SESIÓN</button>
        </form>
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
const facebookLogin = container.querySelector('#imgfacebook');

  
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailLogin.value;
    const password = passwordLogin.value;
  
   const signIn =  signInWithEmailAndPassword(auth, email, password)
      .then((signIn) => {
        
        console.log("iniciando secion exzfd");
        onNavigate("/home");
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


  const provider = new GoogleAuthProvider();

//   const auth = getAuth();

    googleLogin.addEventListener('click', ()=> {
        signInWithPopup(auth, provider)
            .then((result) => {
             // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    });


  const providerF = new FacebookAuthProvider();

    facebookLogin.addEventListener('click', ()=> {
        signInWithPopup(auth, providerF)
            .then((result) => {
             // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
            // ...
        });
    });

  
  return container;


}




