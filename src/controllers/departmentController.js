import { Department, EmployeeDepartmentHistory } from "../models/index.js";
import { Op } from "sequelize";

export const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll({
      attributes: ["departmentid", "name", "groupname"],
      include: [
        {
          model: EmployeeDepartmentHistory,
          attributes: ["businessentityid", "startdate"],
          required: false,
        },
      ],
      order: [["departmentid", "ASC"]],
    });

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

    // Verificar si se proporcionaron fechas de inicio y fin
    if (filters.startDate && filters.endDate) {
      const startDate = new Date(filters.startDate);
      const endDate = new Date(filters.endDate);

      if (isNaN(startDate) || isNaN(endDate)) {
        return res.status(400).json({ error: "Fechas no válidas" });
      }

      filters["$EmployeeDepartmentHistories.startdate$"] = {
        [Op.between]: [startDate, endDate],
      };

      // Eliminar las fechas del objeto de filtros
      delete filters.startDate;
      delete filters.endDate;
    } else if (filters.startDate) {
      const startDate = new Date(filters.startDate);

      if (isNaN(startDate)) {
        return res.status(400).json({ error: "Fecha de inicio no válida" });
      }

      filters["$EmployeeDepartmentHistories.startdate$"] = {
        [Op.gte]: startDate,
      };

      delete filters.startDate;
    } else if (filters.endDate) {
      const endDate = new Date(filters.endDate);

      if (isNaN(endDate)) {
        return res.status(400).json({ error: "Fecha de fin no válida" });
      }

      filters["$EmployeeDepartmentHistories.startdate$"] = {
        [Op.lte]: endDate,
      };

      delete filters.endDate;
    }

    // Modificar los filtros de nombre y grupo para permitir búsquedas parciales y sin distinción de mayúsculas/minúsculas
    if (filters.name) {
      filters.name = { [Op.iLike]: `%${filters.name}%` };
    }

    if (filters.groupname) {
      filters.groupname = { [Op.iLike]: `%${filters.groupname}%` };
    }

    console.log("Filtros recibidos:", filters);

    const departments = await Department.findAll({
      attributes: ["departmentid", "name", "groupname"],
      include: [
        {
          model: EmployeeDepartmentHistory,
          attributes: ["businessentityid", "startdate", "enddate"],
          required: false,
        },
      ],
      where: filters,
      order: [["departmentid", "ASC"]],
    });

    console.log("Departamentos filtrados:", departments);

    res.json(departments);
  } catch (error) {
    console.error("Error al consultar departamentos:", error);
    res
      .status(500)
      .json({ error: "Error al consultar departamentos: " + error.message });
  }
};
