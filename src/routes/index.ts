import { Express, Request, Response } from "express";
import path from "path";
import ejs from 'ejs'
import upload  from "../utils/multerUpload";
import {default as gameRoutes} from "./gameRoutes";
import {default as userRoutes} from "./userRoutes";
import Game from "../models/gameModel";
import {default as orderRoutes} from "./orderRoutes";

export default function routes(app: Express) {
    //GET HOME.html
    app.get("/home", (_: any, response: Response): void =>{
        response.sendFile(path.resolve("public/home.html"));
    });

    //GET UPLOAD.html
    app.get("/upload", (_:any, response: Response): void =>{
        response.sendFile(path.resolve("public/upload.html"));
    });

    app.get("/upload/:id", (request:Request, _: any) =>{
        return ejs.renderFile("uploadGameImage", {id: request.params.id});
    });

    app.post ("/upload", upload.single("image"), (_: any, response: any) =>{
        response.end("Upload Sucessful!")
    });


    app.get('/gametitle', async (request, response) =>{
        let {limit}:any = request.query;
        let gameList = await Game.findAll({ limit });

        response.status(200).json(gameList);
    })

    // ROTAS DE JOGOS
    app.use("/games", gameRoutes);

    // ROTAS DE USUÁRIOS
    app.use("/users", userRoutes)
}