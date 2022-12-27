  
export const register = () => {

    const view = ` <h2>REGISTRATE</h2>
    <form action="" id="formRegister">
      <input type="text" id="nameRegister" placeholder="Nombres y Apellidos">
      <input type="text" id="emailRegister" placeholder="Correo">
      <div id="messageEmail"></div>
      <div id="anotherMessageEmail"></div>
      <input type="password" id="passwordRegister" placeholder="contrasena">
      <div id="messagePassword"></div>
      <input type="password" id="passwordConfirm" placeholder="Digite nuevamente su contrasena">
      <div id="messagePasswordConfirm"></div>
      <button type="submit" id="register">REGISTRARSE</button>
    </form>`
    const divView = document.createElement('div');
    divView.className = 'cont';
    divView.innerHTML = view;

 }
 

