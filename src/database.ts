import { Sequelize } from "sequelize";
import 'dotenv/config';

const local = process.env.DB_PATH;

export const database = new Sequelize({
    dialect: 'sqlite',
    storage: local,
    logging: false,
});
