import { DataTypes, Model } from "sequelize";
import { database } from "../database";

interface IOrder {
    id: string;
    payment: string;
    status: string;
    totalAmount: string;
}

class Order extends Model<IOrder> {
    id!: string;
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

export default Order;
