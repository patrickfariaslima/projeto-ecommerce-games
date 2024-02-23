import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import 'dotenv/config'


export const authMiddleware = async (request: Request, response: Response, next: NextFunction) =>{
    try{
        const authToken = request.headers['authorization'];


        const token = authToken && authToken.split(" ")[1]
        console.log("Token recebido: ", token);

        if(!token){
            console.error("Token ausente");
            return response.status(401).json({error: "Token de autenticação ausente"});
        }

        const secret:any = process.env.SECRET;
        console.log("Usando o segredo:", secret);

        const decoded = jwt.verify(token, secret);
        console.log("Token decodificado:", decoded);

        next();
    } catch(error){
        console.error("Erro durante a verificação do token:", error);
        return response.status(401).json({error: "Token de autenticação inválido"});
    }
};
