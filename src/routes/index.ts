import { Express, Request, Response, response } from "express";
import path from "path";
import upload  from "../utils/multerUpload";
import {default as gameRoutes} from "./gameRoutes";
import {default as userRoutes} from "./userRoutes";
import Game from "../models/gameModel";
import {default as orderRoutes} from "./orderRoutes";
import * as gameController from "../controllers/gameController"

export default function routes(app: Express) {
    //GET HOME.html
    app.get("/home", (_: any, response: Response): void =>{
        response.sendFile(path.resolve("public/home.html"));
    });

    // app.get("/upload/:id", (request:Request, response: Response) =>{
    //     return response.render("uploadGameImage", {id: request.params.id});
    // }); O CORRETO

    app.get("/upload/:id", (request: Request, response: Response) => {
        return response.render("uploadGameImage", { id: request.params.id });
    });

    app.post("/upload/:id", upload.single("image"), async (request: any, response: Response) => {
        try {
            const gameId = request.params.id;
            const filename = request.file.filename;

            const game = await Game.findByPk(gameId);
            if (!game) {
                return response.status(404).json({ error: "Jogo não encontrado" });
            }

            game.image = filename;
            await game.save();

            response.status(200).json({ message: "Upload bem-sucedido", filename: filename });
        } catch (error) {
            console.error("Erro ao processar o upload:", error);
            response.status(500).json({ error: "Erro ao processar o upload" });
        }
    });

    // app.get('/gametitle', async (request, response) =>{
    //     let {limit}:any = request.query;
    //     let gameList = await Game.findAll({ limit });

    //     response.status(200).json(gameList);
    // })

    // ROTAS DE JOGOS
    app.use("/games", gameRoutes);

    // ROTAS DE USUÁRIOS
    app.use("/users", userRoutes)
}