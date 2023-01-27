import { auth, createUserWithEmailAndPassword, updateProfile} from "../firebase/index.js";

export const registerComponents = async (email,password, displayName) => {
         return await createUserWithEmailAndPassword(auth,email,password).then((result) => {
            // console.log(displayName)
            updateProfile(auth.currentUser, { displayName })
            return result
         })
         
}