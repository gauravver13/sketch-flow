import { JWT_SECRET } from "@repo/backend-common/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

// Extend the Request interface to include userId
declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}

interface JwtPayload {
    userId: string;
}

export default function middleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["authorization"] ?? "";

    const decodedToken = jwt.verify(token, JWT_SECRET) as JwtPayload;

    if(decodedToken) {
        req.userId = decodedToken.userId;
        next()
    } else {
        res.status(401).json({
            message: "Unauthorised User"
        })
    }
}