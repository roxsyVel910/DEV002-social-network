import { register } from "./templates/viewRegister.js";
import { login } from "./templates/viewLogin.js";

import './components/Register.js'

const view = document.querySelector('#view');

const routes = {
    '/': register,
    '/login':login
}

console.log("ubicacion",window.location.pathname)
const prints = routes[window.location.pathname];

view.appendChild(prints());

