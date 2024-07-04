import mongoose, { Document, Model, Schema } from "mongoose";

// Define an interface for the document
interface CourseToeic extends Document {
  name: string;
  description: string;
  price: number;
  discount: number;
  duration: string;
  inputLevel: string;
  list: number;
  time: string;
  numberOfPeople: number;
  review: number;
}

// Schema definition
const CourseToeicSchema: Schema<CourseToeic> = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  duration: { type: String, required: true },
  inputLevel: { type: String, required: true },
  list: { type: Number, required: true },
  time: { type: String, required: true },
  numberOfPeople: { type: Number, required: true },
  review: { type: Number, required: true },
});

// Model definition
const CourseToeicModel: Model<CourseToeic> = mongoose.model<CourseToeic>(
  "CourseToeic",
  CourseToeicSchema,
);

export default CourseToeicModel;
