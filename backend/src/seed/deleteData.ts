import mongoose from "mongoose";
import dotenv from "dotenv";

import aimsModel from "../models/aimsModel";
import brandsModel from "../models/brandsModel";
import coursesModel from "../models/coursesModel";
import slidersModel from "../models/slidersModel";
import benefitsModel from "../models/benefitsModel";
import contentsModel from "../models/contentsModel";
import couponsModel from "../models/couponsModel";
import supportsModel from "../models/supportsModel";

dotenv.config();

const deleteData = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("MongoDB connected");

    await aimsModel.deleteMany();
    console.log("Deleted aims");

    await brandsModel.deleteMany();
    console.log("Deleted brands");

    await coursesModel.deleteMany();
    console.log("Deleted courses");

    await slidersModel.deleteMany();
    console.log("Deleted sliders");

    await benefitsModel.deleteMany();
    console.log("Deleted benefits");

    await contentsModel.deleteMany();
    console.log("Deleted contents");

    await couponsModel.deleteMany();
    console.log("Deleted coupons");

    await supportsModel.deleteMany();
    console.log("Deleted supports");

    console.log("All data deleted successfully!");
    process.exit();
  } catch (error) {
    console.error("Error deleting data:", error);
    process.exit(1);
  }
};

deleteData();
