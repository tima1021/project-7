import express from "express";
import {
  getAllCategory,
  createCategory,
  deleteCategory,
  updateCategory,
  getCategoryByid,
} from "../controllers/category.controller.js";
import verifyToken from "../middleware/verifytoken.js";

const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategory);
categoryRouter.get("/:categoryId", getCategoryByid);
categoryRouter.post("/", verifyToken, createCategory);
categoryRouter.patch("/:categoryId", verifyToken, updateCategory);
categoryRouter.delete("/:categoryId", verifyToken, deleteCategory);

export default categoryRouter;
