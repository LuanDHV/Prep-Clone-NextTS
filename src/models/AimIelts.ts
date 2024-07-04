import mongoose, { Document, Model, Schema } from "mongoose";

interface AimIelts extends Document {
  course: string;
  aim: string;
  description: string;
}

const AimIeltsSchema: Schema<AimIelts> = new mongoose.Schema(
  {
    course: { type: String, required: true },
    aim: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

const AimIeltsModel: Model<AimIelts> = mongoose.model<AimIelts>(
  "AimIelts",
  AimIeltsSchema,
);

export default AimIeltsModel;
