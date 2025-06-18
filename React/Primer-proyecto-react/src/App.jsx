import "./App.css";
import Pepito from "./components/usuario/Usuario";
import { Provedor } from "./components/proveedor/Provedor";
import { useEffect, useState } from "react";

function App() {
  //     variable   |funcion Actualizadora     |valor inicial
  const [characters, setCharacters] = useState([]);

  //useEffect va  ajaecutar el codigo que se encuentra
  //dentro, tantas veces como se actualicen sus dependencias
  //si no hay depenceidas se ejecutan solo antes del primer
  //rederizado
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((response) => setCharacters(response.results));
  }, []);

  return (
    <>
      {characters ? (
        characters.map((item, index) => <p>{item.name}</p>)
      ) : (
        <>Cargando...</>
      )}
      hola mundo
      <button>Pe</button>
      <Pepito />
      <Provedor name={"Ricardo"} />
    </>
  );
}

export default App;
