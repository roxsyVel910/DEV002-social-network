import { register } from "./templates/viewRegister.js";

const main = document.querySelector('#main');

const routes = {
    '/': register
}
console.log("ubicacion",window.location.pathname)
const prints = routes[window.location.pathname];

main.appendChild(prints());

