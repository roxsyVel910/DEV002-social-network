import { auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "../firebase/index.js"



export const loginWithEmailAndPassword = async (email, password) =>  { 
  try{

   return await signInWithEmailAndPassword (auth, email, password)
    
  }catch(error)  {

     // Mostrar mensaje de error al usuario o realizar alguna otra acción
  if (error.code === "auth/invalid-email") {
    return "error1L";
  } else if (error.code === "auth/user-not-found") {
    return "error2L";
  } else if (error.code === "auth/wrong-password") {
    return "error3L";
  } else if (error.code === "auth/user-disabled") {
    return "error4L";
  }
}};
