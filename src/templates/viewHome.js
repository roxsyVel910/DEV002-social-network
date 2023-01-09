import { onNavigate } from "../main.js";
import { saveDatas, getDatas } from "../components/Home.js";



export const home = () => {
    const container = document.createElement('div');
    container.classList.add('containerHome');
  
 const view = ` 
    <div class="ContBienvMenuComent"> 
        <div class="ConBienv">
            <div class="ContLogo"> <img src="./img/perro.png" alt="imagen de perrito del logo"></div>
            <h1>DoggoS</h1>
        
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

    
        <div class="ContComent">
            <div class="ContBienv">
                <h2>Hola {"aquivakeusuario"}, ¿cómo estás hoy?</h2> 
            </div>
            
            <form id="formPost" class="formPost">
            <textarea type= "text" id="postArea" rows="5" cols="30"></textarea>
                    <button type="submit" id="btnPublicar">Publicar</button>
            </form>
        </div>
        
        <div id="contentPost" class="ContPost">
            <div class="ContContePost">
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
            </form>
           
        </div>

    </div>`
  

    container.innerHTML = view;

const formPost = container.querySelector("#formPost");
const btnPublicar = container.querySelector("#btnPublicar");
const contentPost = container.querySelector("#contentPost");
const postArea = container.querySelector("#postArea");

formPost.addEventListener("submit", (e) => {
    e.preventDefault();
    saveDatas(postArea.value);
    formPost.reset();
})

const querySanpshot = getDatas();

 







    return container;
}
