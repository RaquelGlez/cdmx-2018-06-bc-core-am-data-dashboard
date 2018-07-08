
//Guardamos la ubicación del JSON en una variable
const json = 'https://raw.githubusercontent.com/RaquelGlez/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json'
// o jalarlo mediante el servidor
//const json = '../data/laboratoria.json';

window.onload = () => {
  fetch(json)
  .then(response => response.json())
  .then((laboratoria) => {
    //console.log(laboratoria)
    // window.computeGenerationsStats(laboratoria);  // linea necesaria para ejecutar función y poder ver en consola
    drawCampus(laboratoria);
    window.computeStudentsStats(laboratoria);
  })
  .catch((error) =>{
    console.log('Error');
  });
};


window.computeStudentsStats = (laboratoria) => {
  // console.log(laboratoria)
  const studentsArray = [];
  let sede = '';
  let generacion = '';
  let studentName = '';
  let studentMail = '';

  for (key in laboratoria) {
    //console.log(key);    //muestra un string con el nombre de cada sede
    sede = key;            //Muestra cada sede
    //console.log(laboratoria[key]);   // muestra un objeto de objetos con las generaciones
    //console.log(Object.values(laboratoria[key].generacion));  // es un arreglo de objetos, tiene a las estudiantes dentro, es el arreglo a iterar en sus keys
    let generations = Object.keys(laboratoria[key].generacion);
    generations.forEach((generation1) => {
      generacion = generation1;  //asigna las 9 generaciones en string
        //console.log(generacion);
      //Ahora iteramos para entrar a alumnas
      //Declaramos el arreglo a iterar  //
        //console.log(laboratoria[sede].generacion[generation1])
        //console.log(laboratoria[sede].generacion[generation1].estudiantes);  //regresa un arreglo con un objeto por estudiante
      let students = laboratoria[sede].generacion[generation1].estudiantes;   //es el arreglo a iterar para obtener nombres y correos
      for (student in students){
        //console.log(students[student]); //son los arreglos por estudiante
        //console.log(students[student].nombre) //son los nombres de cada estudiante, en string
        studentName = students[student].nombre;
        studentMail = students[student].correo;


        studentsArray.push({
          'name': studentName,
          'email': studentMail,
          'campus': sede,
          'generation': generacion

        })

      }
  });

  };
  // console.log(studentsArray);
  return studentsArray;

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
