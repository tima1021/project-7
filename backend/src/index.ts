import express from "express";

import foodsRouter from "./routes/food.route.js";
import authRouter from "./routes/auth.route.js";
import categoryRouter from "./routes/food.category.route.js";
import mongoose from "mongoose";
import foodOrderRouter from "./routes/food.order.route.js";

import foodOrderItemRouter from "./routes/food.order.item.route.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI as string);

const server = express();
server.use(express.json());

const port = process.env.PORT;

server.use("/food", foodsRouter);
server.use("/auth", authRouter);
server.use("/food-category", categoryRouter);
server.use("/food-order", foodOrderRouter);
server.use("/food-order-item", foodOrderItemRouter);

server.get("/", (_req, res) => {
  res.send("odoo bolio");
});

server.listen(port, () => {
  console.log(`nmg avraarai eejee ${port}`);
});
