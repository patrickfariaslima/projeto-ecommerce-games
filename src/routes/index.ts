import express, { Express, Request, Response, response } from "express";
import path from "path";
import upload  from "../utils/multerUpload";
import {default as gameRoutes} from "./gameRoutes";
import {default as userRoutes} from "./userRoutes";
import Game from "../models/gameModel";
import {default as orderRoutes} from "./orderRoutes";
import { authMiddleware } from "../middlewares/authMiddleware";


export default function routes(app: Express) {
    //GET HOME.html
    app.get("/home", (_: any, response: Response): void =>{
        response.sendFile(path.resolve("public/home.html"));
    });

    app.get("/order", (_: any, response: Response): void =>{
        response.sendFile(path.resolve("public/order.html"));
    });

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

    app.use("/games", gameRoutes);

    app.use("/users", userRoutes);

    app.use("/orders", orderRoutes);


    //CATÁLOGO:
    app.get('/gamelist', async (_:any, response:any) =>{
        try{
            console.log("Acesando rota /gamelist")
            const games = await Game.findAll();
            response.render('gamelist', { games });
        } catch(error){
            console.error('Erro ao obter a lista de jogos:', error);
            response.status(500).send('Internal Server Error');
        }
    });

    app.use("/images", express.static(path.join(__dirname, '../../images')));

    app.get('/create', (_:any, response:Response) =>{
        response.sendFile(path.resolve("public/registroUsuario.html"))
    });


    app.get("/newgame", (_: Request, response: Response): void =>{
        response.sendFile(path.resolve("public/newgame.html"));
    });
}