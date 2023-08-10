import express from "express";
import * as employeeController from "../controllers/employeeController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import authRoutes from "../auth/authRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes); // Monta las rutas de autenticación en el prefijo /auth
router.get("/", authMiddleware, employeeController.getAllEmployees);
router.get(
  "/:nationalId",
  authMiddleware,
  employeeController.getEmployeesByNationalId
);
router.get(
  "/hiredate/:date",
  authMiddleware,
  employeeController.getEmployeesByHireDate
);
router.get(
  "/filtered",
  authMiddleware,
  employeeController.getFilteredEmployees
);

export default router;
