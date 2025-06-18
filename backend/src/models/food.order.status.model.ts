import { CANCELLED } from "dns";
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const foodOrderStatus = new Schema({
  PENDING: PENDING,
  CANCELED: CANCELLED,
  DELIVERED: DELIVERED,
});

export const FoodOrderStatus = model("FoodOrderStatus", foodOrderStatus);
