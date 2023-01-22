import { auth, getFirestore,collection,  addDoc, getDocs, onSnapshot,doc, deleteDoc,getDoc, orderBy, query, updateDoc} from "../firebase/index.js";


export const db = getFirestore();



export const createPost = (uid, name, post, date) => addDoc(collection(db, 'posts'), {
  uid,
  name,
  post,
  date,
  likes: []
});

export const createUser = (uid, email, name) =>  addDoc(collection(db,'users'), {
  uid,
  email,
  name
});

// export const saveDatas = (post) => addDoc(collection(db, 'post'), {post});
export const saveDatas = (uid, post,date) => addDoc(collection(db, 'posts'), {uid,post,date});



 

export const getDatas = () => getDocs(collection(db, 'posts'));

export const getOnDatas = (callback) => {
    const orderQuery = query(collection(db,'posts'),orderBy("date","desc"));
    onSnapshot(orderQuery,(callback))};

// orderBy("date","desc")

export const deleteData = (id) => deleteDoc(doc(db, 'posts', id));

export const getData = (id) => getDoc(doc(db, 'posts', id));

export const updateData = (id, newFields) =>
  updateDoc(doc(db, 'posts', id), newFields);

export { collection, onSnapshot, getDocs, doc };
    
