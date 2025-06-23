import express from "express";
import {
  getAllFoodOrderItems,
  createFoodOrderItem,
  updateFoodOrderItem,
  deleteFoodOrderItem,
} from "../controllers/food.order.item.controller.js";

const foodOrderItemRouter = express.Router();

foodOrderItemRouter.get("/", getAllFoodOrderItems);
foodOrderItemRouter.post("/", createFoodOrderItem);
foodOrderItemRouter.patch("/:foodOrderItemId", updateFoodOrderItem);
foodOrderItemRouter.delete("/:foodOrderItemId", deleteFoodOrderItem);

export default foodOrderItemRouter;
