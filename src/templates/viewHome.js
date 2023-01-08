import { auth } from "../firebase/index.js";
import { onNavigate } from "../main.js";
import { getStorage, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";



export const home = () => {
    const container = document.createElement('div');
    container.classList.add('containerHome');
  
 const view = ` 
    <div class="">
        <p>Hola, estas en el HOME!</p>
    </div>`
   

    container.innerHTML = view;

    return container;
}

const storage = getStorage();
const storageRef = ref(storage);
const imagesRef = ref(storage, 'images');


const sparkyRef = ref(storage, '/src/img/imgportada.jpg')

