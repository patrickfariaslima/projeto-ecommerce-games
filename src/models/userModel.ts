import { DataTypes } from "sequelize";
import { database } from "../database";
import { Order } from "./orderModel";


export const User = database.define("users", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

User.hasMany(Order, { foreignKey: 'userId'});