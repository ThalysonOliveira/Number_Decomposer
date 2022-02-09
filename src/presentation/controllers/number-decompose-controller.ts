import { Controller } from '../protocols/controller';
import { HttpRequest, HttpResponse } from '../protocols/http';

class NumberDecomposeController implements Controller {
    handle(httpRequest: HttpRequest): HttpResponse {
        if (!httpRequest.body.number) {
            return {
                statusCode: 400,
                body: new Error('O número obrigatório!'),
            };
        }

        if (typeof httpRequest.body.number !== 'number') {
            return {
                statusCode: 400,
                body: new Error('Formato do número inválido!'),
            };
        }

        if (httpRequest.body.number < 1) {
            return {
                statusCode: 400,
                body: new Error('O número fornecido não pode ser menor que um!'),
            };
        }

        return {
            statusCode: 200,
        };
    }
}

export { NumberDecomposeController };
