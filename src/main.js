
//Aquí va todo lo referente a DOM

//Para registrar el login del usuario y acceder a la siguiente pantalla
  let us = document.getElementById("user");
  let password1 = document.getElementById("password");
  let ingresar = document.getElementById("btn-login");
  let encabezados =document.getElementById("encabezado");

  let visualizar =document.getElementById("visualizar-sedes");
  visualizar.style.display = "none";
  encabezados.style.display="none";


// Botones de login
ingresar.addEventListener("click", datosUsuario = ()=> {
    let usuario = us.value;
    let password2 = password1.value;
        if ((usuario == "Raque")||(password2 =="R2")) {
          login.style.display="none";
          logoPrincipal.style.display="none";
          visualizar.style.display = "block";
          encabezados.style.display = "block";
    }else{
        alert("Datos Incorrectos");
}
});

// para segunda pantalla
