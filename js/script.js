var task = [];
var tareas = [
  ['tarea 1', false],
  ['tarea 2', false]
];

function agregarTarea(){
  var tarea
  do {
    tarea = prompt("Ingrese la tarea que desea agregar");
    if(tarea != "" && tarea != null){
      if(verificarExistencia(tarea)){
        alert(`La tarea ${tarea} ya existe.`);      
      }
      else{
        task.push(tarea, false);
        tareas.push(task);
        task = [];
        createTareaElement(tarea);
      }           
    }
    else{
      return;
    }    
  } while (tarea != null);  
}

function verificarExistencia(tarea){
  for(var i = 0; i < tareas.length; i++){
    if(tareas[i][0] == tarea){
      return true;
    }
  }
  return false;
}  

function marcarComoRealizada() {
  var realizada = prompt("Que tarea desea marcar como realizada?"); 
  buscarTareaEnArray(realizada);
  marcarTareaEnFrontEnd(realizada);  
}

function buscarTareaEnArray(tarea){ 
  tareas.forEach(function(e){
    e.forEach(function(element, i){
      if(element == tarea){
        e[i+1] = true;
      }
    });
  });    
}

function contarPendientes(){
  var tareasPendientes = 0;
  tareas.forEach(function(e){
    e.forEach(function(element){
      if(element == false){
        tareasPendientes++;
      }
    });
  });
  return alert("Tareas pendientes: " + tareasPendientes);
}
function contarFinalizadas(){
  var tareasRealizadas = 0;
  tareas.forEach(function(e){
    e.forEach(function(element){
      if(element == true){
        tareasRealizadas++;
      }
    });
  });
  return alert("Tareas realizadas: " + tareasRealizadas);
}


var tareasContainer = document.querySelector('#tareas');
var tareasList = document.createElement('ol');
var buttonPendientes = document.querySelector('#tareasRestantes');
var buttonFinalizadas = document.querySelector('#tareasRealizadas');
var buttonAgregar = document.querySelector('#agregarTarea');
var buttonRealizada = document.querySelector('#tareaRealizada');

buttonPendientes.addEventListener('click', contarPendientes);
buttonFinalizadas.addEventListener('click', contarFinalizadas);
buttonAgregar.addEventListener('click', agregarTarea);
buttonRealizada.addEventListener('click', marcarComoRealizada);

window.onload = function () {
  tareasContainer.append(tareasList);
  createTareaElement('tarea 1');
  createTareaElement('tarea 2');
}

function createTareaElement(tarea) {
  var item = document.createElement('li');
  item.textContent = tarea;
  item.className = 'item pendiente';
  tareasList.append(item);
}

function marcarTareaEnFrontEnd(tareaRealizada) {
  var listItems = document.querySelectorAll('li');
  for (var i = 0; i < listItems.length; i++) {
    var item = listItems[i];
    if (item.textContent == tareaRealizada) {
      item.classList.add('finalizada');
      item.classList.remove('pendiente');
    }
  }
}