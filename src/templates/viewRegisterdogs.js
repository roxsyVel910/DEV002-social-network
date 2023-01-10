import { auth } from "../firebase/index.js";
import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

import { onNavigate } from "../main.js";


export const registerDogs = () => {
    const container = document.createElement('div');
    container.classList.add('containerRegister_Perfil');
  
 const view = ` 
 <div class="containPerfil">
 <img src="img/perro.png" alt=""><span>DoggoS</span>
 <h2>Hola Carmen </h2>
 <div class="containPerfil">
     <h4>PERFIL DE TU ENGREIDO</h4>
         <span class="avatar">
             <img src="img/camara.png" alt="">
         </span>
         <input type="text" name="" id="" placeholder="Nombre del Perro" >
         <input type="text" placeholder="Raza" >
         <input type="text" placeholder="1 año" > 
         <input type="text" placeholder="Macho">
         <textarea name="" id="" cols="30" rows="5" placeholder="descipción"></textarea>
         <button>Guardar</button>
 </div>
</div>`
    
    
  container.innerHTML = view;
  return container;

}