// src/models/ordersModel.ts
import mongoose, { Model, Schema } from "mongoose";
import { IOrders } from "../types/interface";

const OrdersSchema: Schema<IOrders> = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.String, ref: "User", required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    roadMapName: { type: String, required: true },
    totalCourses: { type: String, required: true },
    duration: { type: String, required: true },
    coupon: { type: String },
    amount: { type: Number, required: true },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Courses" }],
    app_trans_id: { type: String, required: true },
    status: { type: String },
  },
  { timestamps: true }
);

const OrdersModel: Model<IOrders> = mongoose.model<IOrders>(
  "Orders",
  OrdersSchema
);

export default OrdersModel;
