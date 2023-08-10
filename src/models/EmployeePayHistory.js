import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Employee from "./Employee.js";

export const EmployeePayHistory = sequelize.define(
  "EmployeePayHistory",
  {
    employeepayhistoryid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    businessentityid: {
      type: DataTypes.INTEGER,
      references: {
        model: Employee,
        key: "businessentityid",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    ratechangedate: DataTypes.DATE,
    rate: DataTypes.DECIMAL(19, 4),
    payfrequency: DataTypes.SMALLINT,
    modifieddate: DataTypes.DATE,
  },
  {
    modelName: "EmployeePayHistory",
    tableName: "employeepayhistory",
    timestamps: false,
  }
);

export default EmployeePayHistory;
