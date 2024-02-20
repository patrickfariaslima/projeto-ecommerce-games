import { DataTypes } from "sequelize";
import { database } from "../database/database";
import { Game } from "./gameModel";
import { User } from "./userModel";

export const Order = database.define("orders", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    payment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull:false
    },
    totalAmount: {
        type: DataTypes.DOUBLE(10,2),
        allowNull: false
    }
});

Order.belongsTo(User, { foreignKey: 'userId' });
Order.belongsToMany(Game, {through: 'OrderGames', foreignKey: 'orderId'});

