import { database } from "../database/database";
import { DataTypes } from "sequelize";

export const Game = database.define("games", {
    idGame: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
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
    }
});