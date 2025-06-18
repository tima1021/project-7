import { Request, Response } from "express";
import { Food } from "../models/food.model.js";

export const getAllFoods = async (req: Request, res: Response) => {
  const foods = await Food.find();
  res.json({
    success: true,
    data: foods,
  });
};
export const getFoodByid = (req: Request, res: Response) => {
  const food = Food.findById(req.params.id);

  res.json({
    success: true,
    data: food,
  });
};
export const createFood = async (req: Request, res: Response) => {
  const food = req.body;
  const createdFood = await Food.create(food);
  res.json({
    success: true,
    data: createdFood,
  });
};
export const updateFood = (req: Request, res: Response) => {
  res.send("food/:foodId patch huselt");
};
