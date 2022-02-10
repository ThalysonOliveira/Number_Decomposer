import { Request, Response, Router } from 'express';
import { makeNumberDecomposer } from '../factories/number-decomposer-factory';

const numberDecomposerRouter = Router();

numberDecomposerRouter.post('/number-decomposer', (request: Request, response: Response) => {
    const httpResponse = makeNumberDecomposer().handle(request);
    return response.status(httpResponse.statusCode).json(httpResponse.body);
});

export default numberDecomposerRouter;
