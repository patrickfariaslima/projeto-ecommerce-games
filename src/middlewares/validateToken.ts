import jwt from "jsonwebtoken";

const secret = 'mySecret';

export const validateToken = async (request: any, response: any, next: any) =>{
    const token = request.headers.authorization?.split(" ")[1];

    if(!token){
        return response.status(401).json({error: "You need to pass a token",});

    }
    try{
        const decoded = jwt.verify(token, secret);
        request.userDecoded = decoded;

        next();
    } catch(error){
        return response.status(401).json({error: "Unauthorized"});
    }
};