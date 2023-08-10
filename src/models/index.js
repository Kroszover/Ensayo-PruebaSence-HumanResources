import { Person } from "./Person.js";
import { Department } from "./Department.js";
import { Employee } from "./Employee.js";
import { Shift } from "./Shift.js";
import { EmployeeDepartmentHistory } from "./EmployeeDepartmentHistory.js";
import { EmployeePayHistory } from "./EmployeePayHistory.js";

Person.hasMany(Employee, { foreignKey: "businessentityid" });
Employee.belongsTo(Person, { foreignKey: "businessentityid" });

Employee.hasMany(EmployeeDepartmentHistory, { foreignKey: "businessentityid" });
EmployeeDepartmentHistory.belongsTo(Employee, {
  foreignKey: "businessentityid",
});

Department.hasMany(EmployeeDepartmentHistory, { foreignKey: "departmentid" });
EmployeeDepartmentHistory.belongsTo(Department, { foreignKey: "departmentid" });

Shift.hasMany(EmployeeDepartmentHistory, { foreignKey: "shiftid" });
EmployeeDepartmentHistory.belongsTo(Shift, { foreignKey: "shiftid" });

Employee.hasMany(EmployeePayHistory, { foreignKey: "businessentityid" });
EmployeePayHistory.belongsTo(Employee, { foreignKey: "businessentityid" });

export {
  Person,
  Department,
  Employee,
  Shift,
  EmployeeDepartmentHistory,
  EmployeePayHistory,
};
