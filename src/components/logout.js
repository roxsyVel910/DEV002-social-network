import { auth, onAuthStateChanged, signOut } from "../firebase/index.js";

export const viewUser = onAuthStateChanged (auth, (user) => {
    console.log(user)}
    )

    
export const logout = async () => {
  try {
    return await signOut(auth)
  }catch(error){
    console.log(error)

  }}
