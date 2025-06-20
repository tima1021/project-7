import express from "express";
import {
  createFoodOrder,
  deleteFoodOrder,
  getAllFoodOrder,
  getFoodByid,
  updateFoodOrder,
} from "../controllers/food.order.controller.js";

const foodOrderRouter = express.Router();

foodOrderRouter.get("/", getAllFoodOrder);
foodOrderRouter.get("/:foodOrderId", getFoodByid);
foodOrderRouter.post("/", createFoodOrder);
foodOrderRouter.patch("/:foodOrderId", updateFoodOrder);
foodOrderRouter.delete("/:foodOrderId", deleteFoodOrder);

export default foodOrderRouter;
