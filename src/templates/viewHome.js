import { onNavigate } from "../main.js"; 
import { logout, viewUser } from "../components/logout.js";
import { saveDatasPost, getDatasPost, getOnDatas, deleteData, getData, updateData, getDatasUser, addLikeArr, removeLikeArr} from "../components/Home.js";


export const home = () => {
    const container = document.createElement('div');
    container.classList.add('containerHome');
  
 const view = ` 
 <div class="ConBienv">
    <div class="logo">
        <img src="./img/perrowhite.png" alt="imagen de perrito del logo">
        <h1>DoggoS</h1>
    </div>
    <div class="cerrar-sesion" id="btnCerrarSesion">
        <img src="./img/cerrar-sesion.png" alt="icono cerrar sesión">
        <p class="pcerrarsesion">Cerrar Sesión</p>
    </div>
</div>
<div class="contentPostPerfil">
    <div id="perfil" class="perfil">
        <h2>Perfil</h2>
    </div>
    <div class="interaccionPost">
         <div class="publicPost">
             <div class="saludo" id="saludo" ></div> 
             <form id="formPost" class="formPost">
                <textarea type= "text" id="postArea" rows="5" cols="30" placeholder="¿Tienes una recomendacion para compartir?\n\n... escribe aqui "></textarea>
                <div id="messagePost"></div>
                <button type="submit" id="btnPublicar">Publicar</button>
             </form>
         </div>
         <p class="palabraRecomendaciones" >RECOMENDACIONES</p>
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
const perfil = container.querySelector("#perfil");
const saludo = container.querySelector("#saludo");

// para la funcion editar y actualizar
let editStatus = false;
let id = "";
const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };


 
formPost.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    // const user = viewUser();
    // const arrayLikes = []
    //no permitir enviar el post vacio
    if (postArea.value === ""){
        messagePost.innerHTML = "es necesario compartir algo"
    } else if (!editStatus){
        saveDatasPost(postArea.value);
    } else {
        updateData(id, { post: postArea.value });
        editStatus = false;
        id = "";
        btnPublicar.innerHTML = "publicar";
    } 
   
    formPost.reset();

})

postArea.addEventListener("keyup", () => {
    messagePost.innerHTML = "";
  })

 
// --------mostrar los post de manera dinámica
// post es el objeto de los post, el data es el objeto de cada post y el .post(propiedad) es lo que esta en el value
getOnDatas((post) =>{
    // console.log(post);
  list.innerHTML=""
   const user = JSON.parse(localStorage.getItem("user"));

  post.forEach((element) => {
    
    const contpost=element.data();
    // console.log(contpost)

    if(user.uid === contpost.uid){
        list.innerHTML += `
    <div class ="containerPost" >
        <div class="containPost">
            <div class="headerPost">
                <div class="user">
                    <img src="./img/usuario.png" alt="" /> 
                    <span>${contpost.user}</span>
                </div>
                <div class="header2">
                    <div class="date">${contpost.date.toDate().toLocaleDateString('es-es', options)}</div>
                    <div class="tools">
                        <img src="img/delete.png" class="btn-delete"  data-id="${element.id}">
                        <img src="img/editar.png" class="btn-edit" data-id="${element.id}">
                    </div>
                </div>
            </div>
            <div class="TextPost">
                <p class="newPost">${contpost.post} </p>
            </div>         
        </div>
        <div class = "likesandCommet">
            <div class="DivLikes">
                <img class="btnLike" src= "img/LikepawWhite.png "/>
                <p><span class="countLikes"> ${contpost.post.length} </span>Likes</p>
            </div>
        </div>
    </div>`
    } else {
        list.innerHTML += `
    <div class ="containerPost" >
        <div class="containPost">
            <div class="headerPost">
                <div class="user">
                    <img src="./img/usuario.png" alt="" /> 
                    <span> ${contpost.user} </span>
                </div>
                <div class="date">${contpost.date.toDate().toLocaleDateString('es-es', options)}</div>
            </div>
            <div class="TextPost">
                <p class="newPost">${contpost.post} </p>
            </div>         
        </div>
        <div class = "likesandCommet">
            <div class="divLikes">
                <img class="btnLike" src= "img/LikepawWhite.png "/>
                <p class="CountLikes"><span>${contpost.post.length}</span>Likes</p>
            </div>
        </div>
    </div>`

    }
    

   // ---------------------------- array likes
const btnLike = list.querySelector(".btnLike");
const CountLikes = list.querySelectorAll(".CountLikes");




    btnLike.addEventListener('click', () => {

   
      if (contpost.post.includes(user.uid )) {
        removeLikeArr(element.id, user.uid );
        console.log("1")
      } else {
        addLikeArr(element.id, user.uid );
        console.log("menos 1")
      } 
    });
      
  });

   
      

     
// -------------------------  boton 3 puntos
//   const btneditdelete = list.querySelector(".btneditdelete");
//   const listadebotones = list.querySelector(".listadebotones");
  
  
//         btneditdelete.addEventListener('click',() => {
//         listadebotones.classList.toggle('mostrar')
//         })

  
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
        
            






});


getDatasUser() 
.then ((usuarios) => {
  // console.log(users)
 
  const user = JSON.parse(localStorage.getItem("user"));
//   console.log(user)
  perfil.innerHTML="";
  saludo.innerHTML="";

  usuarios.forEach(doc => {

    //   console.log(doc.data())
    

      if(doc.data().uid === user.uid){
        // console.log(doc.data());
          perfil.innerHTML += 
      `<h2>Perfil</h2>
      <div class="imgUsuario">
      <img src='./img/user.png' alt=""></div>
      <p class="pusuario">Usuario</p>
      <p class="displayname">${doc.data().name}</p>
      <p class="pcorreo">Correo</p>
      <p class="emailUser">${doc.data().email}</p>`

      saludo.innerHTML += `<h2>HOLA!, ${doc.data().name}</h2>`
      // imprimir desde aqui el nombre del usuario que esta en el post

      } 
    //   else {
    //       perfil.innerHTML += 
    //   `<h2>Perfil</h2>
    //   <div class="imgUsuario">
    //   <img src='./img/user.png'alt=""></div>
    //   <p class="pusuario">Usuario</p>
    //   <p class="displayname">${user.displayName}</p>
    //   <p class="pcorreo">Correo</p>
    //   <p class="emailUser">${user.email}</p>`

    //   saludo.innerHTML += `<h2>HOLA!, ${user.displayName}</h2>`

    //   }

  })
  

})


//-------------------------cerrar sesión
btnCerrarSesion.addEventListener("click", async() => {
    await logout();
    localStorage.removeItem("user")
    console.log("logout")
    onNavigate("/")
})




    return container;
}

{/* <button id="btneditdelete" class="btneditdelete"><img src="./img/tres-puntos.png" alt=""></button>
<ul class="listadebotones"> */}