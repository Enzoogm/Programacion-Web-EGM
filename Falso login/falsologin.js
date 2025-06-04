const hardcodedUser = {
  username: "Papu",
  password: "Papurry",
};

document.getElementById("login-button").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (
    username === hardcodedUser.username &&
    password === hardcodedUser.password
  ) {
    sessionStorage.setItem("loggedIn", "true");
    showEmployees();
  } else {
    document.getElementById("error-message").innerText =
      "Usuario o contraseña incorrectos";
  }
});

function showEmployees() {
  if (sessionStorage.getItem("loggedIn")) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("employees-container").style.display = "block";
    fetchEmployees();
  }
}

function fetchEmployees() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      const employeesList = document.getElementById("employees-list");
      employeesList.innerHTML = ""; // Limpiar lista previa
      data.forEach((employee) => {
        const card = document.createElement("div");
        card.className = "employee-card";
        card.innerHTML = `
          <h3>${employee.name}</h3>
          <p>Email: ${employee.email}</p>
          <p>Empresa: ${employee.company.name}</p>
        `;
        employeesList.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching employees:", error));
}

// Cerrar sesión
document.getElementById("logout-button").addEventListener("click", function () {
  sessionStorage.removeItem("loggedIn");
  location.reload();
});

// Verificar si hay sesión activa al cargar la página
window.onload = function () {
  if (sessionStorage.getItem("loggedIn")) {
    showEmployees();
  }
};
