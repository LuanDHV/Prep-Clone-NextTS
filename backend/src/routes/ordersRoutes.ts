// src/routes/ordersRoutes.ts

import express from "express";
import * as orderController from "../controllers/ordersController";

const router = express.Router();

router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOrderById);
router.post("/", orderController.createOrder);
router.put("/:id/status", orderController.updateOrderStatus);
router.delete("/:id", orderController.deleteOrder);
router.get("/user-courses/:userId", orderController.getUserPaidCourses);

export default router;
