//router index file
import { Router } from 'express';
import UserRouter from "./UserRouter";
import MovieRouter from "./MovieRouter";
import ReviewRouter from './ReviewRouter';

const router: Router = Router();

router.use('/user', UserRouter);
router.use('/movie', MovieRouter);
router.use('/review', ReviewRouter);

export default router;
