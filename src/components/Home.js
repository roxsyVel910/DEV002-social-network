import { auth, getFirestore,collection,  addDoc, getDocs, onSnapshot,doc, deleteDoc,getDoc, orderBy, query, updateDoc} from "../firebase/index.js";


const db = getFirestore();

// export const saveDatas = (post) => addDoc(collection(db, 'post'), {post});
export const saveDatasUser = (name,email,uid) => addDoc(collection(db, 'usuarios'), {name,email,uid});

export const saveDatasPost = (user,uid,date,post,likes) => addDoc(collection(db, 'post'), {user,uid,date,post,likes});
 
<<<<<<< HEAD
 

export const getDatas = () => getDocs(collection(db, 'newpost'));
=======
export const getDatas = () => getDocs(collection(db, 'post'));

export const getDatasUser = () => getDocs(collection(db, 'usuarios'));
>>>>>>> refs/remotes/origin/main

export const getOnDatas = (callback) => {
    const orderQuery = query(collection(db,'post'),orderBy("date","desc"));
    onSnapshot(orderQuery,(callback))};

// orderBy("date","desc")

export const deleteData = (id) => deleteDoc(doc(db, "post", id));

export const getData = (id) => getDoc(doc(db, "post", id));

export const updateData = (id, newFields) =>
  updateDoc(doc(db, "post", id), newFields);

export { collection, onSnapshot, db, getDocs, doc };
    
