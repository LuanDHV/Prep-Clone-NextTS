//src/routes/coursesRouters.ts
import express from "express";
import * as coursesController from "../controllers/coursesController";

const router = express.Router();

router.get("/", coursesController.getAllCourses);
router.get("/:id", coursesController.getCourseById);
router.post("/", coursesController.createCourse);
router.put("/:id", coursesController.updateCourse);
router.delete("/:id", coursesController.deleteCourse);

export default router;
