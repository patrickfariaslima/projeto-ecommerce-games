import express, {Express} from 'express';
import { database } from './database';
import { logMiddleware } from './middlewares/logMiddleware';
import 'dotenv/config';
import routes from './routes/index';


async function main(): Promise<void> {
    await database.sync();

    const app: Express = express();
    app.use(express.json());
    app.use(logMiddleware);

    routes(app);

    const PORT: string | undefined = process.env.PORT;
    app.listen(PORT, () =>
        console.log(`Servidor rodando em http://localhost:${PORT}/home`));
}

main();