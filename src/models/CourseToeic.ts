import mongoose, { Document, Model, Schema } from "mongoose";

interface Lesson {
  title: string;
  content: string;
}
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
  lessons: Lesson[];
  createdAt: Date;
  updatedAt: Date;
}

const LessonSchema: Schema<Lesson> = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const CourseToeicSchema: Schema<CourseToeic> = new mongoose.Schema(
  {
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
    lessons: { type: [LessonSchema], required: true },
  },
  { timestamps: true },
);

const CourseToeicModel: Model<CourseToeic> = mongoose.model<CourseToeic>(
  "CourseToeic",
  CourseToeicSchema,
);

export default CourseToeicModel;
