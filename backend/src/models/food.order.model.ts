import mongoose, { Types } from "mongoose";
import { Food } from "./food.model.js";

import { User } from "./user.model.js";
import { FoodOrderItem } from "./food.order.item.model.js";

const { Schema, model } = mongoose;

const foodOrder = new Schema(
  {
    user: [
      {
        type: Schema.ObjectId,
        ref: User,
      },
    ],
    totalPrice: { type: Number, required: true },
    foodOrderItems: [
      {
        type: Schema.ObjectId,
        ref: FoodOrderItem,
      },
    ],
    status: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const FoodOrder = model("FoodOrder", foodOrder);

//  "user": [
//                 {
//                     "_id": "68590389f2533344acac01e9",
//                     "email": "jawline.batka@gmail.com",
//                     "password": "afwasdafsefad",
//                     "phoneNumber": 28942352,
//                     "address": "HUD",
//                     "role": "USER",
//                     "__v": 0
//                 }
//             ],
//             "totalPrice": 5000,
//             "foodOrderItems": []
