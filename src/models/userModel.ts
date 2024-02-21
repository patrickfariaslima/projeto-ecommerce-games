import { DataTypes, Model } from "sequelize";
import { database } from "../database";
import Order from "./orderModel";

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
}

class User extends Model<IUser> {
    id!: number;
    name!: string;
    email!: string;
    password!: string;
}

User.init({
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
},
{
    tableName: "users",
    modelName: "User",
    sequelize: database
});

export const initializeUserAssociations = () => {
    User.hasMany(Order, { foreignKey: 'userId' });
};
export default User;
