import mongoose from "mongoose";

const { Schema, model } = mongoose;

const foodCategory = new Schema({
  categoryName: String,
  createdAt: Date,
  updatedAt: Date,
});

export const FoodCategory = model("FoodCategory", foodCategory);
