import { saveDatasUser, saveDatasPost, getDatasUser, getDatasPost, deleteData, updateData, addLike, getData} from "../src/components/Home.js";
import { getFirestore, addDoc, collection, auth, Timestamp, getDocs, currentUser, deleteDoc,updateDoc, arrayUnion, getDoc, getAuth} from "../src/firebase/index.js";

// const db = getFirestore();
// const snap = collection(db, 'name')


jest.mock('../src/firebase/index.js', () => {
  return {
    getFirestore: jest.fn(() => {
      return { firestore: 'TEST' }
    }),

    collection: jest.fn(() => 'database'),

    auth: jest.fn(() => ({ currentUser: { displayName: "Hola", uid: "1234" } })),
    
    addDoc: jest.fn(() => {
      return Promise.resolve({ post: "name" })
    }),

    getDocs: jest.fn(() => {
      return Promise.resolve()
    }),
    
    updateDoc: jest.fn(() => {
      return Promise.resolve()
    }),

    deleteDoc: jest.fn(),

    doc: jest.fn(() => 'doc'),

    arrayUnion: jest.fn(),

    getDoc: jest.fn(() => "Doc")


  }
});

//  funcion addDoc USER
describe('test para añadir colección usuarios', () => {

  const name = "Mercedes";
  const email = "example@gmail.com";
  const uid = "09587272";

  it('deberia llamar a addDoc', async () => {
    await saveDatasUser(name, email, uid)
    expect(addDoc).toHaveBeenCalled()
  })

  it('deberia llamar a addDoc con name, email, uid y pasar los argumentos', async () => {
    console.log(auth.currentUser)
    await saveDatasUser(name, email, uid)
    expect(addDoc).toHaveBeenCalledWith('database', { name, email, uid })
  })

});

//  funcion addDoc POST
describe('test para añadir colección post', () => {
  const post = "Recomendación de comida para perros"

  it('deberia llamar a addDoc', async () => {
    await saveDatasPost(post)
    expect(addDoc).toHaveBeenCalled()
  })

  it('deberia llamar a addDoc con post como argumento', async () => {
    addDoc.mockClear();
    await saveDatasPost(post)
    expect(addDoc).toHaveBeenCalledWith('database',{
      user: "Usuario",
      uid: "123",
      date: "1-1-1111",
      post: "Hola",
      likes: 0,
      likesUser: []
    })
  })

});

//Funcion GetDocs USER
describe("test para traer los usuarios", () => {

  it('deberia llamar a getDocs', async () => {
    await getDatasUser()
    expect(getDocs).toHaveBeenCalled();

  })
  it('deberia llamar a getDocs con su arguemntos', async () => {
    getDocs.mockClear();
    await getDatasUser()
    expect(getDocs).toHaveBeenCalledWith('database');

  })

});

//Funcion GetDocs POST
describe("test para traer la collecion de post", () => {

  it('deberia llamar a getDocs', async () => {
    await getDatasPost()
    expect(getDocs).toHaveBeenCalled();

  })
  it('deberia llamar a getDocs con su arguemntos', async () => {
    getDocs.mockClear();
    await getDatasPost()
    expect(getDocs).toHaveBeenCalledWith('database');

  })

});

//Funcion UpdateDoc
describe("test para actualizar post", () => {
  const id = "098765421"

  it('deberia actualizar post', async () => {
    await updateData(id)
    expect(updateDoc).toHaveBeenCalled();

  })
  it('deberia actualizar post con su contenido', async () => {
    updateDoc.mockClear();
    const id = 'abc123';
    const newFields = { post:'desparacitar perrito siempre'}
    await updateData(id, newFields);
    expect(updateDoc).toHaveBeenCalledWith('doc', { post:'desparacitar perrito siempre'});

  })

});


// funcion delete data
describe("test para borrar un documento", () => {
  const id = "098765421"

  it('deberia llamar a deleteDoc', async () => {
    await deleteData(id)
    expect(deleteDoc).toHaveBeenCalled();
  })

  it('deberia llamar a deleteDoc con collection como argumento', async () => {
    deleteDoc.mockClear();
    await deleteData(id)
    expect(deleteDoc).toHaveBeenCalledWith('doc');

  })
});

// funcion obtener un documento
describe("test para obtener un documento", () => {
  const id = "0988765";

  it('deberia llamar a getDoc', async () => {
    await getData(id)
    expect(getDoc).toHaveBeenCalled();
  })

  it('deberia llamar a getDoc con id como argumento', async () => {
    getDoc.mockClear();
    await getData(id)
    expect(getDoc).toHaveBeenCalledWith('doc');

  })
})

// funcion añadir likes
describe("test para sumar likes", () => {
  const likes = 0;
  const id = "0988765";
  const uid = "12334553";

  it('deberia llamar a arrayUnion', async () => {
    await addLike(id,likes,uid)
    expect(updateDoc).toHaveBeenCalled();
  })

  it('deberia llamar a arrayUnion con likes como argumento', async () => {
    updateDoc.mockClear();
    await addLike(id,likes, uid)
    expect(updateDoc).toHaveBeenCalledWith('doc', {arrayUnion});

  })
})