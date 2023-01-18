import { onNavigate } from "../main.js"; 
import { logout } from "../components/logout.js";

import { saveDatas, getDatas, getOnDatas, deleteData} from "../components/Home.js";


export const home = () => {
    const container = document.createElement('div');
    container.classList.add('containerHome');
  
 const view = ` 
 <div class="ConBienv">
    <div class="logo">
        <img src="./img/perrowhite.png" alt="imagen de perrito del logo">
        <h1>DoggoS</h1>
    </div>
    <div class="cerrar-sesion">
        <img id="btnCerrarSesion" src="./img/cerrar-sesion.png" alt="icono cerrar sesión">
        <p class="pcerrarsesion" >Cerrar Sesión</p>
    </div>
</div>
<div class="contentPostPerfil">
    <div class="perfil">

    </div>
    <div>
         <div class="publicPost">
             <h2>HOLA!, <span id="nameusuario"></span></h2> 
             <form id="formPost" class="formPost">
                <textarea type= "text" id="postArea" rows="5" cols="30" placeholder="¿Tienes una recomendacion para compartir?\n\n... escribe aqui "></textarea>
                <div id="messagePost"></div>
                <button type="submit" id="btnPublicar">Publicar</button>
             </form>
         </div class="contentDinamico">
         <p>RECOMENDACIONES</p>
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
const btnCerrarSesion = container.querySelector("#btnCerrarSesion")
const messagePost = container.querySelector("#messagePost");

//post vacio 
formPost.addEventListener("submit", (e) => {
    e.preventDefault();
    if (postArea.value === ""){
        messagePost.innerHTML = "es necesario compartir algo"
    } else {
    saveDatas(postArea.value);
    formPost.reset();
    }
})

postArea.addEventListener("keyup", () => {
    messagePost.innerHTML = "";
  })

 




    
getOnDatas((post) =>{
  list.innerHTML=""
  post.forEach((element) => {
    const contpost=element.data();
    list.innerHTML += `
    <div class ="containerPost" >
        <div class="containPost">
          <div class="headerPost">
              <div class="user">
              <img src="img/usuario.png" alt="" /> 
              <span> Carmen </span>
              </div>
              <div class="date"></div>
              <div class="tools">
              <span > <img src ="img/delete.png" class="btn btn-primary btn-delete"  data-id="${element.id}"> </span>
              <span class="btn btn-primary btn-editar"  data-id=""> <img src= "img/editar.png " /></span>
              </div>

          </div>
          <div class="TextPost">
              <p>${contpost.post} </p>
          </div>         
        </div>
        <div class = "interactionPost">
        <span class="btnLike"  data-id=""> <img src= "img/LikepawWhite.png " /></span>
        <span class="CountLikes"  data-id="">      25   likes       </span>
        <span class="btnComment"  data-id=""> <img src= "img/commentWhite.png " />    Comment  </span>
        </div>
  
            
     </div>`
     
    
  });

  



  const btndelete = list.querySelectorAll('.btn-delete');

btndelete.forEach(btn => {
    btn.addEventListener('click', ({target:{dataset}}) => {
        deleteData(dataset.id);
        console.log('delete', dataset.id);
    })
})

})


 //cerrar sesión
btnCerrarSesion.addEventListener("click", async() => {
    await logout();
    console.log("logout")
    onNavigate("/")
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