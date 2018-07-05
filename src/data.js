
//Guardamos la ubicación del JSON en una variable
const json = "https://raw.githubusercontent.com/RaquelGlez/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json"
// o jalarlo mediante el servidor
//const json = '../data/laboratoria.json';

window.onload = () => {
  fetch(json)
  .then(response => response.json())
  .then((res) => {
    //console.log(res)
    drawCampus(res);
    //window.computeGenerationsStats(res);  // linea necesaria para ejecutar función y poder ver en consola
    //window.computeStudentsStats(res);
  })
  .catch((error) =>{
    console.log('Error');
  });
};


window.computeStudentsStats = () => {
  // const studentsArray = [];
  // const obj = {
  //     name: '',
  //     email: '',
  //     campus: '',
  //     generation: ''
      // stats = {
      //   status: '',
      //   completedPercentaje: '',
      //   percentajeDuration: '',
      // }
  //};

  for (key in laboratoria) {

    //guardar las keys en una variable
    //let generations = Object.keys(laboratoria[key].generacion);
    console.log(key);
    console.log(laboratoria[key]);
    console.log(Object.keys(laboratoria[key].generacion))
};
};



//Trabajar con la funcion global, para obtener el objeto solicitado

/*
 window.computeGenerationsStats = (laboratoria) => {
    const generationsArray = [];
    const obj = {
        campus: '',
        generation: '',
        average: '',
        count: ''
    };


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
  };

*/


//
// window.sortStudents = () => {
//
// };
//
//
// window.filterStudents = () => {
//
// };
