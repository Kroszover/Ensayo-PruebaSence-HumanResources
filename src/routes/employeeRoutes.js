import express from "express";
import * as employeeController from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", employeeController.getAllEmployees);
router.get("/:nationalId", employeeController.getEmployeesByNationalId);
router.get("/hiredate/:date", employeeController.getEmployeesByHireDate);
router.get("/filtered", employeeController.getFilteredEmployees);

export default router;
