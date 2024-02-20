import { User } from "../models/userModel";
import bcrypt from 'bcrypt';
import { Request, Response } from "express";

export const getUsers = async (_: Request, response: Response): Promise<Response> =>{
    try {
        const users = await User.findAll();
        return response.status(200).json(users);
    } catch (error) {
        return response.status(500).json({ error: "Internal Server Error." });
    }
};

export const createUser = async (request: Request, response: Response): Promise<Response> =>{
    try {
        const { name, email, password } = request.body;

        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            name,
            email,
            password: encryptedPassword
        };

        await User.create(newUser);

        return response.status(201).json(newUser);
    } catch (error) {
        return response.status(500).json({ error: "Internal Server Error." });
    }
};
