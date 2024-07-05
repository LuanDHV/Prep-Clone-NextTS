// src/controllers/brandsController.ts
import { Request, Response } from "express";
import BrandsModel from "../models/brandsModel";
import { IBrands } from "../types/interface";

// Get all brands
export const getAllBrands = async (req: Request, res: Response) => {
  try {
    const brands = await BrandsModel.find();
    res.status(200).json(brands);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get details of a brand by ID
export const getBrandById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const brand = await BrandsModel.findById(id);
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.status(200).json(brand);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new brand
export const createBrand = async (req: Request, res: Response) => {
  const brandData: IBrands = req.body;
  try {
    const newBrand = await BrandsModel.create(brandData);
    res.status(201).json(newBrand);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Update brand details by ID
export const updateBrand = async (req: Request, res: Response) => {
  const { id } = req.params;
  const brandData: IBrands = req.body;
  try {
    const updatedBrand = await BrandsModel.findByIdAndUpdate(id, brandData, {
      new: true,
    });
    if (!updatedBrand) {
      return res.status(404).json({ message: "Brand not found to update" });
    }
    res.status(200).json(updatedBrand);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a brand by ID
export const deleteBrand = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedBrand = await BrandsModel.findByIdAndDelete(id);
    if (!deletedBrand) {
      return res.status(404).json({ message: "Brand not found to delete" });
    }
    res.status(200).json({ message: "Brand deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
