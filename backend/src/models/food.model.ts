import mongoose from "mongoose";
import { ref } from "process";
import { FoodCategory } from "./food.category.model.js";

const { Schema, model } = mongoose;

const food = new Schema({
  foodName: { type: String, required: true },
  price: { type: Number, required: true },
  image: String,
  ingredients: { type: String, required: true },
  category: {
    type: Schema.ObjectId,
    ref: FoodCategory,
  },
  createdAt: Date,
  updatedAt: Date,
});

export const Food = model("Food", food);

// {
//   "foodName":"Pizza",
//   "price":7900,
//   "image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foodandwine.com%2Fclassic-cheese-pizza-6421445&psig=AOvVaw2kBzPuo9NbW6ql7zLYNxjL&ust=1750750716746000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiVkuaEh44DFQAAAAAdAAAAABAE",
//   "ingredients":"cheese peporonni",
//   "category":
// }
