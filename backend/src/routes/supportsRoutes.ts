// src/routes/supportsRoutes.ts
import express from "express";
import * as supportsController from "../controllers/supportsController";

const router = express.Router();

router.get("/", supportsController.getAllSupports);
router.get("/:id", supportsController.getSupportById);
router.post("/", supportsController.createSupport);
router.put("/:id", supportsController.updateSupport);
router.delete("/:id", supportsController.deleteSupport);

export default router;
