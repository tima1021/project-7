import { Request, Response } from "express";
import { Food } from "../models/food.model.js";

export const getAllFoods = async (req: Request, res: Response) => {
  const foods = await Food.find().populate("category");
  res.json({
    success: true,
    data: foods,
  });
};
export const getFoodByid = async (req: Request, res: Response) => {
  try {
    const { foodId } = req.params;
    const food = await Food.findById(foodId).populate("category");
    res.json({
      success: true,
      data: food,
    });
  } catch (error) {
    res.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const createFood = async (req: Request, res: Response) => {
  const food = req.body;
  const createdFood = (await Food.create(food)).populate("category");
  res.json({
    success: true,
    data: createdFood,
  });
};
export const updateFood = async (req: Request, res: Response) => {
  try {
    const { foodId } = req.params;
    const updatedFood = req.body;

    const food = await Food.findByIdAndUpdate(foodId, updatedFood, {
      new: true,
    }).populate("category");
    res.json({
      success: true,
      data: food,
    });
  } catch (error) {
    res.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const deleteFood = async (req: Request, res: Response) => {
  try {
    const { foodId } = req.params;

    const deletedfood = await Food.findByIdAndDelete(foodId).populate(
      "category"
    );
    res.json({
      success: true,
      data: deletedfood,
    });
  } catch (error) {
    res.status(444).json({
      success: false,
      error: error,
    });
  }
};
