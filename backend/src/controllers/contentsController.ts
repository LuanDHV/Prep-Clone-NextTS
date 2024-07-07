// src/controllers/contentsController.ts
import { Request, Response } from "express";
import ContentsModel from "../models/contentsModel";
import { IContents } from "../types/interface";

// Get all contents
export const getAllContents = async (req: Request, res: Response) => {
  try {
    const contents = await ContentsModel.find();
    res.status(200).json(contents);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get content details by ID
export const getContentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const content = await ContentsModel.findById(id);
    if (!content) {
      return res.status(404).json({ message: "Content not found" });
    }
    res.status(200).json(content);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new content
export const createContent = async (req: Request, res: Response) => {
  const contentData: IContents = req.body;
  try {
    const newContent = await ContentsModel.create(contentData);
    res.status(201).json(newContent);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Update content details by ID
export const updateContent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const contentData: IContents = req.body;
  try {
    const updatedContent = await ContentsModel.findByIdAndUpdate(
      id,
      contentData,
      {
        new: true,
      }
    );
    if (!updatedContent) {
      return res.status(404).json({ message: "Content not found to update" });
    }
    res.status(200).json(updatedContent);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a content by ID
export const deleteContent = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedContent = await ContentsModel.findByIdAndDelete(id);
    if (!deletedContent) {
      return res.status(404).json({ message: "Content not found to delete" });
    }
    res.status(200).json({ message: "Content deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
