
//Aquí va todo lo referente a DOM

//Para registrar el login del usuario y acceder a la siguiente pantalla
  let us = document.getElementById("user");
  let password1 = document.getElementById("password");
  let ingresar = document.getElementById("btn-login");
  let encabezados =document.getElementById("encabezado");
  let sege= document.getElementById("sedes-gen");
  let logo = document.getElementById("log");
  let verData = document.getElementById('visualizar-data');



  encabezados.style.display = "none";
  sege.style.display = "none";
  logo.style.display = "none";
  verData.style.display = "none";



// Botones de login
ingresar.addEventListener("click", datosUsuario = ()=> {
    let usuario = us.value;
    let password2 = password1.value;
        if ((usuario =="")||(password2 =="")) {

          login.style.display="none";
          logoPrincipal.style.display="none";
          sege.style.display= "block";
          encabezados.style.display = "block";
          sege.style.display = "block";
          logo.style.display = "block";


    }else{
        alert("Datos Incorrectos");
}
});

// para segunda pantalla


//Función para visualizar las sedes
//Creando botones para visualizar las sedes

const drawCampus = (laboratoria) => {

  const sedes = Object.keys(laboratoria);
    //console.log(sedes);

  const verSedes = document.getElementById('ver-sedes');
  sedes.forEach((sede) =>{
    const optionSede = document.createElement('button');
    optionSede.innerHTML = sede;
    verSedes.appendChild(optionSede);
    //Hacemos referencia a un evento para después visualizar las sedes

    optionSede.addEventListener("click", () => drawGen(laboratoria))
    //option.addEventListener("click", () => gen(laboratoria))
  });
};
  //Función para visualizar las sedes
  //Creando botones para visualizar las sedes

const drawGen = (laboratoria) => {
  //console.log(laboratoria[event.target.innerHTML].generacion); // muestra objetos con objetos de array
  //console.log(event.target.innerHTML);
  //if(event.target.innerHTML == )

  const viewGen = document.getElementById('ver-gen');
  if(viewGen.hasChildNodes()){
    let limpiar = viewGen.removeChild();
  } else {
    for( i in laboratoria[event.target.innerHTML].generacion){
      console.log(laboratoria[event.target.innerHTML].generacion);
      //console.log(i);
      let generaciones = i;
      //const viewGen = document.getElementById('ver-gen');
      const optionGen = document.createElement('button');
      optionGen.innerHTML = generaciones;
      viewGen.appendChild(optionGen);
      // console.log(generaciones);
      //optionGen.addEventListener("click", () => drawEst(laboratoria))
    };
  };
  //viewGen.parentNode.removeChild(viewGen)
  return;
};




//
 //const drawEst = (laboratoria) => {
//   console.log(laboratoria[event.target.innerHTML].generacion.estudiantes)
//   const viewEst = document.getElementById('ver-est')

//
//
// }
