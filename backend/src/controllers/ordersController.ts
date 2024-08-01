import { Request, Response } from "express";
import OrderModel from "../models/ordersModel";
import { IOrders } from "../types/interface";
import moment from "moment";

// Create a new order
export const createOrder = async (req: Request, res: Response) => {
  const {
    userId,
    fullName,
    email,
    roadMapName,
    totalCourses,
    duration,
    coupon,
    courses,
    amount,
  } = req.body;

  // Generate unique transaction ID
  const transID = Math.floor(Math.random() * 1000000);

  const orderData: IOrders = {
    userId,
    fullName,
    email,
    roadMapName,
    totalCourses,
    duration,
    coupon,
    courses,
    amount,
    app_trans_id: `${moment().format("YYMMDD")}_${transID}`,
    status: "Chưa thanh toán",
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
    const orders = await OrderModel.find().populate("courses");
    res.status(200).json(orders);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get order by ID
export const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await OrderModel.findById(id).populate("courses");
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
    ).populate("courses");
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

// Get courses by UserId
export const getUserPaidCourses = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const orders = await OrderModel.find({
      userId,
      status: "Đã thanh toán thành công",
    }).populate("courses");
    if (!orders.length) {
      return res.status(404).json({ message: "Bạn chưa sở hữu khóa học nào" });
    }
    const courses = orders.flatMap((order) => order.courses);
    res.status(200).json(courses);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
