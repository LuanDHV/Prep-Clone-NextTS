//src/models/coursesModel.ts
import mongoose, { Model, Schema } from "mongoose";
import { ICourses, ILessons } from "../types/interface";

const LessonSchema: Schema<ILessons> = new mongoose.Schema({
  title: { type: String, required: true },
  video: { type: String, required: true },
});

const CoursesSchema: Schema<ICourses> = new mongoose.Schema(
  {
    courseType: { type: String, required: true }, // 'IELTS' or 'TOEIC'
    title: { type: String, required: true },
    description: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    duration: { type: String, required: true },
    inputLevel: { type: String, required: true },
    list: { type: Number, required: true },
    time: { type: String, required: true },
    people: { type: Number, required: true },
    review: { type: Number, required: true },
    lessons: { type: [LessonSchema], required: true },
  },
  { timestamps: true }
);

const CoursesModel: Model<ICourses> = mongoose.model<ICourses>(
  "Courses",
  CoursesSchema
);

export default CoursesModel;
