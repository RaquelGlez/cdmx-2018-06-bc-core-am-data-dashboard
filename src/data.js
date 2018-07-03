
//Guardamos la ubicación del JSON en una variable
const json = "https://raw.githubusercontent.com/RaquelGlez/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json"
// o jalarlo mediante el servidor
//const json = '../data/laboratoria.json';

const getData = () => {
  fetch(json)
  .then(response => response.json())
  .then((res) => {
    //console.log(res)
    drawCampus(res);  //activar para crear botones con sedes
    //drawGen(res);
    //window.computeGenerationsStats(res);  // linea necesaria para ejecutar función y poder ver en consola

  })
  .catch((error) =>{
    console.log('Error');
  });
}
getData();

//
// //Creando botones para visualizar las sedes dentro de  con botones de opciones de sedes, ¿como separar los botones?

const drawCampus = (laboratoria) => {

  const sedes = Object.keys(laboratoria);
  console.log(sedes);
  const verSedes = document.getElementById('ver-sedes');
  sedes.forEach((sede) =>{
    const option = document.createElement('button');
    option.innerHTML = sede;
    //option.addEventListener("click", gen)
    verSedes.appendChild(option);
    option.addEventListener("click", () => drawGen(laboratoria))
    //option.addEventListener("click", () => gen(laboratoria))
  });
};

const drawGen = (laboratoria) => {
  //console.log(laboratoria[event.target.innerHTML].generacion);
  //console.log(event.target.innerHTML);
  //if(event.target.innerHTML == )



  for( i in laboratoria[event.target.innerHTML].generacion){
    //console.log(i);
    let generaciones = i;
    

    const viewGen = document.getElementById('ver-gen');
    const option = document.createElement('button');
    option.innerHTML = generaciones;
    viewGen.appendChild(option);
    // console.log(generaciones);

  };
};





//Ahora trabajamos con la funcion global, para obtener el objeto solicitado
/*
 window.computeGenerationsStats = (laboratoria) => {
    const generationsArray = [];
    // const obj = {
    //     campus: '',
    //     generation: '',
    //     average: '',
    //     count: ''
    // };


     for (key in laboratoria) {

       //console.log(key);  //muestra las sedes
       //console.log(laboratoria[key]);  // muestra las generaciones
       //console.log(laboratoria[key].generacion);  // muestra un objeto con las generaciones por sede
       //console.log(Object.keys(laboratoria[key].generacion));  //muestra un array con el nombre de las generaciones por sede

       //guardar las keys en una variable
       let generations = Object.keys(laboratoria[key].generacion);
       generations.forEach((generation) => {
         const obj = {
           campus: key,
           generation: generation,
           count: laboratoria[key].generacion[generation].estudiantes.length
         }
//console.log(laboratoria[key].generacion[generation].estudiantes.length);
         //console.log(key);

            generationsArray.push(obj);

          });

//console.log(laboratoria[key].generacion);
     }
     console.log(generationsArray);
     return generationsArray;
  };*/
//
//       for (key in laboratoria){
//         obj.campus = key;
//         console.log(key);
//          let generations = Object.keys(laboratoria[key].generacion);
//        //  console.log(Object.keys(laboratoria[key].generacion));
//          obj.generation = generation;
//        //      console.log(generations);
//          generations.forEach((generation) => {
//            obj.generation = generation;
//        //    console.log(generation);
//             generationsArray.push(obj);
//            console.log(generationsArray);
//        // })
//   };
// };


 //return generationsArray;
//};



//visualizar sedes mediante un select
/*const drawCampus = (laboratoria) => {
  const sedes = Object.keys(laboratoria);
  console.log(sedes);
  const containerCampus = document.getElementById('campus');
  sedes.forEach((sede) =>{
    const option = document.createElement('option');
    option.innerHTML = sede;
    containerCampus.appendChild(option);
  });
  //containerCampus.addEventListener('change',iteratorGenerations);
};*/




/*

window.computeGenerationsStats = (laboratoria) => {
  const generationsArray = [];
  const obj = {
    campus: '',
    generation: '',
    average: 0,
    count: 0,
  };
  let average = 0;
  for (key in laboratoria){
    obj
  }
};

window.computeStudentsStats = () => {

};


window.sortStudents = () => {

};


window.filterStudents = () => {

};

*/
