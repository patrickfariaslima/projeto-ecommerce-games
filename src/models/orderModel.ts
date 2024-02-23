import { DataTypes, Model } from "sequelize";
import { database } from "../database";
import Game from "./gameModel";

interface IOrder {
    id: number;
    payment: string;
    status: string;
    totalAmount: string;
    games?: Game[];
    OrderGames?: any[];
}

class Order extends Model<IOrder> {
    id!: number;
    payment!: string;
    status!: string;
    totalAmount!: string;
}

Order.init({
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
        allowNull: false
    },
    totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
},
{
    tableName: "orders",
    modelName: "Order",
    sequelize: database
});

export const initializeOrderAssociations = () => {
    Order.belongsToMany(Game, { through: 'OrderGames', foreignKey: 'orderId' });
};
export default Order;