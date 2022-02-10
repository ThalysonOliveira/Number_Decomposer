import { NumberDecomposer } from '../../domain/userCases/number-decomposer';
import { badRequest } from '../helpers/http-helpers';
import { Controller } from '../protocols/controller';
import { HttpRequest, HttpResponse } from '../protocols/http';

class NumberDecomposerController implements Controller {
    // eslint-disable-next-line no-unused-vars
    constructor(private numberDecomposer: NumberDecomposer) { }

    handle(httpRequest: HttpRequest): HttpResponse {
        const { number } = httpRequest.body;

        if (!number) { return badRequest('O número é obrigatório!'); }

        if (typeof number !== 'number') return badRequest('Formato do número inválido!');

        if (number < 1) return badRequest('O número fornecido não pode ser menor que um!');

        this.numberDecomposer.decomposer(number);

        return {
            statusCode: 200,
        };
    }
}

export { NumberDecomposerController };
