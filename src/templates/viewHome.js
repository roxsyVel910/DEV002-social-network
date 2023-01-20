import { onNavigate } from "../main.js"; 
import { logout } from "../components/logout.js";

import { saveDatas, getDatas, getOnDatas, deleteData, updateData, getData } from "../components/Home.js";


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
                <textarea type= "text" class ="postArea" id="postArea" rows="5" cols="30" placeholder="¿Tienes una recomendacion para compartir?\n\n... escribe aqui "></textarea>
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
let editStatus = false;
let id = "";


//post vacio 

formPost.addEventListener("submit", async (e) => {
    e.preventDefault();
    const postEditado = postArea.value
    try {

     if (!editStatus){
        await saveDatas( postEditado);
       
        
    }
    else {
    await updateData(id, { post: postEditado });

        editStatus = false;
        id = "";
        btnPublicar.innerHTML = "publicar";
    }

    formPost.reset();
} catch (error){
    console.log(error);
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
              <span > <img src= "img/editar.png " class="btn btn-primary btn-edit"  data-id="${element.id}"/></span>
              </div>

          </div>
          <div class="TextPost">
          <p>${contpost.post} </p>

              

          </div>         
        </div>
        <div class = "likesandCommet">
            <div class="DivLikes">
                <img class="btnLike" src= "img/LikepawWhite.png "/>
                <p class="CountLikes"><span>20</span>Likes</p>
            </div>
            <div class="DivComment">
                <img class="btnComment" src= "img/commentWhite.png " />
                <p class="CountComment"><span>3</span>Comments</p>
            </div>
        </div>
            
     </div>`
     

  
    
  });

  



  const btndelete = list.querySelectorAll('.btn-delete');

btndelete.forEach(btn => {
    btn.addEventListener('click', ({target:{dataset}}) => {

        deleteData(dataset.id);
        console.log('delete', dataset.id);
    })
});


const btnsEdit = list.querySelectorAll(".btn-edit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        try {
        const postEdit = await getData(e.target.dataset.id)
        const task = postEdit.data()

        editStatus = true;
       id = postEdit.id;
       postArea.value = task.post
       
       

       btnPublicar.innerHTML = "Save Change"
        } catch(error) {
            console.log(error);
        }

      });
    });



})


 //cerrar sesión
btnCerrarSesion.addEventListener("click", async() => {
    await logout();
    console.log("logout")
    onNavigate("/")
})





    return container;
}


