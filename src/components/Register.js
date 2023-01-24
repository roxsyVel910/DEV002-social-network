import { auth, createUserWithEmailAndPassword, updateProfile} from "../firebase/index.js";

export const registerComponents = async (email,password, displayName) => {
    try {
         return await createUserWithEmailAndPassword(auth,email,password).then((result) => {
            console.log(displayName)
            updateProfile(auth.currentUser, { displayName })
            return result
         })
         
    } catch(error){ 
        // console.log(error.message)
        // identificardor unico para el error
        console.log(error)

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