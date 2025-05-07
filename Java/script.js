var miVariable = "contenido de la variable"; // no se usa

// let -> solamente vive en el scope declarado
// en sus hijos
let miVariable2 = "Pueden ser re-escrito sus valores";
miVariable2 = 9; //reasignacion del valor

// const -> vairalbe constante no son asignables los valores
const miVariable3 = "contenido que no se pude cambiar";

//tipos de datos
const text = "String";
const num = 9; //number
const booleanos = true; // boolean
// undefined -> valor no definido
// null -> vacio

//                         operadores

//Aritmetricos: son todos los Matematicas + - / % *
//comparaciones.
// == doble igual compara el valor del dato
// === triple igual compara el valor y el tipo da dato
//!= distinto el valor !== distinto valor y tipo
// > < => <= mayor menor, mayor o igual , menor o igual

//Condicionales
// if
const edad = 20;
if (edad > 18) {
  console.log("Sos mayor de edad");
  // es el print de python
} else {
  console.log("Sos menor de edad");
}
//switch
const dia = 1;
switch (dia) {
  case 1:
    console.log("dia Lunes");
    break;
  case 1:
    console.log("dia Martes");
    break;
  default:
    console.log("Dia no registrado");
}

//funciones
//declarra funciones clasicas
function saludar(nombre) {
  return `Hola ${nombre}`;
}
console.log(saludar("Fede"));

//Arrow function
function saludar(nombre) {
  return `Hola ${nombre}`;
}
const saludo = (nombre) => `Hola ${nombre}`; //return implicito
//si el return implicito tien mas de una linea va a estar
// envuelto en parentesis

//Arreglos o arrays (Lista en python
const miArreglo = [1, 2, "pepito", true];
console.log(miArreglo[2]);

const miObjeto = {
  calve: "valor",
  nombre: "Federico",
  edad: 20,
};

console.log(miObjeto);
//iteramos una lista con for
for (let i = 0; i < miArreglo.length; i++) {
  console.log(miArreglo[i]); //imprimi en pantalla el arreglo
  //con su posicion
}

//Actividad 1
const numero = 4;
if (numero < 0) {
  console.log("El numero es negativo");
} else if (numero === 0) {
  console.log("El numero es cero");
} else {
  console.log("El numero es positivo");
}
/*
console.log(numeroPar);
*/
//Ejercicio 1
let numeroPar = 0;

const nume = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= nume.length; i++) {
  if (nume[i] % 2 !== 0) {
    console.log((numeroPar += i));
  }
}
console.log("La suma total es:", numeroPar);

//Ejercicio 2
const number = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let multiTres = 0;
for (let i = 0; i <= number.length; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log((multiTres += i));
  }
}
console.log("la suma total da :", multiTres);
