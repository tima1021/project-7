import mongoose from "mongoose";

const { Schema, model } = mongoose;

const user = new Schema({
  email: String,
  password: String,
  phoneNumber: Number,
  address: String,
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
