import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Department = sequelize.define(
  "Department",
  {
    departmentid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING(50),
    groupname: DataTypes.STRING(50),
    modifieddate: DataTypes.DATE,
  },
  {
    modelName: "Department",
    tableName: "department",
    timestamps: false,
  }
);

export default Department;
