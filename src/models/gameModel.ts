import { database } from "../database";
import { DataTypes } from "sequelize";
import { Order } from "./orderModel";

export const Game = database.define("games", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    game: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE(5,2),
        allowNull: false
    },
    platform: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ageRating: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

Game.belongsToMany(Order, { through: 'OrderGames', foreignKey: 'gameId' });