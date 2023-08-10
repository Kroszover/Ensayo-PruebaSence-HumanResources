import express from "express";
import * as departmentController from "../controllers/departmentController.js";

const router = express.Router();

router.get("/", departmentController.getAllDepartments);
router.get("/filtered", departmentController.getFilteredDepartments);

export default router;
