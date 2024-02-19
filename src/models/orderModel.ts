import { database } from "../database/database";
import { DataTypes } from "sequelize";
import { User } from "./userModel";
import { Game } from "./gameModel";

export const Order = database.define("orders", {
    idOrder: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    payment: {
        type:DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    totalAmount: {
        type: DataTypes.DOUBLE(6, 2),
        allowNull: false,
    },
    userID: {
        type: DataTypes.UUID,
        allowNull: false
    }, // VERIFICAR SE TÁ OK?! 
    gameID: {
        type: DataTypes.UUID,
        allowNull: false
    } // VERIFICAR SE TÁ OK?!
});

User.hasMany(Order, {foreignKey: 'userID', as :'orderModel'});
Order.belongsTo(User, {foreignKey: 'userID'});

// COMO FAZER PARA PUXAR UMA LISTA DE JOGOS PARA DENTRO DO PEDIDO?


//ID do Pedido, ID Usuário, Lista de Produtos (lista de IDs dos produtos no pedido), Forma de Pagamento, Status do Pedido, valor do pedido;