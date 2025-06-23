import express from "express";

import foodsRouter from "./routes/food.route.js";
import authRouter from "./routes/auth.route.js";
import categoryRouter from "./routes/food.category.route.js";
import mongoose from "mongoose";
import foodOrderRouter from "./routes/food.order.route.js";

import foodOrderItemRouter from "./routes/food.order.item.route.js";

mongoose.connect(
  "mongodb+srv://togtoh:oCyqBUJ5pbXFXdrJ@cluster0.rds2ass.mongodb.net/food-delivery"
);

const server = express();
server.use(express.json());

const port = 8000;

server.use("/food", foodsRouter);
server.use("/auth", authRouter);
server.use("/food-category", categoryRouter);
server.use("/food-order", foodOrderRouter);
server.use("/food-order-item", foodOrderItemRouter);
console.log("books");

server.get("/", (_req, res) => {
  res.send("hello");
});

server.listen(port, () => {
  console.log("nmg avraarai");
});
