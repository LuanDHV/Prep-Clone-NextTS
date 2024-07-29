// src/routes/paymentRoutes.ts
import express from "express";
import * as paymentsController from "../controllers/paymentsController";

const router = express.Router();

router.post("/create-order", paymentsController.createOrder);
router.post("/create-status", paymentsController.createStatus);
router.post("/order-status", paymentsController.getOrderStatus);

export default router;
