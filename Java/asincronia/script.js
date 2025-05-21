const boton = document.getElementById("boton");

let contador = 0;

// setTimeout

// es una funcion que recibe por paramentros dos valores
// recibe una fucnion y recibe el tiempo que va a tardar en ejecutarse

boton.addEventListener("click", () => {
  setTimeout(function () {
    alert("Se clickeo hace 2 segundos");
  }, 2000); //milisegundos
  //setInterval()
  //ejcutar el codigo cada n cantidad de tiempo
  setInterval(() => {
    contador++;
    console.log(contador);
  }, 1000);
});

//Asincronia
//peticion a una api
//metodos: get, out, put, delete

//fetch
fetch("https://rickandmortyapi.com/api/character")
  .then((data) => data.json())
  .then((response) => console.log("response", response.results[2]));

//async await
const asyncFunction = async () => {
  //try catch
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?page=2"
    );
    const data = await response.json();
    console.log("data", data);
  } catch {
    error;
  }
  {
    console.log("error", error);
  }
};
asyncFunction(); //para ejecutar una funcion debemos llamarla
//y poner parentesisi y ; al final
//funcion regular asincrona
async function asyncFunc() {}
