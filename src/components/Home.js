import { auth, getFirestore,collection,  addDoc, getDocs, onSnapshot,doc, deleteDoc,serverTimestamp } from "../firebase/index.js";


const db = getFirestore();

export const saveDatas = (post) => addDoc(collection(db, 'post'), {post});
// export const saveDatas = (post,date) => addDoc(collection(db, 'newpost'), {post,date});
 
 
export const getDatas = () => getDocs(collection(db, 'post'));

export const getOnDatas = (callback) => onSnapshot(collection(db,'post'),(callback));

export const deleteData = (id) => deleteDoc(doc(db, "post", id));

export { collection, onSnapshot, db, getDocs, doc };
    
 