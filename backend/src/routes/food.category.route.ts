import express from "express";
import {
  getAllCategory,
  createCategory,
  deleteCategory,
  updateCategory,
  getCategoryByid,
} from "../controllers/category.controller.js";

const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategory);
categoryRouter.get("/:categoryId", getCategoryByid);
categoryRouter.post("/", createCategory);
categoryRouter.patch("/:categoryId", updateCategory);
categoryRouter.delete("/:categoryId", deleteCategory);

export default categoryRouter;
