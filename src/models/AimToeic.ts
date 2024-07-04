import mongoose, { Document, Model, Schema } from "mongoose";

interface AimToeic extends Document {
  course: string;
  aim: string;
  description: string;
}

const AimToeicSchema: Schema<AimToeic> = new mongoose.Schema(
  {
    course: { type: String, required: true },
    aim: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

const AimToeicModel: Model<AimToeic> = mongoose.model<AimToeic>(
  "AimToeic",
  AimToeicSchema,
);

export default AimToeicModel;
