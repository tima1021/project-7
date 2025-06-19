import { Request, Response } from "express";
import { FoodCategory } from "../models/food.category.model.js";

export const getAllCategory = async (req: Request, res: Response) => {
  const Categories = await FoodCategory.find();
  res.json({
    success: true,
    data: Categories,
  });
};
export const getCategoryByid = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const category = await FoodCategory.findById(categoryId);
    res.json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const createCategory = async (req: Request, res: Response) => {
  const category = req.body;
  const createdCategory = await FoodCategory.create(category);
  res.json({
    success: true,
    data: createdCategory,
  });
};
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const updatedCategory = req.body;

    const category = await FoodCategory.findByIdAndUpdate(
      categoryId,
      updatedCategory,
      {
        new: true,
      }
    );
    res.json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;

    const deletedCategory = await FoodCategory.findByIdAndDelete(categoryId);
    res.json({
      success: true,
      data: deletedCategory,
    });
  } catch (error) {
    res.status(444).json({
      success: false,
      error: error,
    });
  }
};
