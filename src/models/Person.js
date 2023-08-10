import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Person = sequelize.define("Person", {
  businessentityid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  persontype: DataTypes.STRING(2),
  namestyle: DataTypes.BOOLEAN,
  title: DataTypes.STRING(8),
  firstname: DataTypes.STRING(50),
  middlename: DataTypes.STRING(50),
  lastname: DataTypes.STRING(50),
  suffix: DataTypes.STRING(10),
  emailpromotion: DataTypes.INTEGER,
  modifieddate: DataTypes.DATE,
});

export default Person;
