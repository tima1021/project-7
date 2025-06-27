import express from "express";
import {
  createFoodOrder,
  deleteFoodOrder,
  getAllFoodOrder,
  getFoodByid,
  updateFoodOrder,
} from "../controllers/food.order.controller.js";
import verifyToken from "../middleware/verifytoken.js";

const foodOrderRouter = express.Router();

foodOrderRouter.get("/", getAllFoodOrder);
foodOrderRouter.get("/:foodOrderId", verifyToken, getFoodByid);
foodOrderRouter.post("/", verifyToken, createFoodOrder);
foodOrderRouter.patch("/:foodOrderId", verifyToken, updateFoodOrder);
foodOrderRouter.delete("/:foodOrderId", verifyToken, deleteFoodOrder);

export default foodOrderRouter;
