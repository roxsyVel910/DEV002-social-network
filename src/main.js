import { register } from "./templates/viewRegister.js";

import './components/Register.js'

const view = document.querySelector('#view');

const routes = {
    '/': register,
}

console.log("ubicacion",window.location.pathname)
const prints = routes[window.location.pathname];

view.appendChild(prints());

