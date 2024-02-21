import { Sequelize } from "sequelize";

const local = process.env.DB_PATH;

export const database = new Sequelize({
    dialect: 'sqlite',
    storage: local,
    logging: false,
});
