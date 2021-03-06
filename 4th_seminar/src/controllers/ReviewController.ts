import express, { Request, Response } from "express";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { validationResult } from "express-validator";
import { ReviewCreateDto } from "../interfaces/review/ReviewCreateDto";
import { stat } from "fs";
import ReviewService from "../services/ReviewService";
import { ReviewUpdateDto } from "../interfaces/review/ReviewUpdateDto";

/**
 * @route POST /review/movies/:movieId
 * @description Create Review
 * @access Public
 */
const createReview = async (req: Request, res: Response): Promise<void | Response> => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error);
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
    }

    const reviewCreateDto: ReviewCreateDto = req.body;
    const { movieId } = req.params;

    try {
        const data = await ReviewService.createReview(movieId, reviewCreateDto);

        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_REVIEW_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 * @route PUT /review/movies/:movieId
 * @description Update Review
 * @access Public
 */
 const updateReview = async (req: Request, res: Response): Promise<void | Response> => {
    const reviewUpdateDto: ReviewUpdateDto = req.body;
    const { reviewId } = req.params;

    try {
        const data = await ReviewService.updateReview(reviewId, reviewUpdateDto);
        if (data === null) {
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NONEXISTENT_ID));
        }
        res.status(statusCode.OK).send(util.success(statusCode.OK, message.UPDATE_REVIEW_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 * @route GET /review/movies/:movieId
 * @description Get Reviews
 * @access Public
 */
const getReviews = async (req: Request, res: Response): Promise<void | Response> => {
    const { movieId } = req.params;

    try {
        const data = await ReviewService.getReviews(movieId);
        if (data === null) {
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NONEXISTENT_ID));
        }

        res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_REVIEW_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 * @route DELETE /review/movies/:movieId
 * @description Delete Review
 * @access Public
 */
 const deleteReview = async (req: Request, res: Response): Promise<void | Response> => {
    const { reviewId } = req.params;

    try {
        const data = await ReviewService.deleteReview(reviewId);
        if (data === null) {
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NONEXISTENT_ID));
        }
        res.status(statusCode.OK).send(util.success(statusCode.OK, message.DELETE_REVIEW_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default {
    createReview,
    updateReview,
    getReviews,
    deleteReview,
}
