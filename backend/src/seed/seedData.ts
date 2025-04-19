import mongoose from "mongoose";
import dotenv from "dotenv";

import aimsData from "../seed/aimsData";
import brandsData from "../seed/brandsData";
import coursesData from "../seed/coursesData";
import slidersData from "../seed/slidersData";
import benefitsData from "../seed/benefitsData";
import contentsData from "../seed/contentsData";
import couponsData from "../seed/couponsData";
import supportsData from "../seed/supportsData";

import aimsModel from "../models/aimsModel";
import brandsModel from "../models/brandsModel";
import coursesModel from "../models/coursesModel";
import slidersModel from "../models/slidersModel";
import benefitsModel from "../models/benefitsModel";
import contentsModel from "../models/contentsModel";
import couponsModel from "../models/couponsModel";
import supportsModel from "../models/supportsModel";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("MongoDB connected");

    await aimsModel.insertMany(aimsData);
    console.log("Seeded aims");

    await brandsModel.insertMany(brandsData);
    console.log("Seeded brands");

    await coursesModel.insertMany(coursesData);
    console.log("Seeded courses");

    await slidersModel.insertMany(slidersData);
    console.log("Seeded sliders");

    await benefitsModel.insertMany(benefitsData);
    console.log("Seeded benefits");

    await contentsModel.insertMany(contentsData);
    console.log("Seeded contents");

    await couponsModel.insertMany(couponsData);
    console.log("Seeded coupons");

    await supportsModel.insertMany(supportsData);
    console.log("Seeded supports");

    console.log("All data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
