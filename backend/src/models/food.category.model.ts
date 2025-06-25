import mongoose from "mongoose";

const { Schema, model } = mongoose;

const foodCategory = new Schema(
  {
    categoryName: { type: String, required: true },
  },
  { timestamps: true }
);

export const FoodCategory = model("FoodCategory", foodCategory);
