
/*Aquí va todo lo referente a DOM*/

//Para registrar el login del usuario y acceder a la siguiente pantalla

//let usuario = document.getElementById("usuario");
//let password = document.getElementById("password");

function enviarLogin() {
  let usuario = document.getElementById("usuario");
  let password = document.getElementById("password");
  if ((usuario.value == "")||(password.value =="")) {
    document.getElementById("visualizar-sedes").innerHTML = "Bienvenid@ " + usuario.toUpperCase();
    login.style.display = "none";
    visualizar.style.display = "block";
  }else {
    window.alert("Los campos usuario y contraseña no pueden estar vacios")
  };
};
