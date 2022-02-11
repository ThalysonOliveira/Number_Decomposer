import { Express, json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import Log from 'node-color-log';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger.json';

class Middlewares {
    constructor(app: Express) {
        app.use(cors({ origin: true }));
        app.use(helmet());
        app.use(urlencoded({ extended: true }));
        app.use(json());
        app.use('/number-decomposer/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile));

        Log.info('Importação de middlewares concluídos');
    }
}

export { Middlewares };
