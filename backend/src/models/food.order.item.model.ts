import mongoose from "mongoose";

const { Schema, model } = mongoose;

const foodOrderItem = new Schema({
  food: String,
  quantity: Number,
});

export const FoodOrderItem = model("FoodOrderItem", foodOrderItem);
