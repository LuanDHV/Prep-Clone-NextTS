import mongoose, { Model, Schema } from "mongoose";
import { IContents } from "../types/interface";

const ContentsSchema: Schema<IContents> = new mongoose.Schema({
  courseType: { type: String, required: true }, // 'IELTS' or 'TOEIC'
  image: { type: String, required: true },
  bgBanner: { type: String, required: true },
  textColor: { type: String, required: true },
  text1: { type: String, required: true },
  text2: { type: String, required: true },
  text3: { type: String, required: true },
  text4: { type: String, required: true },
  text5: { type: String, required: true },
  text6: { type: String, required: true },
  text7: { type: String, required: true },
  text8: { type: String, required: true },
  text9: { type: String, required: true },
  text10: { type: String, required: true },
  text11: { type: String, required: true },
});
const ContentsModel: Model<IContents> = mongoose.model<IContents>(
  "Contents",
  ContentsSchema
);

export default ContentsModel;
