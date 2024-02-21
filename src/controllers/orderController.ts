import Order from "../models/orderModel";
import { Request, Response } from "express";

export const getAllOrders = async (_: Request, response:Response): Promise<Response> => {
    try{
        const orders = await Order.findAll();

        return response.status(200).json(orders);
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

export const createOrder = async (request: Request, response:Response): Promise<Response> => {
    try{
        const newOrder = await Order.create(request.body);
        return response.status(201).json(newOrder);
    } catch(error){
        return response.status(500).json({error: "Internal Server Error."});
    }
}

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