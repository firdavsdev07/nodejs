import express from "express";
import postRoute from "./routes/post.route.js";

const server = express();
server.use(express.json());
server.get("/", (_, res) => {
  res.send({ ok: true });
});
server.use("/posts", postRoute);

server.listen(3000, () => {
  console.info("server is running 3000");
});
