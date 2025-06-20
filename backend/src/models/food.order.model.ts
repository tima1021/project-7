import mongoose from "mongoose";
import { Food } from "./food.model.js";

import { User } from "./user.model.js";

const { Schema, model } = mongoose;

const foodOrder = new Schema({
  user: [
    {
      type: Schema.ObjectId,
      ref: User,
    },
  ],
  totalPrice: Number,
  foodOrderItems: [
    {
      type: Schema.ObjectId,
      ref: Food,
    },
  ],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
    default: "PENDING",
  },
  createdAt: Date,
  updatedAt: Date,
});

export const FoodOrder = model("FoodOrder", foodOrder);
