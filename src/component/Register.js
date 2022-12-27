const nameRegister = document.querySelector("#nameRegister");
const emailRegister = document.querySelector("#emailRegister");
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


    buttonRegister.addEventListener("click", ()=> {
        if( passwordConfirm.value != passwordRegister.value){
            messagePasswordConfirm.innerHTML = "la contrasena no es igual"
        }
    });