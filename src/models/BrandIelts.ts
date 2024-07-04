import mongoose, { Document, Model, Schema } from "mongoose";

interface BrandIelts extends Document {
  course: string;
  brand: string;
  description: string;
}

const BrandIeltsSchema: Schema<BrandIelts> = new mongoose.Schema(
  {
    course: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

const BrandIeltsModel: Model<BrandIelts> = mongoose.model<BrandIelts>(
  "BrandIelts",
  BrandIeltsSchema,
);

export default BrandIeltsModel;
