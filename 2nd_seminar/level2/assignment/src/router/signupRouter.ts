import express, { Router } from 'express';
import signup from '../api/signup';

const router: Router = express.Router();

router.post('/', signup);

export default router;
