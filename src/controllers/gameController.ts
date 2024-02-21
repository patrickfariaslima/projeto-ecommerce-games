import Game from "../models/gameModel";
import { Request, Response } from "express";

export const getAll = async (request: Request, response: Response): Promise<Response> => {
    try{
        let {limit}: any = request.query;
        let gameList = await Game.findAll({limit});

        return response.status(200).json(gameList);
    }catch(error){
        return response.status(500).json({error:"Internal Server Error"});
    }
};

export const getOne = async (request: Request, response: Response): Promise<Response> => {
    try {
        const id = request.params.id;
        const game = await Game.findByPk(id);

        if (!game) return response.status(404).end("Game not found! :(");

        return response.status(200).json(game);
    } catch (error) {
        return response.status(500).json({ error: "Internal Server Error" });
    }
};

export const createOne = async (request: Request, response: Response): Promise<Response> => {
    try {
        const game = await Game.create(request.body);

        return response.status(201).json(game);
    } catch (error) {
        console.error("Error creating game:", error);
        return response.status(500).json({ error: "Internal Server Error." });
    }
};

export const updateOne = async (request: Request, response: Response): Promise<Response> => {
    try {
        const filter = { where: { id: request.params.id } };
        const [gameAffected] = await Game.update(request.body, filter);

        if (gameAffected === 0) return response.status(404).end("Game not found! :(");

        const updatedGame = await Game.findByPk(request.params.id);

        return response.status(201).json(updatedGame);
    } catch (error) {
        return response.status(500).json({ error: "Internal Server Error." });
    }
};

export const deleteOne = async (request: Request, response: Response): Promise<Response> => {
    try {
        const filter = { where: { id: request.params.id } };
        const deleted = await Game.destroy(filter);

        if (deleted <= 0) return response.status(404).end("Game not found! :(");

       return response.status(200).end("Game deleted sucessfully! :)");
    } catch (error) {
       return response.status(500).json({ error: "Internal Server Error" });
    }
};

export const linkImage = async (request: any, response: any) => {
    const body = {
        image: request.file.filename
    };

    const filter = {
        where: { id: request.params.id }
    };

    try {
        const game: any = await Game.update(body, filter);
        if (game > 0) {
            const updatedGame = await Game.findOne({ where: { id: request.params.id }});
            if (updatedGame) {
                console.log(updatedGame);
                response.json(updatedGame);
            } else {
                response.status(404).json({ error: "Jogo não encontrado após atualização" });
            }
        } else {
            response.status(404).json({ error: "Nenhum jogo foi atualizado" });
        }
    } catch (error) {
        console.error("Erro ao atualizar o jogo:", error);
        response.status(500).json({ error: "Erro ao atualizar o jogo" });
    }
};
