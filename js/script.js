//para crear las tareas necesitamos primero un lugar a donde guardarlas.
//tenemos que crear un variable del tipo array.
//esta array va a guardar otros arrays, con la estructura que se muestra.
var tareas = [
  ['tarea 1', false],
  ['tarea 2', false]
];

//* * Funcion agregar tarea:
//* * tenemos que preguntarle al usuario repetidamente hasta que haga click en "cancelar";
//lo ideal para esto es utilizar un prompt.

//* * la pregunta debe ser guardada en una variable que será agregada al array tareas creado anteriormente
//* * pero antes de agregarla deberíamos verificar que el usuario no haya dejado vació el campo de la prompt. Entonces, si existe la tarea, continuamos.

//* * además de verificar la existencia de la tarea, tendríamos que verificar que ya no exista una tarea con el mismo nombre.

//* * para ello podríamos crear una función, por ejemplo: verificarExistencia, que recibirá como parámetro el nombre de la tarea que el usuario quiere agregar.
//* * esta función debe devolver true si existe la tarea, o false  si la tarea no existe.

//* * en el primer caso (true), le daremos al usuario una alerta que le diga que la tarea ya existe.
//* * en el caso de false, "empujaremos" la nueva tarea al array de tareas, debe tener el siguiente formato: [tarea, false];

//* * ponemos false como segundo elmento en el array de tarea, porque inicialmente la tarea no está realizada

//* * además debemos llamar a la función createTareaElement() que recibe como parámetro la tarea. Esta función que ya está dada, tiene por fin crear el elemento de la lista que verá el usuario en el front end.




// * * debemos crear una función que deberá marcar una tarea cómo realizada, tanto en el array tareas, como en el front end.
// * * lo primero que tenemos que hacer es:

// * * preguntarle al usuario cuál es la tarea que quiere marcar como finalizada o realizada. La guardamos en una variable.
// * * luego necesitamos dos funciones, una para arreglar el array de tareas y cambiar el valor de la tarea correspondiente con true. 
// * * Esta tarea, que se podría llamar buscarTareaEnArray(), recibirá cómo parámetro la tarea que el usuario quiere marcar como finalizada. 
// * * Tendrá que recorrer todo el arreglo tareas, y buscar entre las tareas, que también son arreglos, aquella cuyo elemento del índice 0, sea igual al nombre de la tarea para marcar.
//* * se puede usar un for o un forEach.

// * * La otra función ya está lista, se llama marcarTareaEnFrontEnd() y recibe como parámetro el nombre de la tarea a marcar, sólo deben llamarla (ejecutarla).

function marcarComoRealizada() {
  //función para buscar tarea en el array;
  //llamar a la función para marcar la tarea en el front end.
 
}

// * * crear una función para contar todas las tareas pendientes, se tiene que llamar: contarPendientes()

// * *  crear una función para contar todas las tareas realizadas, se tiene que llamar: contarFinalizadas()


//funciones listas.

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