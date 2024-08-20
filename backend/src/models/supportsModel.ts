// src/models/supportsModel.ts
import mongoose, { Model, Schema } from "mongoose";
import { ISupports } from "../types/interface";

const SupportsSchema: Schema<ISupports> = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  userType: { type: String, required: true },
  interest: { type: String, required: true },
  goal: { type: String, required: true },
});

const SupportsModel: Model<ISupports> = mongoose.model<ISupports>(
  "Supports",
  SupportsSchema
);

export default SupportsModel;
