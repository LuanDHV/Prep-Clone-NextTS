// src/controllers/supportsController.ts
import { Request, Response } from "express";
import SupportsModel from "../models/supportsModel";
import { ISupports } from "../types/interface";

// Get all supports
export const getAllSupports = async (req: Request, res: Response) => {
  try {
    const supports = await SupportsModel.find();
    res.status(200).json(supports);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get details of a support by ID
export const getSupportById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const support = await SupportsModel.findById(id);
    if (!support) {
      return res.status(404).json({ message: "Support not found" });
    }
    res.status(200).json(support);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new support
export const createSupport = async (req: Request, res: Response) => {
  const supportData: ISupports = req.body;
  try {
    const newSupport = await SupportsModel.create(supportData);
    res.status(201).json(newSupport);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Update support details by ID
export const updateSupport = async (req: Request, res: Response) => {
  const { id } = req.params;
  const supportData: ISupports = req.body;
  try {
    const updatedSupport = await SupportsModel.findByIdAndUpdate(
      id,
      supportData,
      {
        new: true,
      }
    );
    if (!updatedSupport) {
      return res.status(404).json({ message: "Support not found to update" });
    }
    res.status(200).json(updatedSupport);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a support by ID
export const deleteSupport = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedSupport = await SupportsModel.findByIdAndDelete(id);
    if (!deletedSupport) {
      return res.status(404).json({ message: "Support not found to delete" });
    }
    res.status(200).json({ message: "Support deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
