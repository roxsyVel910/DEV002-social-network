import { onNavigate } from "../main.js"; 
import { logout } from "../components/logout.js";
import { saveDatas, getDatas, getOnDatas, deleteData, getData, updateData} from "../components/Home.js";
import { Timestamp } from "../firebase/index.js";


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
        <p id="username"></p>
        <p id="useremail"></p>

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


// para la funcion editar y actualizar
let editStatus = false;
let id = "";
const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };


 
formPost.addEventListener("submit", (e) => {
    e.preventDefault();
    //no permitir enviar el post vacio
    if (postArea.value === ""){
        messagePost.innerHTML = "es necesario compartir algo"
    } else if (!editStatus){
        saveDatas( postArea.value, Timestamp.fromDate(new Date()));
       
    } else {
        updateData(id, { post: postArea.value });
        editStatus = false;
        id = "";
        btnPublicar.innerHTML = "publicar";
    } 
   
    formPost.reset();

});

postArea.addEventListener("keyup", () => {
    messagePost.innerHTML = "";
  })

 

// --------mostrar los post de manera dinámica
// post es el objeto de los post, el data es el objeto de cada post y el .post(propiedad) es lo que esta en el value

getOnDatas((post) =>{
    // console.log(post);
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
                <div class="date">${contpost.date.toDate().toLocaleDateString('es-es', options)}</div>
                <div class="tools">
                    <img src="img/delete.png" class="btn-delete"  data-id="${element.id}">
                    <img src="img/editar.png" class="btn-edit" data-id="${element.id}">
                </div>
            </div>
            <div class="TextPost">
                <p class="newPost">${contpost.post} </p>
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

  

// --------------------------------delete
// // data.id(id puede ser sustituido por cualquier otro nombre)es codigo estandar de html/ 
// significa que se guardara datos dentro de ese boton/ es como crear una variable dentro de html

    const btndelete = list.querySelectorAll('.btn-delete');
    // console.log(btndelete)
    btndelete.forEach(btn => {
    // console.log(btn)
    // target es una propiedad del objeto del evento - dataset es una propiedad de target, la cual tiene el ID del boton
        btn.addEventListener('click', ({target:{dataset}}) => {
            deleteData(dataset.id);
            // console.log('delete', dataset.id);
        })
    });

// ------------------------------editar
    const btneditar = list.querySelectorAll('.btn-edit');
    
    // console.log(btneditar)
    btneditar.forEach(buton => {
    // console.log(buton)
        buton.addEventListener('click', async(e) => {
            try {
                const postEdit = await getData(e.target.dataset.id)
                const task = postEdit.data()
        
                editStatus = true;
               id = postEdit.id;
               postArea.value = task.post
               
               btnPublicar.innerHTML = "Save"
                } catch(error) {
                    console.log(error);
                }
        
              });
            });
        
            
        // const newPost = list.querySelectorAll('.newPost')
        // newPost.post = doc.data().post
        // console.log(newPost.post)
        // postArea.value = doc.data().post
        // const newPost = list.querySelector(`.newPost-${contpost.post}`)
        // console.log(newPost.post)

});





//-------------------------cerrar sesión
btnCerrarSesion.addEventListener("click", async() => {
    await logout();
    console.log("logout")
    onNavigate("/")
})





    return container;
}


