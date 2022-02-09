import { badRequest } from '../helpers/http-helpers';
import { Controller } from '../protocols/controller';
import { HttpRequest, HttpResponse } from '../protocols/http';

class NumberDecomposeController implements Controller {
    handle(httpRequest: HttpRequest): HttpResponse {
        const { number } = httpRequest.body;

        if (!number) { return badRequest('O número obrigatório!'); }

        if (typeof number !== 'number') return badRequest('Formato do número inválido!');

        if (number < 1) return badRequest('O número fornecido não pode ser menor que um!');

        return {
            statusCode: 200,
        };
    }
}

export { NumberDecomposeController };
