import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Employee from "./Employee.js";
import Department from "./Department.js";
import Shift from "./Shift.js";

export const EmployeeDepartmentHistory = sequelize.define(
  "EmployeeDepartmentHistory",
  {
    employeedepartmenthistoryid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    businessentityid: {
      type: DataTypes.INTEGER,
      references: {
        model: Employee,
        key: "businessentityid",
      },
    },
    departmentid: {
      type: DataTypes.INTEGER,
      references: {
        model: Department,
        key: "departmentid",
      },
    },
    shiftid: {
      type: DataTypes.INTEGER,
      references: {
        model: Shift,
        key: "shiftid",
      },
    },
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE,
    modifieddate: DataTypes.DATE,
  },
  {
    modelName: "EmployeeDepartmentHistory",
    tableName: "employeedepartmenthistory",
    timestamps: false,
  }
);

export default EmployeeDepartmentHistory;
