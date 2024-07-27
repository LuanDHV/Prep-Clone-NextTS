// src/routes/paymentsRoutes.ts
import express from "express";
import { createPaymentUrl } from "../controllers/paymentsController";

const router = express.Router();

router.post("/create_payment_url", createPaymentUrl);

export default router;
