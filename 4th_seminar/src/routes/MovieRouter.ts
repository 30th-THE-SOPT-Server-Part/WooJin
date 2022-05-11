import express, { Router } from "express";
import { body } from "express-validator/check";
import MovieController from "../controllers/MovieController";

const router: express.Router = Router();

router.post('/', [
    body("title")
        .notEmpty().withMessage('title이 비어있습니다.'),
    body("director")
        .notEmpty().withMessage('director가 비어있습니다.'),
    body("startDate")
        .isDate().withMessage('startDate의 형식이 올바르지 않습니다.'),
] ,MovieController.createMovie);

router.put('/:movieId', [
    body("startDate")
        .isDate().withMessage('startDate의 형식이 올바르지 않습니다.'),
], MovieController.updateMovie);

router.get('/:movieId', MovieController.findMovieById);

router.delete('/:movieId', MovieController.deleteMovie);

export default router;
