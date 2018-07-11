
// Guardamos la ubicación del JSON en una variable
const json = 'https://raw.githubusercontent.com/RaquelGlez/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json'
// o jalarlo mediante el servidor
// const json = '../data/laboratoria.json';

window.onload = () => {
  fetch(json)
    .then(response => response.json())
    .then((laboratoria) => {
    // console.log(laboratoria)
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
  let stats = {};
  let status = 0;
  let completedPercentageStatus = 0;
  let topics = {};
  let tema1 = '';
  let tema2 = '';
  let tema3 = '';
  let completedPercentaget1 = 0;
  let completedPercentaget2 = 0;
  let completedPercentaget3 = 0;
  let percentageDuration1 = 0;
  let percentageDuration2 = 0;
  let percentageDuration3 = 0;


  for (key in laboratoria) {
    // console.log(key);    //muestra un string con el nombre de cada sede
    sede = key; // Muestra cada sede
    // console.log(laboratoria[key]);   // muestra un objeto de objetos con las generaciones
    // console.log(Object.values(laboratoria[key].generacion));  // es un arreglo de objetos, tiene a las estudiantes dentro, es el arreglo a iterar en sus keys
    let generations = Object.keys(laboratoria[key].generacion);
    generations.forEach((generation1) => {
      generacion = generation1; // asigna las 9 generaciones en string
      // console.log(generacion);
      // Ahora iteramos para entrar a alumnas
      // Declaramos el arreglo a iterar  //
      // console.log(laboratoria[sede].generacion[generation1])
      // console.log(laboratoria[sede].generacion[generation1].estudiantes);  // regresa un arreglo con un objeto por estudiante
      let students = laboratoria[sede].generacion[generation1].estudiantes; // es el arreglo a iterar para obtener nombres y correos
      for (student in students) {
        // console.log(students[student]); //son los arreglos por estudiante
        // console.log(students[student].nombre) //son los nombres de cada estudiante, en string
        studentName = students[student].nombre;
        studentMail = students[student].correo;
        // Ahora, para generar el objeto stats hacemos lo siguiente
        // para obtener el status, generamos  el arreglo a iterar
        // console.log(students[student].progreso.porcentajeCompletado);
        completedPercentageStatus = students[student].progreso.porcentajeCompletado;
        if (completedPercentageStatus < 60) {
          let status1 = 'Por debajo de 60%';
          // console.log(status1);
          status = status1;
        } else if (completedPercentageStatus >= 90) {
          let status2 = 'Por arriba de 90%';
          status = status2;
          // console.log(status2);
        } else {
          let status3 = 'En el promedio de 60-90';
          status = status3;
        }
        // Ahora integramos el siguiente objeto: topics
        // Indicamos la ruta para obtener la data
        // console.log(students[student].progreso.temas['01-Introduccion-a-programacion']);
        // console.log(Object.keys(students[student].progreso.temas));


        let temas1 = Object.keys(students[student].progreso.temas);
        tema1 = temas1[0];
        tema2 = temas1[1];
        tema3 = temas1[2];

        let topico1 = students[student].progreso.temas['01-Introduccion-a-programacion'];
        completedPercentaget1 = topico1.porcentajeCompletado;
        percentageDuration1 = Math.round((topico1.duracionTemaCompletado * 100) / topico1.duracionTema);
        let topico2 = students[student].progreso.temas['02-Variables-y-tipo-de-datos'];
        completedPercentaget2 = topico2.porcentajeCompletado;
        percentageDuration2 = Math.round((topico2.duracionTemaCompletado * 100) / topico2.duracionTema);
        let topico3 = students[student].progreso.temas['03-UX'];
        completedPercentaget3 = topico3.porcentajeCompletado;
        percentageDuration3 = Math.round((topico3.duracionTemaCompletado * 100) / topico3.duracionTema);


        studentsArray.push({
          'name': studentName,
          'email': studentMail,
          'campus': sede,
          'generation': generacion,
          'stats': {
            'status': status,
            'completedPercentage': completedPercentageStatus,
            'topics': {
              '1': {
                'tema': tema1,
                'completedPercentage': completedPercentaget1,
                'percentageDuration': percentageDuration1
              },
              '2': {
                'tema': tema2,
                'completedPercentage': completedPercentaget2,
                'percentageDuration': percentageDuration2
              },
              '3': {
                'tema': tema3,
                'completedPercentage': completedPercentaget3,
                'percentageDuration': percentageDuration3
              }
            }
          }
        });
      }
    });
  };
  console.log(studentsArray);
  return studentsArray;
};

// Trabajar con la funcion global, para obtener el objeto solicitado


window.computeGenerationsStats = (laboratoria) => {
  const generationsArray = [];
  const obj = {
    campus: '',
    generation: '',
    average: '',
    count: ''
  };


  for (key in laboratoria) {
    // console.log(key);  // muestra las sedes
    // console.log(laboratoria[key]); // muestra las generaciones
    // console.log(laboratoria[key].generacion);  // muestra un objeto con las generaciones por sede
    // console.log(Object.keys(laboratoria[key].generacion));  //muestra un array con el nombre de las generaciones por sede

    // guardar las keys en una variable
    let generations = Object.keys(laboratoria[key].generacion);
    generations.forEach((generation) => {
      const obj = {
        campus: key,
        generation: generation,
        count: laboratoria[key].generacion[generation].estudiantes.length
      };
      // console;.log(laboratoria[key].generacion[generation].estudiantes.length);
      // console.log(key);

      generationsArray.push(obj);
    });

    log(laboratoria[key].generacion);
  }
  console.log(generationsArray);
  return generationsArray;
};


//
// window.sortStudents = () => {
//
//
// window.filterStudents = () => {
//
// };
