
//Guardamos la ubicación del JSON en una variable
const json = "https://raw.githubusercontent.com/RaquelGlez/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json"



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


const drawCampus = (laboratoria) => {
  const sedes = Object.keys(laboratoria);
  const verSedes = document.getElementById("versedes");
  sedes.forEach((sede) =>{
    const option = document.createElement("button");
    //const t = document.createTextNode('sede')
    option.innerHTML = sede;
    verSedes.appendChild(option);
      option.addEventListener("click", () => drawGeneraciones(laboratoria))
  });
};
const drawGeneraciones =(laboratoria)=> {
  for(i in laboratoria[event.target.innerHTML].generacion){
    let generaciones =i;

    const viewGen = document.getElementById("ver-gen");
    const option = document.createElement("button");
    option.innerHTML = generaciones;
    viewGen.appendChild(option);
  };
};
