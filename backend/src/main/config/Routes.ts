/* eslint-disable import/no-dynamic-require */
import fs from 'fs';
import path from 'path';
import { Express } from 'express';
import Log from 'node-color-log';

class Routes {
  RouteConfig(app: Express): void {
    const pathRoutes = fs.existsSync(path.resolve(__dirname, '..', 'routes'));

    if (!pathRoutes) {
      app.get('*', (request, response) => response.json('Adicione o diretório main/routes'));

      return Log.warn('Adicione o diretório main/routes.');
    }

    const routeFiles = fs.readdirSync(path.resolve(__dirname, '..', 'routes'));

    if (!routeFiles.length) {
      app.get('*', (request, response) => response.json('Adicione suas rotas no diretório main/routes'));

      return Log.warn('Adicione suas rotas no diretório main/routes.');
    }

    for (const route of routeFiles) {
      const router = require(`../routes/${route}`);
      app.use(router.default);
    }

    Log.info('Importação de rotas encerrada.');
  }
}

export { Routes };
