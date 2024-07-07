// src/routes/contentsRoutes.ts
import express from "express";
import * as contentsController from "../controllers/contentsController";

const router = express.Router();

router.get("/", contentsController.getAllContents);
router.get("/:id", contentsController.getContentById);
router.post("/", contentsController.createContent);
router.put("/:id", contentsController.updateContent);
router.delete("/:id", contentsController.deleteContent);

export default router;
