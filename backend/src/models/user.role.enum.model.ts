import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userRoleEnum = new Schema({
  User: User,
  ADMIN: ADMIN,
});

export const UserRoleEnum = model("UserRoleEnum", userRoleEnum);
