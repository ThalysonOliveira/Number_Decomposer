import express from 'express';
import { Middlewares } from './Middlware';
import { Routes } from './Routes';

class App {
    app = express();

    constructor() {
        this.middlewares();
        this.routes();
    }

    middlewares(): Middlewares {
        const middleware = new Middlewares(this.app);
        return middleware;
    }

    routes(): void {
        const route = new Routes().RouteConfig(this.app);
        return route;
    }
}

export default new App().app;
