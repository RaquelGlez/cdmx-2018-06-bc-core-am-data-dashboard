<<<<<<< HEAD
const url = `https://raw.githubusercontent.com/DianaOlvera/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json`;
fetch(url)
.then(answer => answer.json())
.then (answer => {


console.log(answer)
 })


 window.computeStudentsStats = () => {

 };
 window.computeGenerationsStats = () => {

 };
 window.sortStudents = () => {

 };
 window.filterStudents = () => {
   
 };
=======

//Guardamos la ubicación del JSON en una variable
//const json = "https://raw.githubusercontent.com/RaquelGlez/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json"

const json = '../data/laboratoria.json';

const getData = () => {
  fetch(json)
  .then(response => response.json())
  .then((res) => {
    //console.log(res)
    drawCampus(res);

  })
  .catch((error) =>{
    console.log('Error');
  });
}

getData();

const drawCampus = (data) => {
  const sedes = Object.keys(data);
  console.log(sedes);
  const containerCampus = document.getElementById('campus');
  sedes.forEach((sede) =>{
    const option = document.createElement('option');
    option.innerHTML = sede;
    containerCampus.appendChild(option);
  });
  //containerCampus.addEventListener('change',iteratorGenerations);
};









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



/*fetch(url).then(data => data.json())
.then(data => {
  console.log(data);
});
}
obtainData();*/






/*
//Declaramos una variable que imprimira a las generaciones una vez que las saquemos del objeto json
let generation = document.getElementById("ver-sedes");

//Declaramos el evento que nos ayudara a imprimir las generaciones al dar click a un boton
btngen.addEventListener("click",function () {
  obtenerSed();
})


let obtenerSed = function() {
    fetch(url).then((response)=>{
      return response.json();
    }).then((data) => {

    })
  }

*/
>>>>>>> upstream/master
