// src/models/couponsModel.ts
import mongoose, { Model, Schema } from "mongoose";
import { ICoupons } from "../types/interface";

const CouponsSchema: Schema<ICoupons> = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discountPercentage: { type: Number, required: true },
});

const CouponsModel: Model<ICoupons> = mongoose.model<ICoupons>(
  "Coupons",
  CouponsSchema
);

export default CouponsModel;
