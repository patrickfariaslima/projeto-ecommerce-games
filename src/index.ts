import express, {Express} from 'express';
import { database } from './database';
import { logMiddleware } from './middlewares/logMiddleware';
import 'dotenv/config'
import routes from './routes/index';
import { initializeGameAssociations } from './models/gameModel';
import { initializeUserAssociations } from './models/userModel';
import { initializeOrderAssociations } from './models/orderModel';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

async function main(): Promise<void> {
    await database.sync();
    initializeGameAssociations();
    initializeUserAssociations();
    initializeOrderAssociations();

    const app: Express = express();
    app.use(express.json());
    app.use(logMiddleware);
    const directory = path.join(__dirname, '../views');

    app.set('view engine', 'ejs');
    app.set('views', directory);
    app.use(cors({
        origin: "http://localhost:3000/home"
      }));
    app.use(express.urlencoded({extended: true}));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());


    routes(app);

    const PORT: string | undefined = process.env.PORT;
    if(!PORT){
        console.error("A Porta não está definida no arquivo .env");
        process.exit(1);
    }
    app.listen(PORT, () =>
        console.log(`Servidor rodando em http://localhost:${PORT}/home`));
}

main();