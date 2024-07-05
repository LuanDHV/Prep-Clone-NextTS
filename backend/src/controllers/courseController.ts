//src/controllers/coursesController.ts
import { Request, Response } from "express";
import CoursesModel from "../models/coursesModel";
import { ICourses } from "../types/interface";

// Get all courses
export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await CoursesModel.find();
    res.status(200).json(courses);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get details of a course by ID
export const getCourseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const course = await CoursesModel.findById(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new course
export const createCourse = async (req: Request, res: Response) => {
  const courseData: ICourses = req.body;
  try {
    const newCourse = await CoursesModel.create(courseData);
    res.status(201).json(newCourse);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Update course details by ID
export const updateCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  const courseData: ICourses = req.body;
  try {
    const updatedCourse = await CoursesModel.findByIdAndUpdate(id, courseData, {
      new: true,
    });
    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found to update" });
    }
    res.status(200).json(updatedCourse);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a course by ID
export const deleteCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedCourse = await CoursesModel.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found to delete" });
    }
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
