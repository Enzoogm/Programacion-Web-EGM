function agregarTarea() {
  const entradaTarea = document.getElementById("entrada-tarea");
  const textoTarea = entradaTarea.value.trim();

  // Crear un nuevo elemento de lista (li)
  const tarea = document.createElement("li");
  tarea.textContent = textoTarea;
  document.getElementById("lista-tareas").appendChild(tarea);
}
