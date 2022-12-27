import { register } from "./templates/Register.js";
const main = document.querySelector('.main');

const routes = {
    '/': register,
}
const prints = routes[window.location.pathname];
main.appendChild(prints());

console.log("resiter", register);