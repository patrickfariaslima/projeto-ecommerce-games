import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/userModel';
import { Request, Response, NextFunction } from 'express';
// const secret = 'mySecret';

interface UserAttributes {
    email: string;
    password: string;
    role: string;
}

declare global {
    namespace Express {
        interface Request {
            token?: string;
        }
    }
}

export const authMiddleware = async (request: Request, response: Response, next: NextFunction) =>{
    try{
        const {email, password} = request.body;
        const user: UserAttributes | any = await User.findOne({
            where: {
                email,
            },
        });

        if(!user) return response.status(404).json({error: "User not found"},);

        const validatedPassword = await bcrypt.compare(password, user.password);

        if(!validatedPassword) return response.status(401).json({error: "Unauthorized"},);

        // VERIFICAR SE SERÁ REALMENTE NECESSÁRIO.
        // const payload = {
        //     email: user.email,
        //     role: user.role,
        // };

        // const token = jwt.sign(payload, secret);

        // request.token = token;

        next();
    } catch(error){
        return response.status(500).json({error:"Internal Server Error"});
    }
}