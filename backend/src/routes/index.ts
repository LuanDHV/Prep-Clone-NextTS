//src/routes/index.ts
import express from "express";
import coursesRoutes from "../routes/coursesRoutes";

const router = express.Router();

router.use("/courses", coursesRoutes);

export default router;
