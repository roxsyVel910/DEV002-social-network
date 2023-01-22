
import { auth, createUserWithEmailAndPassword} from "../firebase/index.js";
import { createUser } from "./Home.js";




export const registerComponents = async (name,email,password) => {
    try{
        
         const createU = await createUserWithEmailAndPassword(auth,email,password)
         const userDatas = createU.user;
         createUser(userDatas.uid , name , email )
         localStorage.setItem( 'Usuarios' ,JSON.stringify(userDatas))
         localStorage.setItem( 'userName' ,JSON.stringify(name))


         return createU;

    } catch(error){

        // throw 
        // console.log(error.message)
        // identificardor unico para el error
        console.log("errors",error)

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



