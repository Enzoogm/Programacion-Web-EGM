import React, { useState } from "react";

function Actividad1() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
      <button onClick={() => setContador(contador - 1)}>Restar</button>
    </>
  );
}

export default Actividad1;
