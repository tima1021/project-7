import mongoose from "mongoose";
import { ref } from "process";
import { FoodCategory } from "./food.category.model.js";

const { Schema, model } = mongoose;

const food = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: String,
    ingredients: { type: String, required: true },
    category: {
      type: Schema.ObjectId,
      ref: FoodCategory,
    },
  },
  { timestamps: true }
);

export const Food = model("Food", food);
