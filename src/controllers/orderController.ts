import Order from "../models/orderModel";
import { Request, Response } from "express";
import Game from "../models/gameModel";
import { Sequelize } from 'sequelize';


export const getAllOrders = async (request: Request, response:Response): Promise<Response> => {
    try{
        let {limit}: any = request.query;
        let orderList = await Order.findAll({limit});

        return response.status(200).json(orderList);
    } catch(error){
        return response.status(500).json({error: "Internal Server Error."});
    }
}

export const getOneOrder = async (request: Request, response:Response): Promise<Response> => {
    try{
        const {id} = request.params;

        const order = await Order.findByPk(id);

        if(!order) return response.status(404).json({error: "Order not found."});

        return response.status(200).json(order);
    }catch(error){
        return response.status(500).json({error: "Internal Server Error."});
    }
}

export const createOrder = async (request: Request, response: Response): Promise<Response> => {
    try {
        const { payment, status, totalAmount, games } = request.body;

        if (!payment || !status || !totalAmount || !games) {
            return response.status(400).json({ error: 'Invalid request payload.' });
        }


        const maxOrderIdResult = await Order.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'maxOrderId']
            ],
            raw: true,
        });

        const newOrderId = (maxOrderIdResult && (maxOrderIdResult as any).maxOrderId ? (maxOrderIdResult as any).maxOrderId : 0) + 1;

        const newOrder = await Order.create({
            id: newOrderId,
            payment,
            status,
            totalAmount,
            OrderGames: games.map((gameId: number) => ({ gameId })),
        }, {
            include: [Game]
        });

        return response.status(201).json(newOrder);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Internal Server Error.' });
    }
};



export const updateOrder = async (request: Request, response:Response): Promise<Response> => {
    try{
        const filter = { where: { id: request.params.id }};

        const [orderAffected] = await Order.update(request.body, filter);

        if(!orderAffected) return response.status(404).json({error: "Order not found."});

        const updatedOrder = await Order.findByPk(request.params.id);

        return response.status(200).json(updatedOrder);
    } catch(error){
        return response.status(500).json({error: "Internal Server Error."});
    }
}

export const deleteOrder = async (request: Request, response:Response): Promise<Response> => {
    try{
        const filter = { where: {id: request.params.id}};
        const deleted = await Order.destroy(filter);

        if(!deleted) return response.status(404).json({error: "Order not found."});

        return response.status(200).json({message: "Order deleted sucessfully."});
    }catch(error){
        return response.status(500).json({error: "Internal Server Error."});
    }
}