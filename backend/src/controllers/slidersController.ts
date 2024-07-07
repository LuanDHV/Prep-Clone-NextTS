// src/controllers/slidersController.ts
import { Request, Response } from "express";
import SlidersModel from "../models/slidersModel";
import { ISliders } from "../types/interface";

// Get all sliders
export const getAllSliders = async (req: Request, res: Response) => {
  try {
    const sliders = await SlidersModel.find();
    res.status(200).json(sliders);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get slider details by ID
export const getSliderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const slider = await SlidersModel.findById(id);
    if (!slider) {
      return res.status(404).json({ message: "Slider not found" });
    }
    res.status(200).json(slider);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new slider
export const createSlider = async (req: Request, res: Response) => {
  const sliderData: ISliders = req.body;
  try {
    const newSlider = await SlidersModel.create(sliderData);
    res.status(201).json(newSlider);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Update slider details by ID
export const updateSlider = async (req: Request, res: Response) => {
  const { id } = req.params;
  const sliderData: ISliders = req.body;
  try {
    const updatedSlider = await SlidersModel.findByIdAndUpdate(id, sliderData, {
      new: true,
    });
    if (!updatedSlider) {
      return res.status(404).json({ message: "Slider not found to update" });
    }
    res.status(200).json(updatedSlider);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a slider by ID
export const deleteSlider = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedSlider = await SlidersModel.findByIdAndDelete(id);
    if (!deletedSlider) {
      return res.status(404).json({ message: "Slider not found to delete" });
    }
    res.status(200).json({ message: "Slider deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
