// src/models/ordesrModel.ts

import mongoose, { Model, Schema } from "mongoose";
import { IOrders } from "../types/interface";

const OrdersSchema: Schema<IOrders> = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    roadMapName: { type: String, required: true },
    courses: { type: String, required: true },
    duration: { type: String, required: true },
    coupon: { type: String },
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
