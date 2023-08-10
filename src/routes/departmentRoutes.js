import express from "express";
import * as departmentController from "../controllers/departmentController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import authRoutes from "../auth/authRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes); // Monta las rutas de autenticación en el prefijo /auth
router.get("/", authMiddleware, departmentController.getAllDepartments);
router.get(
  "/filtered",
  authMiddleware,
  departmentController.getFilteredDepartments
);

export default router;
