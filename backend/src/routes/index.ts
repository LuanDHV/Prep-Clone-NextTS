//src/routes/index.ts
import express from "express";
import aimsRoutes from "../routes/aimsRoutes";
import brandsRoutes from "../routes/brandsRoutes";
import coursesRoutes from "../routes/coursesRoutes";

const router = express.Router();

router.use("/aims", aimsRoutes);
router.use("/brands", brandsRoutes);
router.use("/courses", coursesRoutes);

export default router;
