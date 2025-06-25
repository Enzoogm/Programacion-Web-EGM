import "./App.css";
import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");

  //Siempre que hagamos unevento el evento se va a llamar handle
  const handleClick = () => {
    console.log(nombre);
  };

  const handleInputChange = (event) => {
    setNombre(event.target.value);
    //para capturar el valor de un input se usa el target.value
  };
  return (
    <>
      <input
        type="text"
        placeholder="Escribi tu nombre"
        onChange={handleInputChange}
        value={nombre}
      />
      <button onClick={handleClick}>Mostrar</button>
      {nombre && <h2>{nombre}</h2>}
      {nombre === "" ? <>hola</> : <>chau</>}
    </>
  );
}
export default App;
