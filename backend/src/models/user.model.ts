import mongoose from "mongoose";

const { Schema, model } = mongoose;

const user = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  address: { type: String, required: true },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
  },
  isVerified: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

export const User = model("User", user);
