import { database } from "../database";
import { DataTypes, Model } from "sequelize";
import Order from "./orderModel";

interface IGame {
    id: number;
    name: string;
    price: string;
    platform: string;
    ageRating: string;
    genre: string;
    image: string;
}

class Game extends Model<IGame> {
    id!: number;
    name!: string;
    price!: string;
    platform!: string;
    ageRating!: string;
    genre!: string;
    image!: string;
}

Game.init({
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
    price: {
        type: DataTypes.DECIMAL(5, 2),
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
    },
},
{
    tableName: "games",
    modelName: "Game",
    sequelize: database
});

export const initializeGameAssociations = () => {
    Game.belongsToMany(Order, { through: 'OrderGames', foreignKey: 'gameId' });
};

export default Game;
