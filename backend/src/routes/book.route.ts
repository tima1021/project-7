import express from "express";
import { createBook, getAllBook } from "../controllers/book.controller.js";
const booksRouter = express.Router();

booksRouter.get("/", getAllBook);
booksRouter.post("/", createBook);

export default booksRouter;
