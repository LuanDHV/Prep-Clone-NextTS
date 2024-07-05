//src/models/aimsModel.ts
import mongoose, { Model, Schema } from "mongoose";
import { IAims } from "../types/interface";

const AimsSchema: Schema<IAims> = new mongoose.Schema(
  {
    course: { type: String, required: true },
    aim: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const AimsModel: Model<IAims> = mongoose.model<IAims>("Aims", AimsSchema);

export default AimsModel;
