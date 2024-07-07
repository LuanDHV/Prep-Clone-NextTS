import mongoose, { Model, Schema } from "mongoose";
import { IBenefits } from "../types/interface";

const BenefitsSchema: Schema<IBenefits> = new mongoose.Schema({
  courseType: { type: String, required: true }, // 'IELTS' or 'TOEIC'
  contents: { type: [String], required: true },
});
const BenefitsModel: Model<IBenefits> = mongoose.model<IBenefits>(
  "Benefits",
  BenefitsSchema
);

export default BenefitsModel;
