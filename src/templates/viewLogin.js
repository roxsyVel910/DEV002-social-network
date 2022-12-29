export const login = () => {
    const container = document.createElement('div');
    container.classList.add('containerLogin');
  
 const view = ` 
    <div class="contentHome">
        <img class="imghome" src="../img/imgportada.jpg" alt="imagen de portada">  
        <p>DoggoS es una app para duenos de perros, en el que podras encontrar y compartir recomendaciones sobre el cuidado de
        tus engreidos. Te invitamos a unirte y ser parte de esta gran comunidad doglover.
        ¿Qué esperas? ¡No te pierdas más novedades!</p>
    </div> 
    <div class="sectionForm">
        <img src="./img/perro.png" alt="imagen de perrito del logo">
        <h1>DoggoS</h1>
        <h2>Bienvenido(a)</h2>
        <h3>REGISTRATE</h3>
        <form action="" id="formRegister">
            <input type="text" id="emailLogin" placeholder="Correo">
            <div id="messageEmail"></div>
            <input type="password" id="passwordLogin" placeholder="Contraseña" autocomplete ="off">
            <div id="messagePassword"></div>
            <button type="submit" id="register">INICIA SESIÓN</button>
        </form>
        <p class="question" >¿NO tienes una cuenta?
            <input id="registrate" type="" value="REGISTRATE">
        </p>
    </div>`
    
  container.innerHTML = view;
  return container;
  
}