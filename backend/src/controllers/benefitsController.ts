// src/controllers/benefitsController.ts
import { Request, Response } from "express";
import BenefitsModel from "../models/benefitsModel";
import { IBenefits } from "../types/interface";

// Get all benefits
export const getAllBenefits = async (req: Request, res: Response) => {
  try {
    const benefits = await BenefitsModel.find();
    res.status(200).json(benefits);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get benefit details by ID
export const getBenefitById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const benefit = await BenefitsModel.findById(id);
    if (!benefit) {
      return res.status(404).json({ message: "Benefit not found" });
    }
    res.status(200).json(benefit);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new benefit
export const createBenefit = async (req: Request, res: Response) => {
  const benefitData: IBenefits = req.body;
  try {
    const newBenefit = await BenefitsModel.create(benefitData);
    res.status(201).json(newBenefit);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Update benefit details by ID
export const updateBenefit = async (req: Request, res: Response) => {
  const { id } = req.params;
  const benefitData: IBenefits = req.body;
  try {
    const updatedBenefit = await BenefitsModel.findByIdAndUpdate(
      id,
      benefitData,
      {
        new: true,
      }
    );
    if (!updatedBenefit) {
      return res.status(404).json({ message: "Benefit not found to update" });
    }
    res.status(200).json(updatedBenefit);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a benefit by ID
export const deleteBenefit = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedBenefit = await BenefitsModel.findByIdAndDelete(id);
    if (!deletedBenefit) {
      return res.status(404).json({ message: "Benefit not found to delete" });
    }
    res.status(200).json({ message: "Benefit deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
