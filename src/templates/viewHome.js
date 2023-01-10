import { onNavigate } from "../main.js";
import { saveDatas, getDatas } from "../components/Home.js";



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


window.addEventListener('DOMContentLoaded', () => {
    const querySanpshot = getDatas()
    .then((querySanpshot) => {
        // console.log(querySanpshot)
        querySanpshot.forEach(element => {
            const contpost = element.data();
            list.innerHTML += `<ul>${contpost.post} </ul>`
            console.log(element.data())
        });
    })

    

})



    return container;
}



            /* <div class="ContContePost">
                <p>Aquí va el contenido del comentario</p>
            </div>
                <div class="ContLikes">
                    <button class="btnLike">Like</button>
                    <p class="contadorLikes">0</p>
                </div>
                <div class="ContOpciones">
                    <button class="btnEditar">...</button>
                </div>
            <form class="ContestComentario">
                <input type="text" placeholder="Escribe tu comentario aquí">
                <button type="submit" class="btnComentar">Comentar</button>
            </form> */