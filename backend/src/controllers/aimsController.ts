// src/controllers/aimsController.ts
import { Request, Response } from "express";
import AimsModel from "../models/aimsModel";
import { IAims } from "../types/interface";

// Get all aims
export const getAllAims = async (req: Request, res: Response) => {
  try {
    const aims = await AimsModel.find();
    res.status(200).json(aims);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get details of an aim by ID
export const getAimById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const aim = await AimsModel.findById(id);
    if (!aim) {
      return res.status(404).json({ message: "Aim not found" });
    }
    res.status(200).json(aim);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new aim
export const createAim = async (req: Request, res: Response) => {
  const aimData: IAims = req.body;
  try {
    const newAim = await AimsModel.create(aimData);
    res.status(201).json(newAim);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Update aim details by ID
export const updateAim = async (req: Request, res: Response) => {
  const { id } = req.params;
  const aimData: IAims = req.body;
  try {
    const updatedAim = await AimsModel.findByIdAndUpdate(id, aimData, {
      new: true,
    });
    if (!updatedAim) {
      return res.status(404).json({ message: "Aim not found to update" });
    }
    res.status(200).json(updatedAim);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an aim by ID
export const deleteAim = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedAim = await AimsModel.findByIdAndDelete(id);
    if (!deletedAim) {
      return res.status(404).json({ message: "Aim not found to delete" });
    }
    res.status(200).json({ message: "Aim deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
