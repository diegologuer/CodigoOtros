//Se toma toda la seccion de formulario
//y todos los elementos que lo conforman como un arreglo
//Si los valores son correctos entonces se invoca a la funcion 
//agregar invitados para insertar los elementos.



//No existia el ID form
var formulario = document.querySelector(".formulario")

formulario.onsubmit = function(e) {

  e.preventDefault();
  
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  //Se cambia and por or
  if (edad < 18 && edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  //La edad puede ser igual a 18 o 120
  && (edad >= 18 
    && edad <= 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  console.log("Si pasan los datos");
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

//No habia elemento con ese ID
var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
//Se cambia added por add
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")

//Se comentaron estas lineas debido a que se duplicaba el nombre
//spanNombre.textContent = "Nombre: "
//inputNombre.value = nombre 
//elementoLista.appendChild(spanNombre)
//elementoLista.appendChild(inputNombre)
//elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}