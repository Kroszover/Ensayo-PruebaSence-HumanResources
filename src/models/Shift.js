import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Shift = sequelize.define(
  "Shift",
  {
    shiftid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING(50),
    starttime: DataTypes.TIME,
    endtime: DataTypes.TIME,
    modifieddate: DataTypes.DATE,
  },
  {
    modelName: "Shift",
    tableName: "shift",
    timestamps: false,
  }
);

export default Shift;
