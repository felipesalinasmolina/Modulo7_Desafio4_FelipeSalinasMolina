import { Router } from "express";
import { createLikes, getLike,updateLike,deleteLike } from "../controlllers/likes.controlller.js";

const router = Router();

//parte 1
router.post("/posts", createLikes);
router.get("/posts", getLike);

//parte 2

router.put("/posts/like/:id",updateLike);
router.delete("/posts/:id",deleteLike)


export default router;
