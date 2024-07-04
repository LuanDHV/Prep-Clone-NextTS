import mongoose, { Document, Model, Schema } from "mongoose";

interface BrandToeic extends Document {
  course: string;
  brand: string;
  description: string;
}

const BrandToeicSchema: Schema<BrandToeic> = new mongoose.Schema({
  course: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
});

const BrandToeicModel: Model<BrandToeic> = mongoose.model<BrandToeic>(
  "BrandToeic",
  BrandToeicSchema,
);

export default BrandToeicModel;
