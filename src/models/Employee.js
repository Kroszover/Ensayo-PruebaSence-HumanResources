import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Person from "./Person.js";

export const Employee = sequelize.define("Employee", {
  businessentityid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Person,
      key: "businessentityid",
    },
  },
  nationalidnumber: DataTypes.STRING(15),
  loginid: DataTypes.STRING(256),
  jobtitle: DataTypes.STRING(50),
  birthdate: DataTypes.DATE,
  maritalstatus: DataTypes.STRING(1),
  gender: DataTypes.STRING(1),
  hiredate: DataTypes.DATE,
  salariedflag: DataTypes.BOOLEAN,
  vacationhours: DataTypes.INTEGER,
  sickleavehours: DataTypes.INTEGER,
  currentflag: DataTypes.BOOLEAN,
  modifieddate: DataTypes.DATE,
});

export default Employee;
