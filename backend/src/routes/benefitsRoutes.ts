// src/routes/benefitsRoutes.ts
import express from "express";
import * as benefitsController from "../controllers/benefitsController";

const router = express.Router();

router.get("/", benefitsController.getAllBenefits);
router.get("/:id", benefitsController.getBenefitById);
router.post("/", benefitsController.createBenefit);
router.put("/:id", benefitsController.updateBenefit);
router.delete("/:id", benefitsController.deleteBenefit);

export default router;
