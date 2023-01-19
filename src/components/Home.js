import { auth } from "../firebase/index.js";
import { getFirestore,collection,  addDoc, getDocs, onSnapshot,doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"

const db = getFirestore();

export const saveDatas = (post) => addDoc(collection(db, 'post'), {post});
// export const saveDatas = (post,date) => addDoc(collection(db, 'newpost'), {post,date});
 
 


export const getOnDatas = (callback) => onSnapshot(collection(db,'post'),(callback));

export const deleteData = (id) => deleteDoc(doc(db, "post", id));

export const getData = (id) => getDoc(doc(db, "post", id));

export const updateData = (id, newFields) =>
  updateDoc(doc(db, "post", id), newFields);

export const getDatas = () => getDocs(collection(db, "post"));

export { collection, onSnapshot, db, getDocs, doc };
    
 