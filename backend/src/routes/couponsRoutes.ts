// src/routes/couponsRoutes.ts
import express from "express";
import * as couponsController from "../controllers/couponsController";

const router = express.Router();

router.get("/", couponsController.getAllCoupons);
router.get("/:code", couponsController.getCouponByCode);
router.post("/", couponsController.createCoupon);
router.put("/:code", couponsController.updateCoupon);
router.delete("/:code", couponsController.deleteCoupon);

export default router;
