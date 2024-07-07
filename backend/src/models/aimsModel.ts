//src/models/aimsModel.ts
import mongoose, { Model, Schema } from "mongoose";
import { IAims } from "../types/interface";

const AimsSchema: Schema<IAims> = new mongoose.Schema({
  courseType: { type: String, required: true }, // 'IELTS' or 'TOEIC'
  aim: { type: String, required: true },
  description: { type: String, required: true },
});

const AimsModel: Model<IAims> = mongoose.model<IAims>("Aims", AimsSchema);

export default AimsModel;
