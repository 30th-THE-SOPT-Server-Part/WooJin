import express, { Router } from "express";
import { likePost, selectPost } from "../api/blog";

const router: Router = express.Router();

router.get('/:blogId', selectPost);
router.get('/like/:blogId', likePost);

export default router;
