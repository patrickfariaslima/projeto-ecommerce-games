import express, {Express} from 'express';
import { database } from './database';
import { logMiddleware } from './middlewares/logMiddleware';
import 'dotenv/config'
import routes from './routes/index';
import { initializeGameAssociations } from './models/gameModel';
import { initializeUserAssociations } from './models/userModel';


async function main(): Promise<void> {
    initializeGameAssociations();
    initializeUserAssociations();
    await database.sync();

    const app: Express = express();
    app.use(express.json());
    app.use(logMiddleware);

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