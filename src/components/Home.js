import { auth, getFirestore,collection,  addDoc, getDocs, onSnapshot,doc, deleteDoc,getDoc, orderBy, query, updateDoc} from "../firebase/index.js";


const db = getFirestore();

// export const saveDatas = (post) => addDoc(collection(db, 'post'), {post});
export const saveDatas = (post,date) => addDoc(collection(db, 'newpost'), {post,date});
 
 
export const getDatas = () => getDocs(collection(db, 'newpost'));

export const getOnDatas = (callback) => {
    const orderQuery = query(collection(db,'newpost'),orderBy("date","desc"));
    onSnapshot(orderQuery,(callback))};

// orderBy("date","desc")

export const deleteData = (id) => deleteDoc(doc(db, "newpost", id));

export const getData = (id) => getDoc(doc(db, "newpost", id));

export const updateData = (id, newFields) =>
  updateDoc(doc(db, "newpost", id), newFields);

export { collection, onSnapshot, db, getDocs, doc };
    
