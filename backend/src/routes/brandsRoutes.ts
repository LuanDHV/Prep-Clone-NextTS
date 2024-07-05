// src/routes/brandsRoutes.ts
import express from "express";
import * as brandsController from "../controllers/brandsController";

const router = express.Router();

router.get("/", brandsController.getAllBrands);
router.get("/:id", brandsController.getBrandById);
router.post("/", brandsController.createBrand);
router.put("/:id", brandsController.updateBrand);
router.delete("/:id", brandsController.deleteBrand);

export default router;
