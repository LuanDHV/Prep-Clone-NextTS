//src/models/brandsModel.ts
import mongoose, { Model, Schema } from "mongoose";
import { IBrands } from "../types/interface";

const BrandsSchema: Schema<IBrands> = new mongoose.Schema(
  {
    course: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const BrandsModel: Model<IBrands> = mongoose.model<IBrands>(
  "Brands",
  BrandsSchema
);

export default BrandsModel;
