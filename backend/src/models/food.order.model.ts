import mongoose from "mongoose";

const { Schema, model } = mongoose;

const foodOrder = new Schema({
  user: String,
  totalPrice: Number,
  foodOrderItems: String,
  status: {
    type: String,
    enum: ["PENDING ", "CANCELED", "DELIVERED"],
    default: "PENDING",
  },
  createdAt: Date,
  updatedAt: Date,
});

export const FoodOrder = model("FoodOrder", foodOrder);
