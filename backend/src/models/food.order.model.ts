import mongoose from "mongoose";

const { Schema, model } = mongoose;

const foodOrder = new Schema({
  user: String,
  totalPrice: Number,
  foodOrderItems: String,
  status: String,
  createdAt: Date,
  updatedAt: Date,
});

export const FoodOrder = model("FoodOrder", foodOrder);
