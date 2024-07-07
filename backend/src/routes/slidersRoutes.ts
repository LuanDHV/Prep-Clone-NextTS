// src/routes/slidersRoutes.ts
import express from "express";
import * as slidersController from "../controllers/slidersController";

const router = express.Router();

router.get("/", slidersController.getAllSliders);
router.get("/:id", slidersController.getSliderById);
router.post("/", slidersController.createSlider);
router.put("/:id", slidersController.updateSlider);
router.delete("/:id", slidersController.deleteSlider);

export default router;
