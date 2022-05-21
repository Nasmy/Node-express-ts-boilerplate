import { Request, Response, NextFunction } from "express";
import logging from "../utils/logging";

const NAMESPACE = 'User Controller';

const userLogin = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `User Login Route Call`);

    return res.status(200).json({
        message: 'Pong'
    })
};

export default {userLogin}