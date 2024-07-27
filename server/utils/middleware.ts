import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const secretKey = 'your-secret-key'; // Replace with your actual secret key

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (token == null) return res.sendStatus(401); // Unauthorized

    jwt.verify(token, secretKey, (err: jwt.JsonWebTokenError | null, user: any) => {
        if (err) return res.sendStatus(403); // Forbidden
        if (user) {
            (req as any).user = user; // Type assertion
            next();
        } else {
            res.sendStatus(403); // Forbidden
        }
    });
};
