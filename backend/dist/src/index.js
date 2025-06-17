import express from "express";
import booksRouter from "./routes/book.route.js";
const server = express();
server.use(express.json());
const port = 8000;
server.use("/books", booksRouter);
server.get("/", (_req, res) => {
    res.send("hello");
});
server.listen(port, () => {
    console.log("nmg avraarai");
});
