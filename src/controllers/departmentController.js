import { Department } from "../models/Department.js";

export const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.json(departments);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener departamentos: " + error.message });
  }
};

export const getFilteredDepartments = async (req, res) => {
  try {
    const filters = req.query;
    const departments = await Department.findAll({ where: filters });
    res.json(departments);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al consultar departamentos" + error.message });
  }
};
