import { onNavigate } from "../main.js";
import { saveDatas, getDatas, db, collection, onSnapshot, getOnDatas} from "../components/Home.js";


console.log(db)

export const home = () => {
    const container = document.createElement('div');
    container.classList.add('containerHome');
  
 const view = ` 
        <div class="ConBienv">
            <img src="./img/perro.png" alt="imagen de perrito del logo">
            <h1>DoggoS</h1>
        </div>
         <div class="publicPost">
                <h2>Hola {"aquivakeusuario"}, ¿cómo estás hoy?</h2> 
                <form id="formPost" class="formPost">
                    <textarea type= "text" id="postArea" rows="5" cols="30"></textarea>
                    <button type="submit" id="btnPublicar">Publicar</button>
                </form>
         </div> 
        <div class="ContMenu">
            <ul>
                <li id="btnHome">Home</li>
                <li id="btnBuscador">Buscador</li>
                <li id="btnPerfil">Perfil</li>
                <li id="btnPerfilPerro">Perfil perro</li>
                <li id="btnCerrarSesion">Cerrar sesión</li>
            </ul>
        </div>
        <div id="contentPost" class="ContPost">
            <li class="list"></li>
        </div> `
  

    container.innerHTML = view;

const formPost = container.querySelector("#formPost");
const btnPublicar = container.querySelector("#btnPublicar");
const contentPost = container.querySelector("#contentPost");
const postArea = container.querySelector("#postArea");
const list = container.querySelector('.list');

formPost.addEventListener("submit", (e) => {
    e.preventDefault();
    saveDatas(postArea.value);
    formPost.reset();
})



    
getOnDatas((post) =>{
  list.innerHTML=""
  post.forEach((element) => {
    const contpost=element.data();
    list.innerHTML +=`<ul>${contpost.post} </ul>`
    
  })

})
 



    return container;
}


// window.addEventListener('DOMContentLoaded', () => {
//     console.log(collection)
//     console.log("pasocolection")
    
    // onSnapshot(collection, "post"), (querySnapshot)=> {
    //     querySnapshot.forEach((element) => {
    //         console.log("anteselement.data()")
    //         console.log(element.data())
    //         console.log("DESelement.data()")

    //         const contpost = element.data();
    //         list.innerHTML += `<ul>${contpost.post} </ul>`
    //         console.log(element.data())
    //     });
    // }
  




    // const querySnapshot = getDatas()
    // .then((querySnapshot) => {
    //     console.log(querySnapshot)
    //     querySnapshot.forEach(element => {
    //         const contpost = element.data();
    //         list.innerHTML += `<ul>${contpost.post} </ul>`
          
    //     });
    // })