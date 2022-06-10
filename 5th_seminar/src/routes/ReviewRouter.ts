import express, { Router } from "express";
import { body } from "express-validator/check";
import ReviewController from "../controllers/ReviewController";
import auth from "../middleware/auth";

const router: express.Router = Router();

router.post('/movies/:movieId', [
    body("title").notEmpty(),
    body("content").notEmpty(),
    body("writer").notEmpty(),
] ,ReviewController.createReview);

router.put('/movies/:reviewId', ReviewController.updateReview);
router.get('/movies/:movieId', auth, ReviewController.getReviews);
router.delete('/movies/:reviewId', ReviewController.deleteReview);

export default router;
