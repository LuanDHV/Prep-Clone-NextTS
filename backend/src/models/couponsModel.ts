// src/models/couponsModel.ts
import mongoose, { Model, Schema } from "mongoose";
import { ICoupon } from "../types/interface";

const CouponSchema: Schema<ICoupon> = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discountPercentage: { type: Number, required: true },
});

const CouponModel: Model<ICoupon> = mongoose.model<ICoupon>(
  "Coupon",
  CouponSchema
);

export default CouponModel;
