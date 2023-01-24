import { auth,  getFirestore,collection,  addDoc, getDocs, onSnapshot,doc, deleteDoc,getDoc, orderBy, query, updateDoc,arrayUnion,arrayRemove, Timestamp, updateProfile} from "../firebase/index.js";


const db = getFirestore();

// export const saveDatas = (post) => addDoc(collection(db, 'post'), {post});
export const saveDatasUser = (name,email,uid) => addDoc(collection(db, 'usuarios'), {name,email,uid});

export const saveDatasPost = (post) => addDoc(collection(db, 'post'), {
  user: auth.currentUser.displayName,
  uid: auth.currentUser.uid,
  date: Timestamp.fromDate(new Date()),
  post:  post,
  likes: [],
  likesUser: []
});


export const addLikeArr = (idPost, uid) => (
  firebase.firestore.collection('post').doc(idPost)
    .update({ likes: firebase.firestore.FieldValue.arrayUnion(uid) })
);



export const removeLikeArr = (idPost, uid) => (
  db().collection('post').doc(idPost)
    .update({ likes: db.FieldValue.arrayRemove(uid) })
);


export const getDatasPost = () => getDocs(collection(db, 'post'));

export const getDatasUser = () => getDocs(collection(db, 'usuarios'));

export const getOnDatas = (callback) => {
    const orderQuery = query(collection(db,'post'),orderBy("date","desc"));
    onSnapshot(orderQuery,(callback))};

export const deleteData = (id) => deleteDoc(doc(db, "post", id));

export const getData = (id) => getDoc(doc(db, "post", id));

export const updateData = (id, newFields) => updateDoc(doc(db, "post", id), newFields);

export { collection, onSnapshot, db, getDocs, doc }
    