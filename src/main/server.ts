import dotenv from 'dotenv';

import Log from 'node-color-log';
import app from './config/App';

dotenv.config();

const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => {
    Log.info(`Servidor rodando em http://localhost:${SERVER_PORT}`);
});
