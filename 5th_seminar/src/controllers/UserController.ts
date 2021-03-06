import express, { Request, Response } from "express";
import { UserCreateDto } from "../interfaces/user/UserCreateDto";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { UserService } from "../services";
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";
import { validationResult } from "express-validator";
import getToken from "../modules/jwtHandler";
import { UserSignInDto } from "../interfaces/user/UserSignInDto";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";

/**
 * @route POST /user
 * @desc Create User
 * @access Public
 */
const createUser = async (req: Request, res: Response): Promise<void | Response> => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error);
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, error.array()[0].msg));
    }
    
    const userCreateDto: UserCreateDto = req.body;

    try {
        const result = await UserService.createUser(userCreateDto);
        if (!result) return res.status(statusCode.CONFLICT).send(util.fail(statusCode.CONFLICT, message.DUPLICATED));

        const accessToken = getToken(result._id);
        
        const data = {
            _id: result._id,
            accessToken,
        };

        if (Object.keys(userCreateDto).length === 0) {
            res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
        }

        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_USER_SUCCESS, data));
    } catch (error) {
        // req.body가 비어 있음 
        if (Object.keys(userCreateDto).length === 0) {
            res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
        }
        // 서버 내부에서 오류 발생
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 * @route POST /user
 * @desc Create User
 * @access Public
 */
const signInUser = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error);
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, error.array()[0].msg));
    }

    const userSignInDto: UserSignInDto = req.body;

    try {
        const result = await UserService.signInUser(userSignInDto);
        if (!result) {
            return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
        }
        else if (result === 401) {
            return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, message.INVALID_PASSWORD));
        }
        
        const accessToken = getToken((result as PostBaseResponseDto)._id);

        const data = {
            _id: (result as PostBaseResponseDto)._id,
            accessToken
        }
        
        res.status(statusCode.OK).send(util.success(statusCode.OK, message.SIGNIN_USER_SUCCESS, data));
    } catch (error) {
        console.log(error);
        // 서버 내부에서 오류 발생
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 * @route PUT /user/:userId
 * @desc Update User
 * @access Public
 */
const updateUser = async (req: Request, res: Response): Promise<void | Response> => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error);
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, error.array()[0].msg));
    }
        
    const userUpdateDto: UserUpdateDto = req.body;
    const { userId } = req.params;

    try {
        await UserService.updateUser(userId, userUpdateDto);

        res.status(statusCode.NO_CONTENT).send();
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 * @route GET /user/:userId
 * @desc READ User
 * @access Public
 */
const findUserById = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;

    try {
        const data = await UserService.findUserById(userId);

        if (!data) {
            res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
        }

        res.status(statusCode.OK).send(util.success(statusCode.OK, message.CREATE_USER_SUCCESS, data));

    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;

    try {
        const data = await UserService.deleteUser(userId);
        res.status(statusCode.OK).send(util.success(statusCode.OK, message.DELETE_USER_SUCCESS, data));

    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default {
    createUser,
    signInUser,
    updateUser,
    findUserById,
    deleteUser,
}
