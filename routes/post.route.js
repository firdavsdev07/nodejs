import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router = Router();

const post = [];

router.get("/", (_, res) => {
  res.status(200).send(post);
});

router.post("/", (req, res) => {
  const { title, img_url } = req.body;
  try {
    if (!title || !img_url) {
      res.send("maydonlarni to'ldiring");
      return;
    }
    const newPost = {
      id: uuidv4(),
      title,
      img_url,
    };
    post.push(newPost);

    res.status(201).send({ posts: newPost });
  } catch (error) {
    res.send(error.message);
  }
});

export default router;
