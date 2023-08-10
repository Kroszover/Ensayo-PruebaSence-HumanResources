document.addEventListener("DOMContentLoaded", () => {
  const departmentsTable = document.getElementById("departmentsTable");

  // Función para llenar la tabla con los datos de los departamentos
  const populateTable = (data) => {
    const tbody = departmentsTable.querySelector("tbody");
    tbody.innerHTML = ""; // Limpiar el contenido anterior

    if (Array.isArray(data)) {
      data.forEach((department) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                        <td>${department.departmentid}</td>
                        <td>${department.name}</td>
                        <td>${department.groupname}</td>
                        <td>${
                          department.EmployeeDepartmentHistories &&
                          department.EmployeeDepartmentHistories.length > 0
                            ? department.EmployeeDepartmentHistories[0]
                                .businessentityid
                            : ""
                        }</td>
                        <td>${
                          department.EmployeeDepartmentHistories &&
                          department.EmployeeDepartmentHistories.length > 0
                            ? department.EmployeeDepartmentHistories[0]
                                .startdate
                            : ""
                        }</td>
                    `;
        tbody.appendChild(row);
      });
    } else {
      console.error("Error: response is not an array");
    }
  };

  // Obtener datos de departamentos y llenar la tabla al cargar la página
  fetch("/api/departments")
    .then((response) => response.json())
    .then((data) => {
      populateTable(data);
    })
    .catch((error) => {
      console.error("Error al obtener los departamentos:", error);
    });

  // Manejar el envío del formulario de filtrado
  const filterForm = document.getElementById("filterForm");

  filterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(filterForm);
    const params = new URLSearchParams();

    // Agregar los campos no vacíos al objeto de parámetros
    formData.forEach((value, key) => {
      if (value) {
        params.append(key, value);
      }
    });

    console.log(
      "Valores de los campos antes de la solicitud:",
      params.toString()
    );

    fetch(`/api/departments/filtered?${params.toString()}`)
      .then((response) => response.json())
      .then((data) => {
        populateTable(data);
      })
      .catch((error) => {
        console.error("Error al obtener los departamentos filtrados:", error);
      });
  });
});
