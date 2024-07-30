// src/models/coursesModel.ts
import mongoose, { Model, Schema } from "mongoose";
import { ICourses, ILessons } from "../types/interface";

const LessonsSchema: Schema<ILessons> = new mongoose.Schema({
  title: { type: String, required: true },
  video: { type: String, required: true },
});

const CoursesSchema: Schema<ICourses> = new mongoose.Schema({
  courseType: { type: String, required: true }, // 'IELTS' or 'TOEIC'
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  discount: { type: String, required: true },
  inputLevel: { type: String, required: true },
  duration: { type: String, required: true },
  list: { type: Number, required: true },
  people: { type: Number, required: true },
  review: { type: Number, required: true },
  lessons: { type: [LessonsSchema], required: true },
});

const CoursesModel: Model<ICourses> = mongoose.model<ICourses>(
  "Courses",
  CoursesSchema
);

export default CoursesModel;
