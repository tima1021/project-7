import { Request, Response } from "express";
import { FoodOrder } from "../models/food.order.model.js";

export const getAllFoodOrder = async (req: Request, res: Response) => {
  const foodOrder = await FoodOrder.find()
    .populate("foodOrderItems")
    .populate("user");
  res.json({
    success: true,
    data: foodOrder,
  });
};
export const getFoodByid = async (req: Request, res: Response) => {
  try {
    const { foodOrderId } = req.params;
    const foodOrder = await FoodOrder.findById(foodOrderId)
      .populate("foodOrderItems")
      .populate("user");
    res.json({
      success: true,
      data: foodOrder,
    });
  } catch (error) {
    res.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const createFoodOrder = async (req: Request, res: Response) => {
  const foodOrder = req.body;
  const createdFoodOrder = await (
    await (await FoodOrder.create(foodOrder)).populate("foodOrderItems")
  ).populate("user");

  res.json({
    success: true,
    data: createdFoodOrder,
  });
};
export const updateFoodOrder = async (req: Request, res: Response) => {
  try {
    const { foodOrderId } = req.params;
    const updatedFoodOrder = req.body;

    const newFoodOrder = await FoodOrder.findByIdAndUpdate(
      foodOrderId,
      updatedFoodOrder,
      {
        new: true,
      }
    )
      .populate("foodOrderItems")
      .populate("user");
    res.json({
      success: true,
      data: newFoodOrder,
    });
  } catch (error) {
    res.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const deleteFoodOrder = async (req: Request, res: Response) => {
  try {
    const { foodOrderId } = req.params;

    const deletedFoodOrder = await FoodOrder.findByIdAndDelete(foodOrderId);
    res.json({
      success: true,
      data: deletedFoodOrder,
    });
  } catch (error) {
    res.status(444).json({
      success: false,
      error: error,
    });
  }
};
