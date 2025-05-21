//Arryas lista de python
const arreglo = [1,2,3]
//obejeto como un diccionario de python
//compuesto por clave y valor
const objeto = { 
    name: "tomas",
    age:17
}
console.log(arreglo[0])
console.log(objeto.age);

//Metodos de arreglos
//length -> longitud del arreglo

const longitud = arreglo.length;

//push(valor)-> Agrega un elelento al final 
// equivalente al append de python


arreglo.push("Nicolas")
console.log("cadena", arreglo)

//pop() elimina el ultimo elemento de un arreglo
// si queremos se puede guardar en una variable

const ultimo = arreglo.pop();
console.log("ulitmo", ultimo);

//Shift() elimina el priner valor de un arreglo,
//tambien
const primero = arreglo.shift();
console.log(primero);
 //unshift(valor) Agrega un elemnte al principal del arreglo
arreglo.unshift("Fede");
console.log(arreglo);
 
//forEach
//SOLO RECORRE, no guarda losa valores en ningun lado
arreglo.forEach( (item, index, arregloEntero) => {
    console.log("elemento",
    item,
    "index",
    index,
    "Arreglo completo",
    arregloEntero);
} )

//map recorre el arreglo, lo modifica con una funcion
// y nos devuelve uno nuevo

const nuevoArreglo = arreglo.map((item, index) => {
    const num = 2;
    console.log(index,"item", item);
    
    return (item += num);
});
console.log("nuevo arreglo", nuevoArreglo);

//filter Crea un nuebo array a parti de los elementos
//que cumplan la condicion

const arregloNum = [2,4,5,6]
const pares = arregloNum.filter((item) => item % 2 === 0 );

console.log(pares);
