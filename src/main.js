
// Aquí va todo lo referente a DOM

// Para registrar el login del usuario y acceder a la siguiente pantalla
let us = document.getElementById('user');
let password1 = document.getElementById('password');
let ingresar = document.getElementById('btn-login');
let encabezados = document.getElementById('encabezado');
let sege = document.getElementById('sedes-gen');
let logo = document.getElementById('log');
let geEst = document.getElementById('gen-est');
let tabla = document.getElementById('table-est');
let indicador = document.getElementById('topicos');
// let verData = document.getElementById('visualizar-data');


encabezados.style.display = 'none';
sege.style.display = 'none';
logo.style.display = 'none';
geEst.style.display = 'none';
tabla.style.display = 'none';
indicador.style.display = 'none';


// Botones de login
ingresar.addEventListener('click', datosUsuario = ()=> {
  let usuario = us.value;
  let password2 = password1.value;
  if ((usuario === '')||(password2 === "")) {
    login.style.display="none";
    logoPrincipal.style.display="none";
    sege.style.display = 'block';
    encabezados.style.display = 'block';
    logo.style.display = 'block';
    geEst.style.display = 'block';
    tabla.style.display = 'none';
    indicador.style.display = 'none';
  } else {
    alert('Datos Incorrectos');
}
});

// para segunda pantalla


// Función para visualizar las sedes
// Creando botones para visualizar las sedes

const drawCampus = (laboratoria) => {
  const sedes = Object.keys(laboratoria);
  // console.log(sedes);

  const verSedes = document.getElementById('ver-sedes');
  sedes.forEach((sede) =>{
    const optionSede = document.createElement('button');
    optionSede.innerHTML = sede;

    verSedes.appendChild(optionSede);
    // Hacemos referencia a un evento para después visualizar las sedes

    optionSede.addEventListener('click', () => drawGen(laboratoria, event.target.innerHTML))
    // option.addEventListener("click", () => gen(laboratoria))
  });
};
  // Función para visualizar las sedes
  // Creando botones para visualizar las sedes

const drawGen = (laboratoria, campus) => {
  // console.log(laboratoria[event.target.innerHTML].generacion); // muestra objetos con objetos de array
  // console.log(event.target.innerHTML);
  // if(event.target.innerHTML == )

  const viewGen = document.getElementById('ver-gen');
  viewGen.innerHTML = '';
  // if(viewGen.hasChildNodes()){
  //   let limpiar = viewGen.removeChild();
  // } else {
  for (i in laboratoria[event.target.innerHTML].generacion) {
    // console.log(laboratoria[event.target.innerHTML].generacion);
    // console.log(i);
    let generaciones = i;
    // const viewGen = document.getElementById('ver-gen');
    const optionGen = document.createElement('button');
    optionGen.innerHTML = generaciones;
    viewGen.appendChild(optionGen);
    // console.log(generaciones);
    sege.style.display = 'block';
    logo.style.display = 'block';
    geEst.style.display = 'block';
    indicador.style.display = 'none';
    tabla.style.display = 'none';

    optionGen.addEventListener('click', () => drawEst(laboratoria, campus))
  };

  // };
  return;
};


const drawEst = (laboratoria, sede) => {
  // console.log(laboratoria[event.target.innerHTML].generacion)
  // console.log(event.target.innerHTML);
  // console.log(laboratoria, sede);
  const arrayStudent = computeStudentsStats(laboratoria);
  // console.log(event.target.innerHTML);
  const newArrayStudent = arrayStudent.filter((item) => {
    // console.log(item.campus == sede && event.target.innerHTML == item.generation);
    return item.campus === sede && event.target.innerHTML === item.generation;
  });
   console.log(newArrayStudent);
  // console.log(arrayStudent[sede].generacion[event.target.innerHTML][i]);
  // console.log(newArrayStudent.length);

  let indicador1 = document.getElementById('topico-uno');
  let totalEstudiantes = newArrayStudent.length;
  indicador1.innerHTML = 'Número total de estudiantes: ' + totalEstudiantes;

  let indicador0 = document.getElementById('topico-cero')
  let indicador2 = document.getElementById('topico-dos');
  let indicador3 = document.getElementById('topico-tres');
  let indicador4 = document.getElementById('topico-cuatro');

  let alumnasA = 0;
  let alumnasB = 0;
  let alumnasC = 0;
  for (let i = 0; i < newArrayStudent.length; i++) {
    let completitud = newArrayStudent[i].stats['status'];

    // console.log(Object.values(newArrayStudent[i].stats));
    if (completitud === 'Por arriba de 90%') {
      result1 = alumnasA ++
      console.log(alumnasA);
    } else if (completitud === 'En el promedio de 60-90') {
      alumnasB ++
      console.log(alumnasB);
    } else if (completitud === 'Por debajo de 60%') {
      alumnasC ++
      console.log(alumnasC);
    }
  };
  indicador2.innerHTML = '# alumnas con completitud > 90%: ' + alumnasA;
  // indicador2.innerHTML = Math.round(alumnasA * 100 / totalEstudiantes)
  indicador3.innerHTML = '# alumnas con completitud de 60-90%: ' + alumnasB;
  indicador4.innerHTML = '# alumnas con completitud < 60%: ' + alumnasC;
  // indicador2.innerHTML = 'Alumnas con 90% de completitud ' + totalEstNoventa;
  sege.style.display = 'block';
  logo.style.display = 'block';
  geEst.style.display = 'block';
  indicador.style.display = 'block';
  tabla.style.display = '';



  let datos = document.getElementById('container');
  let result = '';
  for (let i = 0; i < newArrayStudent.length; i++) {
    //console.log(newArrayStudent[i].name);
    result += `
      <section id="table-est">


             <table class="table table"  id="pintar">
                 <tbody>
                 <tr>
                 <td> ${newArrayStudent[i].name}</td>
                 <td> ${newArrayStudent[i].email}</td>
                 <td> ${newArrayStudent[i].stats['completedPercentage']}</td>
                 </tr>

                 </tbody>
               </table>



         </div>
       </section>`;
  }
  datos.innerHTML = result;



};
