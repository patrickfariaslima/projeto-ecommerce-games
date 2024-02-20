import { Express, Request, Response } from "express";
import path from "path";
import upload  from "../utils/multerUpload";
import {default as gameRoutes} from "./gameRoutes";
import {default as userRoutes} from "./userRoutes";
// import {default as orderRoutes} from "./orderRoutes";

export default function routes(app: Express) {
    //GET HOME.html
    app.get("/home", (_: any, response: Response): void =>{
        response.sendFile(path.resolve("public/home.html"));
    });

    //GET UPLOAD.html
    app.get("/upload", (_:any, response: Response): void =>{
        response.sendFile(path.resolve("public/upload.html"));
    });

    // //GET UPLOAD.html
    // app.get("/upload/:id", (request: Request, response: Response): void => {
    //     return response.render("uploadTaskImg", { id: request.params.id });
    // });

    //UPLOAD FILE
    app.post("/upload", upload.single("file"), (request:Request, response:Response): void =>{
        response.end("Upload sucessful!");
    });

    // ROTAS DE JOGOS
    app.use("/game", gameRoutes);

    // ROTAS DE USUÁRIOS
    app.use("/users", userRoutes)
}