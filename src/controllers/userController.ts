import { User } from "../models/userModel";
import bcrypt from 'bcrypt';
import { Request, Response } from "express";

export const getUsers = async (_: Request, response: Response): Promise<Response> =>{
    const users = await User.findAll();

    return response.status(200).json(users);
}

export const createUser = async (request: Request, response: Response): Promise<Response> =>{
    const {name, email, password, role} = request.body;

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        name,
        email,
        password: encryptedPassword,
        role
    };

    await User.create(newUser);

    return response.status(201).json(newUser);
};

export const validateUser = async (request: Request, response:Response):Promise<Response> =>{
    try{
        const { token } = request.body;

        if(!token){
            return response.status(400).json({error: "Token not provided"});
        }
        return response.status(200).json({token: token});
    } catch(error){
        return response.status(500).json({error: "Internal Server Error"});
    }
};