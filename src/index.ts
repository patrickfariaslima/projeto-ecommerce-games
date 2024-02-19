import express from 'express';
import { database } from './database/database';
import { logMiddleware } from './middlewares/logMiddleware';


async function main(){
    await database.sync();

    const app = express();
    app.use(express.json());
    app.use(logMiddleware);

    const PORT = 3000;
    app.listen(PORT, () =>
        console.log(`Servidor rodando em http://localhost:${PORT}/home`));
}

main();