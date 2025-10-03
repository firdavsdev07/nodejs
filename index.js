import express from "express";
import postRoute from "./routes/post.route.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 3000;

const server = express();
server.use(express.json());
server.use(cors());

server.get("/", (_, res) => {
  res.send({ ok: true });
});
server.use("/posts", postRoute);

server.listen(PORT, () => {
  console.info("server is running 3000");
});
