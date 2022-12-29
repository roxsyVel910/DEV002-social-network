import { register } from "./templates/viewRegister.js";
import { login } from "./templates/viewLogin.js";
// console.log(login())


import './components/Register.js'

const root = document.querySelector('#root');

const routes = {
    '/': register,
    '/login':login
}

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    );

    while(root.firstChild){
        root.removeChild(root.firstChild);
    }

    root.appendChild(routes[pathname]());
};

// console.log("ubicacion",window.location.pathname)
const prints = routes[window.location.pathname];
root.appendChild(prints());

