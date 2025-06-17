import express from "express";
const server = express();
const port = 8000;
server.get("/", (req, res) => {
    res.send("hello");
});
server.listen(port, () => {
    console.log("server aslaa");
});
