import express, { Request, Response } from "express";
import { UserCreateDto } from "../interfaces/user/UserCreateDto";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { UserService } from "../services";
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";

/**
 * @route POST /user
 * @desc Create User
 * @access Public
 */
const createUser = async (req: Request, res: Response): Promise<void> => {
    const userCreateDto: UserCreateDto = req.body;

    try {
        const data = await UserService.createUser(userCreateDto);
        console.log('--- dto ---');
        console.log(`data: ${userCreateDto}`);
        console.log(`type: ${typeof userCreateDto}`);
        console.log(`!: ${!userCreateDto}`);
        console.log('--- req.body ---');
        console.log(`data: ${req.body}`);
        console.log(`type: ${typeof req.body}`);
        console.log(`!: ${!req.body}`);
        console.log('--- keys ---');
        console.log(`data: ${Object.keys(userCreateDto)}`);
        console.log(`type: ${typeof Object.keys(userCreateDto)}`);
        console.log(`!: ${!Object.keys(userCreateDto)}`);
        console.log(`개수: ${Object.keys(userCreateDto).length}`);

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
 * @route PUT /user/:userId
 * @desc Update User
 * @access Public
 */
const updateUser = async (req: Request, res: Response): Promise<void> => {
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
    updateUser,
    findUserById,
    deleteUser,
}
