// src/controllers/couponsController.ts
import { Request, Response } from "express";
import CouponModel from "../models/couponsModel";
import { ICoupon } from "../types/interface";

// Get all coupons
export const getAllCoupons = async (req: Request, res: Response) => {
  try {
    const coupons = await CouponModel.find();
    res.status(200).json(coupons);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get a coupon by code
export const getCouponByCode = async (req: Request, res: Response) => {
  const { code } = req.params;
  try {
    const coupon = await CouponModel.findOne({ code });
    if (!coupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }
    res.status(200).json(coupon);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new coupon
export const createCoupon = async (req: Request, res: Response) => {
  const couponData: ICoupon = req.body;
  try {
    const newCoupon = await CouponModel.create(couponData);
    res.status(201).json(newCoupon);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Update coupon details by code
export const updateCoupon = async (req: Request, res: Response) => {
  const { code } = req.params;
  const couponData: ICoupon = req.body;
  try {
    const updatedCoupon = await CouponModel.findOneAndUpdate(
      { code },
      couponData,
      {
        new: true,
      }
    );
    if (!updatedCoupon) {
      return res.status(404).json({ message: "Coupon not found to update" });
    }
    res.status(200).json(updatedCoupon);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a coupon by code
export const deleteCoupon = async (req: Request, res: Response) => {
  const { code } = req.params;
  try {
    const deletedCoupon = await CouponModel.findOneAndDelete({ code });
    if (!deletedCoupon) {
      return res.status(404).json({ message: "Coupon not found to delete" });
    }
    res.status(200).json({ message: "Coupon deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
