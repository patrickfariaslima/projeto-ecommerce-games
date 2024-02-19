import { database } from "../database/database";
import { Game } from "../models/gameModel";

import { Request, Response } from "express";

export const getAll = async (request: any, response: any) => {
    let {limit} = request.query;
    let gameList = await Game.findAll({limit});

    response.json(gameList);
};

export const getOne = async (request: any, response: any) => {
    const id = request.params.idGame;
    const game = await Game.findByPk(id);

    if(!game) return response.status(404).end("O jogo não foi encontrado! :(");

    response.status(200).json(game);
}

export const createOne = async (request: any, response: any) =>{
    const game = await Game.create(request.body);

    response.status(201).json(game);
}

export const updateOne = async (request: Request, response: Response) =>{
    const filter = {where: {idGame: request.params.idGame }};

    const [gameAffected] = await Game.update(request.body, filter);

    if(gameAffected === 0) return response.status(404).end("O jogo não foi encontrado! :(");

    const updatedGame = await Game.findByPk(request.params.idGame);

    response.status(201).json(updatedGame);
};

export const deleteOne = async (request: any, response: any) =>{
    const filter = { where: { idGame: request.params.idGame }};

    const deleted = await Game.destroy(filter);

    if(deleted <=0) return response.status(404).end("O jogo não foi encontrado! :(");

    response.status(200).end("Jogo removido da lista com sucesso! :D");
}