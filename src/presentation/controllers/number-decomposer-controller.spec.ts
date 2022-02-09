import { badRequest } from '../helpers/http-helpers';
import { NumberDecomposerController } from './number-decomposer-controller';

const makeSut = (): NumberDecomposerController => {
    const sut = new NumberDecomposerController();

    return sut;
};

describe('Number Decomposer Controller', () => {
    test('Should return 400 if no number is provided', () => {
        const sut = makeSut();

        const httpRequest = {
            body: {},
        };

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse).toEqual(badRequest('O número obrigatório!'));
    });

    test('Should return 400 if number is no a numeric type', () => {
        const sut = makeSut();

        const httpRequest = {
            body: {
                number: '1',
            },
        };

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse).toEqual(badRequest('Formato do número inválido!'));
    });

    test('Should return 400 if number provided is less to be one', () => {
        const sut = makeSut();

        const httpRequest = {
            body: {
                number: -1,
            },
        };

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse).toEqual(badRequest('O número fornecido não pode ser menor que um!'));
    });
});
