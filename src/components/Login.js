import { auth, signInWithEmailAndPassword} from "../firebase/index.js"

export const loginWithEmailAndPassword = async (email, password) =>  {
   return await signInWithEmailAndPassword (auth, email, password)};
  
