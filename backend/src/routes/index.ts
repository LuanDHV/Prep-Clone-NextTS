// src/routes/index.ts
import express from "express";
import aimsRoutes from "./aimsRoutes";
import brandsRoutes from "./brandsRoutes";
import coursesRoutes from "./coursesRoutes";
import slidersRoutes from "./slidersRoutes";
import benefitsRoutes from "./benefitsRoutes";
import contentsRoutes from "./contentsRoutes";
import couponsRoutes from "./couponsRoutes";
import paymentsRoutes from "./paymentsRoutes";

const router = express.Router();

router.use("/aims", aimsRoutes);
router.use("/brands", brandsRoutes);
router.use("/courses", coursesRoutes);
router.use("/sliders", slidersRoutes);
router.use("/benefits", benefitsRoutes);
router.use("/contents", contentsRoutes);
router.use("/coupons", couponsRoutes);
router.use("/payments", paymentsRoutes);

export default router;
