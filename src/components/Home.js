import { auth } from "../firebase/index.js";
import { getFirestore,collection,  addDoc, getDocs, onSnapshot,doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"

const db = getFirestore();

export const saveDatas = (post) => addDoc(collection(db, 'post'), { post});
 
export const getDatas = () => getDocs(collection(db, 'post'));

export const getOnDatas = (callback) => onSnapshot(collection(db,'post'),(callback));

export const deleteData = (id) => deleteDoc(doc(db, "post", id));

export { collection, onSnapshot, db, getDocs, doc };
    
 