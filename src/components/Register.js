import { auth, createUserWithEmailAndPassword} from "../firebase/index.js";

export const registerComponents = async (email,password) => {
    try {
         return await createUserWithEmailAndPassword(auth,email,password)
    } catch(error){
        // throw 
        // console.log(error.message)
        // identificardor unico para el error
        console.log(error.code)

         if(error.code === "auth/invalid-email"){
            return "error1"
        } else if (error.code === "auth/email-already-in-use"){
            return "error2"
        } else if (error.code === "auth/weak-password"){
            return "error3"
        } else if (error.code){
             return 'error4'
        }
    }
}