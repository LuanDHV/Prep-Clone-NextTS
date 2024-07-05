// src/routes/aimsRoutes.ts
import express from "express";
import * as aimsController from "../controllers/aimsController";

const router = express.Router();

router.get("/", aimsController.getAllAims);
router.get("/:id", aimsController.getAimById);
router.post("/", aimsController.createAim);
router.put("/:id", aimsController.updateAim);
router.delete("/:id", aimsController.deleteAim);

export default router;
