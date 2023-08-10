import { Employee } from "../models/Employee.js";

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json({
      message: "Lista de empleados obtenida con éxito",
      data: employees,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener empleados: " + error.message });
  }
};

export const getEmployeesByNationalId = async (req, res) => {
  const nationalId = req.params.nationalId;
  try {
    const employees = await Employee.findAll({
      where: { nationalidnumber: nationalId },
    });
    res.json(employees);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al consultar empleados" + error.message });
  }
};

export const getEmployeesByHireDate = async (req, res) => {
  const hireDate = req.params.date;
  try {
    const employees = await Employee.findAll({
      where: { hiredate: hireDate },
    });
    res.json(employees);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al consultar empleados" + error.message });
  }
};

export const getFilteredEmployees = async (req, res) => {
  try {
    const filters = req.query;
    const employees = await Employee.findAll({ where: filters });
    res.json(employees);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al consultar empleados" + error.message });
  }
};
