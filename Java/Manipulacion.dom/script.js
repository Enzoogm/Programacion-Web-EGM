//Manipulacion del DOM
// nos permite interactuar con un documento , modificar su estructura
//estilo y contenido

//Seleccionar elementos del DOM
//Por ID
// obteniendo por id la etiqueta titulo
//nos permite acceder a todas sus propiedades
let titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.value, titulo.textContent, titulo.innerText);
console.log("odaaa!");
titulo.textContent = "este es el nuevo titulo";

//Eventos (addEventListener), onClick, oneChange
let boton = document.getElementById("boton");

boton.addEventListener("click", function () {
  alert("Este boton ha sido clickeado");
  let container = document.getElementById("container");
  let parrafo = document.createElement("p");
  parrafo.textContent = "Este es el parrafo creado";
  container.append(parrafo);
});
