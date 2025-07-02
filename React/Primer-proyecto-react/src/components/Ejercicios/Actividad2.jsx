import React, { useState } from "react";

function Actividad2() {
  const [texto, setTexto] = useState("");

  const handleInputChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Escribí algo..."
        value={texto}
        onChange={handleInputChange}
      />
      <h2>{texto}</h2>
    </>
  );
}

export default Actividad2;
