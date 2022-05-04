import express, { Router } from "express";

import userRouter from "./userRouter";
import blogRouter from "./blogRouter";
import signupRouter from "./signupRouter";

const router: Router = express.Router();

router.use('/user', userRouter);
router.use('/blog', blogRouter);
router.use('/auth', signupRouter);

export default router;
