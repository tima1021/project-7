import express from "express";
import {
  getAllFoods,
  getFoodByid,
  createFood,
  updateFood,
  deleteFood,
} from "../controllers/food.controller.js";
import verifyToken from "../middleware/verifytoken.js";

const foodsRouter = express.Router();

foodsRouter.get("/", verifyToken as any, getAllFoods);
foodsRouter.post("/", createFood);
foodsRouter.patch("/:foodId", updateFood);
foodsRouter.delete("/:foodId", deleteFood);
foodsRouter.get("/:foodId", getFoodByid);

export default foodsRouter;
