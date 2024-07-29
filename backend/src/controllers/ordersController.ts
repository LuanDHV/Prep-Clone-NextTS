// src/controllers/ordersController.ts

import { Request, Response } from "express";
import OrderModel from "../models/ordersModel";
import { IOrders } from "../types/interface";
import moment from "moment";

// Create a new order
export const createOrder = async (req: Request, res: Response) => {
  const { amount, fullName, email, roadMapName, courses, duration, coupon } =
    req.body;

  // Generate unique transaction ID
  const transID = Math.floor(Math.random() * 1000000);

  const orderData: IOrders = {
    amount,
    fullName,
    email,
    roadMapName,
    courses,
    duration,
    coupon,
    app_trans_id: `${moment().format("YYMMDD")}_${transID}`,
    status: "pending",
  };

  try {
    const newOrder = await OrderModel.create(orderData);
    res.status(201).json(newOrder);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Get all orders
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await OrderModel.find();
    res.status(200).json(orders);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get order by ID
export const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await OrderModel.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update order status by ID
export const updateOrderStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found to update" });
    }
    res.status(200).json(updatedOrder);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an order by ID
export const deleteOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedOrder = await OrderModel.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found to delete" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
