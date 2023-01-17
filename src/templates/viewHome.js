import { onNavigate } from "../main.js";
import { saveDatas, getDatas, db, collection, onSnapshot, getOnDatas} from "../components/Home.js";


console.log(db)

export const home = () => {
    const container = document.createElement('div');
    container.classList.add('containerHome');
  
 const view = ` 
 <div class="ConBienv">
 <div class="logo">
     <img src="./img/perrowhite.png" alt="imagen de perrito del logo">
     <h1>DoggoS</h1>
 </div>
 <button id="btnCerrarSesion"><img src="./img/cerrar-sesion.png" alt="icono cerrar sesión"> Cerrar Sesión</button>
</div>
<div class="contentPostPerfil">
 <div class="perfil">

 </div>
 <div>
     <div class="publicPost">
         <h2>HOLA!, <span id="nameusuario"></span></h2> 
         <form id="formPost" class="formPost">
             <textarea type= "text" id="postArea" rows="5" cols="30"></textarea>
             <div id="messagePost"></div>
             <button type="submit" id="btnPublicar">Publicar</button>
         </form>
     </div>
     <div id="contentPost" class="ContPost">
         <li class="list"></li>
     </div> 
 </div>
</div>`
  

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