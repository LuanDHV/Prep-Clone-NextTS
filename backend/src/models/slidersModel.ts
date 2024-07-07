import mongoose, { Model, Schema } from "mongoose";
import { ISliders } from "../types/interface";

const SlidersSchema: Schema<ISliders> = new mongoose.Schema({
  courseType: { type: String, required: true }, // 'IELTS' or 'TOEIC'
  image: { type: String, required: true },
});
const SlidersModel: Model<ISliders> = mongoose.model<ISliders>(
  "Sliders",
  SlidersSchema
);

export default SlidersModel;
