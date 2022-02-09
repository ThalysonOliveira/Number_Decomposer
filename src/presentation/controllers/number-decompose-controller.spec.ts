import { badRequest } from '../helpers/http-helpers';
import { NumberDecomposeController } from './number-decompose-controller';

describe('Number Decompose Controller', () => {
    test('Should return 400 if no number is provided', () => {
        const sut = new NumberDecomposeController();

        const httpRequest = {
            body: {},
        };

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse).toEqual(badRequest('O número obrigatório!'));
    });

    test('Should return 400 if number is no a numeric type', () => {
        const sut = new NumberDecomposeController();

        const httpRequest = {
            body: {
                number: '1',
            },
        };

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse).toEqual(badRequest('Formato do número inválido!'));
    });

    test('Should return 400 if number provided is less to be one', () => {
        const sut = new NumberDecomposeController();

        const httpRequest = {
            body: {
                number: -1,
            },
        };

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse).toEqual(badRequest('O número fornecido não pode ser menor que um!'));
    });
});
