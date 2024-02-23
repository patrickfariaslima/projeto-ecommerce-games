import User, {IUser} from "../models/userModel";
import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const getUsers = async (_: Request, response: Response): Promise<Response> =>{
    try {
        const users = await User.findAll();
        return response.status(200).json(users);
    } catch (error) {
        return response.status(500).json({ error: "Internal Server Error." });
    }
};

export const createUser = async (request: Request, response: Response) =>{
    try {
        console.log("Entrou no controlador createUser");

        const { name, email, password }: Omit<IUser, "id"> = request.body;

        console.log("Dados recebidos:", { name, email, password });

        const existingUser = await User.findOne({where: {email}});

        if(existingUser) {
            return response.status(400).json({error: "Email already exists."});
        };

        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser: Omit<IUser, "id"> = {
            name,
            email,
            password: encryptedPassword
        };

        await User.create(newUser as IUser);

        return response.status(201).json(newUser);
    } catch (error) {
        console.error("Erro no controlador createUser:", error);
        return response.status(500).json({ error: "Internal Server Error." });
    }
};

// export const loginUser = async (request: Request, response:Response) =>{
//     try{
//         const {email, password}: {email: string, password: string} = request.body;

//         const user = await User.findOne({where: {email}});

//         if(!user){
//             return response.status(401).json({ error: "Email inválido"});
//         }

//         const passwordMatch = await bcrypt.compare(password, user.password);

//         if(!passwordMatch){
//             return response.status(401).json({error: "Email e/ou senha incorretos."});
//         }

//         const secret: any = process.env.SECRET;
//         const token = jwt.sign({userId: user.id}, secret, { expiresIn: '2h'});

//         return response.status(200).json({token});
//     } catch(error){
//         return response.status(500).json({error: "Internal Server Error"});
//     }
// }

export const loginUser = async (request: Request, response:Response) =>{
    try{
        const {email, password}: {email: string, password: string} = request.body;

        const user = await User.findOne({where: {email}});

        if(!user){
            return response.status(401).json({ error: "Email inválido"});
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch){
            return response.status(401).json({error: "Email e/ou senha incorretos."});
        }

        const secret: any = process.env.SECRET;
        const token = jwt.sign({userId: user.id}, secret);

        return response.status(200).json({token});
    } catch(error){
        return response.status(500).json({error: "Internal Server Error"});
    }
}