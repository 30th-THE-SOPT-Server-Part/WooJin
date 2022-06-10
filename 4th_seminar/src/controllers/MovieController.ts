import express, { Request, Response } from "express";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { validationResult } from "express-validator";
import { MovieCreateDto } from "../interfaces/movie/MovieCreateDto";
import MovieService from "../services/MovieService";

/**
 * @route POST /movie
 * @description Create Movie
 * @access Public
 */
const createMovie = async (req: Request, res: Response): Promise<void | Response> => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error);
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, error.array()[0].msg));
    }

    const movieCreateDto: MovieCreateDto = req.body;

    try {
        const data = await MovieService.createMovie(movieCreateDto);
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_MOVIE_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 * @route PUT /movie
 * @description Update Movie
 * @access Public
 */
const updateMovie = async (req: Request, res: Response): Promise<void | Response> => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error);
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, error.array()[0].msg));
    }

    const movieUpdateDto = req.body;
    const { movieId } = req.params;

    try {
        const data = await MovieService.updateMovie(movieId, movieUpdateDto);
        if (data === null) {
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NONEXISTENT_ID));
        }
        res.status(statusCode.OK).send(util.success(statusCode.OK, message.UPDATE_MOVIE_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }

}

/**
 * @route GET /movie
 * @description Read Movie
 * @access Public
 */
 const findMovieById = async (req: Request, res: Response): Promise<void | Response> => {
    const { movieId } = req.params;

    try {
        const data = await MovieService.findMovieById(movieId);
        if (data === null) {
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NONEXISTENT_ID));
        }
        res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_MOVIE_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));        
    }
}

/**
 * @route DELETE /movie
 * @description Delete Movie
 * @access Public
 */
 const deleteMovie = async (req: Request, res: Response): Promise<void | Response> => {
    const { movieId } = req.params;
    
    try {
        const data = await MovieService.deleteMovie(movieId);
        if (data === null) {
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NONEXISTENT_ID));
        }
        res.status(statusCode.OK).send(util.success(statusCode.OK, message.DELETE_MOVIE_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));        
    }
}

export default {
    createMovie,
    updateMovie,
    findMovieById,
    deleteMovie,
}
