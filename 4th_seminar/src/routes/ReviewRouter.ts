import express, { Router } from "express";
import { body } from "express-validator/check";
import ReviewController from "../controllers/ReviewController";

const router: express.Router = Router();

router.post('/movies/:movieId', [
    body("title").notEmpty(),
    body("content").notEmpty(),
    body("writer").notEmpty(),
] ,ReviewController.createReview);

router.get('/movies/:movieId', ReviewController.getReviews);

export default router;
